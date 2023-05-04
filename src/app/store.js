import { configureStore } from "@reduxjs/toolkit";
import carsReducer from '../pages/CariMobil/CarsSlice'

export default configureStore({
    reducer: {
        cars: carsReducer
    }
}) 

