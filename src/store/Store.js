import { configureStore } from "@reduxjs/toolkit";
import ObjectReducers from "./reducers/objectReducer";

export const store = configureStore({
    reducer : ObjectReducers
})