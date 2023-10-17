import { configureStore } from '@reduxjs/toolkit';
import LocationSlice from './slices/LocationSlice';
import WeatherSlice from './slices/WeatherSlice';
import { weatherApi } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    weather: WeatherSlice,
    location: LocationSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;
