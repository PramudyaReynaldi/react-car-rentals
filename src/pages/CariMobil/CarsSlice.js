import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCarsApi } from "./CarsApi";

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
   const res = await fetchCarsApi();
   return res.data;
});

export const filterCar = createAsyncThunk("cars/filterCar", async (payload) => {
   const res = fetchCarsApi(payload);
   return res;
});

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
               let availableAt = true,
                  capacity = true,
                  typeDriver = true;
               if (filter === "availableAt") {
                  const d1 = new Date(filters[filter]);
                  const d2 = new Date(el[filter]);
                  console.log(d1, d2);
                  // return d1.getTime() >= d2.getTime()
                  availableAt = d1.getTime() >= d2.getTime();
               }
               if (filter === "capacity") {
                  capacity = el[filter] >= filters[filter];
               }
               if (filter === "typeDriver") {
                  typeDriver = el[filter] >= filters[filter];
               }
               return capacity && availableAt && typeDriver;
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
            const cars = action.payload.map((car) => {
               const isPositive = getRandomInt(0, 1) === 1;
               const timeAt = new Date();
               const mutator = getRandomInt(1000000, 100000000);
               const availableAt = String(
                  new Date(
                     timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
                  )
               );
               const typeDriver = isPositive ? "Lepas Kunci" : "Dengan Supir";
               const capacity = getRandomInt(2, 8);
               return {
                  ...car,
                  capacity,
                  typeDriver,
                  availableAt,
               };
            });
            state.data = cars;
            state.initData = cars;
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
