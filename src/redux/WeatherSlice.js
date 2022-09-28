import { createSlice } from "@reduxjs/toolkit";

export const WeatherSlice = createSlice({
  name: "user",
  initialState: {
    Location: "",
  },
  reducers: {
    AddLocation: (state, action) => {
      state.Location = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddUser } = WeatherSlice.actions;

export default WeatherSlice.reducer;
