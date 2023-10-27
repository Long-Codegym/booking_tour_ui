import {createSlice} from "@reduxjs/toolkit";
import {allZone} from "../service/zoneService";
import {getAllToursByZone} from "../service/toursService";
const initialState = {
    zone: {
        allZone: [],
        allTourByZone: []
    }
}
const AllZone = createSlice ({
    name:"Zone",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(allZone.fulfilled, (state, action) => {
            state.zone.allZone = action.payload;
        })
        builder.addCase(getAllToursByZone.fulfilled, (state, action) => {
            state.zone.allTourByZone = action.payload;
        })
    }
})
export default AllZone.reducer