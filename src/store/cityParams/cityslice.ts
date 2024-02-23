import { createSlice } from "@reduxjs/toolkit";

export interface CityParams {
  city: string;
}

interface CityState {
  city: string;
}

const initialState: CityState = {
  city: "",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});
export default citySlice.reducer;
export const { setCity } = citySlice.actions;
