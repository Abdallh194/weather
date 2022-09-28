import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./WeatherSlice";
let Store = configureStore({
  reducer: {
    Weather: WeatherSlice,
  },
});
export default Store;
