import { Card, Group, Text, Badge } from '@mantine/core';
import React from 'react';

interface Day {
  datetime: string;
  temp: number;
}

export default function WeatherCard({ day, index }: { day: Day; index: number }) {
  return (
    <Card key={index} shadow='sm' padding='lg' radius='md' withBorder>
      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>Date: {day.datetime}</Text>
        <Badge color='pink' variant='light'>
          Temperature: {day.temp}C
        </Badge>
      </Group>
    </Card>
  );
}
