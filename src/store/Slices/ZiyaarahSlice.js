import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../BaseUrl";
import { set } from "react-hook-form";
 
export const fetchTriplist = createAsyncThunk(      
  "trip/fetchTriplist",
  async (rejectWithValue) => {
    try {
      const response = await axios.get(`${BASE_URL}/trips`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch trip list");
    }
  }
);
export const CreateTrip = createAsyncThunk(      
  "trip/CreateTrip",
  async (tripData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/trips`, tripData);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to create trip");
    }
  }
);


export const UpdateTrip = createAsyncThunk(      
  "trip/UpdateTrip",
  async (tripData) => {
    try {
      const response = await axios.put(`${BASE_URL}/trips/${tripData.id}`, tripData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update trip");
    }
  }
);
 export const DeleteTrip = createAsyncThunk(      
  "trip/DeleteTrip",
  async (tripData) => {
    try {
      const response = await axios.delete(`${BASE_URL}/trips/${tripData.id}`, { data: tripData });
      return response.data;
    } catch (error) {
      throw new Error("Failed to delete trip");
    }
  }
);

const ZiyaarahSlice = createSlice({
  name: "ziyaarah",
  initialState: { triplist: [], loading: false, error: null },
  reducers: { 
  clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTriplist.pending, (state) => {
        state.loading = true; 
      })
      .addCase(fetchTriplist.fulfilled, (state, action) => {
        state.loading = false;
        state.triplist = action.payload;
      })
      .addCase(fetchTriplist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch trip list";
      })
      .addCase(CreateTrip.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateTrip.fulfilled, (state, action) => {
        state.loading = false;
        state.triplist.push(action.payload);
      })
      .addCase(CreateTrip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(UpdateTrip.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateTrip.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.triplist.findIndex((trip) => trip.id === action.payload.id);
        if (index !== -1) {
          state.triplist[index] = action.payload;
        }
      })
      .addCase(UpdateTrip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(DeleteTrip.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteTrip.fulfilled, (state, action) => {
        state.loading = false;
        state.triplist = state.triplist.filter((trip) => trip.id !== action.payload.id);
      })
      .addCase(DeleteTrip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});
export const { clearError } = ZiyaarahSlice.actions;

export default ZiyaarahSlice.reducer;