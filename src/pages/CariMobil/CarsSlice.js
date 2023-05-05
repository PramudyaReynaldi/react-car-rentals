import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCarsApi } from "./CarsApi";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
   const res = await fetchCarsApi();
   return res.data;
});

export const filterCar = createAsyncThunk(
   "cars/filterCar",
   async (payload) => {
      const res = fetchCarsApi(payload);
      return res;
   }
);

export const carSlice = createSlice({
   name: "cars",
   initialState: {
      data: [],
      loading: "idle",
      message: "",
   },
   reducers: {
      filterCars: (state, action) => {
         const filters = action.payload;
         state.data = state.initData.filter((el) => {
            return Object.keys(filters).every((filter) => {
               if (filter === "availableAt") {
                  const d1 = new Date(filters[filter]);
                  const d2 = new Date(el[filter]);

                  console.log(d1, d2);

                  return d1.getTime() >= d2.getTime();
               }
               return filters[filter] === el[filter];
            });
         });
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCars.pending, (state) => {
            state.loading = "loading";
         })
         .addCase(fetchCars.fulfilled, (state, action) => {
            state.loading = "idle";
            state.data = action.payload;
            state.initData = action.payload;
         })
         .addCase(fetchCars.rejected, (state, action) => {
            state.loading = "idle";
            state.message = action.payload;
         });
   },
});

export const selectCars = (state) => state.cars.data;
export const { filterCars } = carSlice.actions;
export const selectCarsLoading = (state) => state.cars.loading;

export default carSlice.reducer;
