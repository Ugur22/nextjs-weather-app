'use client';

import { setSelectedLocation, LocationState } from '@/app/redux/slices/LocationSlice';
import { useGetWeatherQuery } from '@/app/redux/slices/apiSlice';
import { Loader, Title, Group, Text, Input, SimpleGrid, Card, Badge } from '@mantine/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WeatherCard from './WeatherCard';

export default function WeatherList() {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(state => state.location.selectedLocation);

  const { data, error, isLoading, isSuccess } = useGetWeatherQuery(selectedLocation);

  const handleLocationChange = e => {
    e.preventDefault();
    const newLocation = e.target.querySelector('input').value;
    if (newLocation === '') return;
    dispatch(setSelectedLocation(newLocation));
  };

  if (isLoading) return <Loader />;

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
            <WeatherCard key={index} day={day} index={index} />
          ))}
        </SimpleGrid>
      )}
      {error && <div>City does not exist try again</div>}
    </>
  );
}
