import { configureStore } from "@reduxjs/toolkit";
import carsReducer from '../pages/CariMobil/CarsSlice'
import CarsSlice from "../pages/CariMobil/CarsSlice";

export default configureStore({
    reducer: {
        cars: carsReducer,
        cars: CarsSlice
    }
}) 

