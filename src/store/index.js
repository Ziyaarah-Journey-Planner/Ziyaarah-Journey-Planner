import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/Authslice";
import ZiyaarahReducer from "./Slices/ZiyaarahSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    ziyaarah: ZiyaarahReducer,
  },
});
export default store;

