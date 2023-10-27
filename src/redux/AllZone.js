import {createSlice} from "@reduxjs/toolkit";
import {allZone} from "../service/zoneService";
import {getAllToursById, getAllToursByZone, getToursById} from "../service/toursService";
const initialState = {
    zone: {
        allZone: [],
        allTourByZone: [],
        tour:{}
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
        builder.addCase(getToursById.fulfilled, (state, action) => {
            state.zone.tour = action.payload;
        })
    }
})
export default AllZone.reducer