import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCarsApi } from "./CarsApi";

export const fetchCars = createAsyncThunk (
    'cars/fetchCars',
    async () => {
        const res = await fetchCarsApi()
        return res.data
    }
)

export const carSlice = createSlice({
    name: 'cars',
    initialState: {
        data: [],
        loading: 'idle',
        message: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.loading = 'idle'
                state.data = action.payload
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.loading = 'idle'
                state.message = action.payload
            })
    }
})

export const selectCars = (state) => state.cars.data
export const selectCarsLoading = (state) => state.cars.loading

export default carSlice.reducer