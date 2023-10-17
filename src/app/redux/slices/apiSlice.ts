import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services',
  }),
  endpoints: builder => ({
    getWeather: builder.query<any, void>({
      query: location => `/timeline/${location}?unitGroup=metric&key=G2H83YBKN9P4QJM4EGVLTPH9U&contentType=json`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
