import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "./planet";
// import moviesReducer from './movies'
// import usersReducer from './users';


export const store = configureStore({
    reducer:{
        planet: planetReducer
    }
})