import {configureStore} from "@reduxjs/toolkit";
import AllZone from "./AllZone";
import AdminSlice from "./AdminSlice";
export const store = configureStore({
    reducer: {
        zone: AllZone,
        admin:AdminSlice
    }
})