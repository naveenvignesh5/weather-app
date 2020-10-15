import React from 'react';
import useSWR from 'swr';

// components
import { WEATHER_STACK_API, WEATHER_STACK_API_KEY } from '../../config';

export function Home() {
  const { data, error, loading } = useSWR(
    `${WEATHER_STACK_API}/current?access_key=${WEATHER_STACK_API_KEY}&query=New York`
  );

  if (loading) return null;

  if (error) return `Error: ${error.message}`;

  console.log(data);

  return (
    <div>
      <p>Home Screen</p>
    </div>
  );
}
