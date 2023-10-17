import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  weatherData: Record<string, any>;
  selectedLocation: string | null;
}

const initialState: WeatherState = {
  weatherData: {},
  selectedLocation: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData(state, action: PayloadAction<Record<string, any>>) {
      state.weatherData = action.payload;
    },
    setSelectedLocation(state, action: PayloadAction<string>) {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setWeatherData, setSelectedLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
