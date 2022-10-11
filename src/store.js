import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/counterSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})