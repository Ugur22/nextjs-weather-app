'use client';

import React from 'react';
import { useGetWeatherQuery } from '../redux/slices/apiSlice';
import { Card, Title, Image, Text, Badge, Button, Group, SimpleGrid, Loader, Input } from '@mantine/core';
import { setSelectedLocation } from '../redux/slices/LocationSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function page() {
  const selectedLocation = useSelector(state => state.location.selectedLocation);
  const dispatch = useDispatch();
  const { data, error, isLoading, isSuccess } = useGetWeatherQuery(selectedLocation);

  const handleLocationChange = e => {
    e.preventDefault();
    const newLocation = e.target.querySelector('input').value;
    if (newLocation === '') return;
    dispatch(setSelectedLocation(newLocation));
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <>
      <Title>15 days Weather {selectedLocation}</Title>
      <form onSubmit={handleLocationChange}>
        <Group>
          <Input.Wrapper label='Select Location' style={{ marginBottom: '2rem', marginTop: '1rem	' }}>
            <Input />
          </Input.Wrapper>
        </Group>
      </form>
      {isSuccess && data && (
        <SimpleGrid cols={3}>
          {data.days.map((day: any, index: number) => (
            <Card key={index} shadow='sm' padding='lg' radius='md' withBorder>
              <Group justify='space-between' mt='md' mb='xs'>
                <Text fw={500}>Date: {day.datetime}</Text>
                <Badge color='pink' variant='light'>
                  Temperature: {day.temp}C
                </Badge>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      )}
      {error && <div>City does not exist try again</div>}
    </>
  );
}
