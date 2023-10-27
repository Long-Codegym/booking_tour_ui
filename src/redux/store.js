import {configureStore} from "@reduxjs/toolkit";
import AllZone from "./AllZone";
export const store = configureStore({
    reducer: {
        zone: AllZone
    }
})