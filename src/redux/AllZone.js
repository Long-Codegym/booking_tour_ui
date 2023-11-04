import {createSlice} from "@reduxjs/toolkit";
import {allZone} from "../service/zoneService";
import {getAllCity, getAllSupplies, getAllToursByZone, getTourByFilter, getToursById} from "../service/toursService";
const initialState = {
    zone: {
        allZone: [],
        allTourByZone: [],
        tour:{},
        tourByFilter:[],
        supplies:[],
        city:[]
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
        builder.addCase(getTourByFilter.fulfilled, (state, action) => {
            state.zone.tourByFilter = action.payload;
        })
        builder.addCase(getAllSupplies.fulfilled, (state, action) => {
            state.zone.supplies = action.payload;
            console.log(state.zone.supplies = action.payload)
        })
        builder.addCase(getAllCity.fulfilled, (state, action) => {
            state.zone.city = action.payload;
            console.log(state.zone.city = action.payload)
        })
    }
})
export default AllZone.reducer
