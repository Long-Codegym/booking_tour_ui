import {createSlice} from "@reduxjs/toolkit";
import {allZone} from "../service/zoneService";
import {
    addBill,
    allTourId, getAllBillByAcc, getAllBillByUser,
    getAllCity,
    getAllSupplies,
    getAllToursByZone,
    getTourByFilter,
    getToursById, tourByMonth
} from "../service/toursService";
const initialState = {
    zone: {
        allZone: [],
        allTourByZone: [],
        tour:{},
        tourByFilter:[],
        supplies:[],
        city:[],
        tourByIdAcc:[],
        allBillByIdAcc:[],
        allBillByIdUser:[],
        dataBill:"",
        tourByMonth: []
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
        })
        builder.addCase(getAllCity.fulfilled, (state, action) => {
            state.zone.city = action.payload;
        })
        builder.addCase(allTourId.fulfilled, (state, action) => {
            state.zone.tourByIdAcc = action.payload;
        })
        builder.addCase(getAllBillByAcc.fulfilled, (state, action) => {
            state.zone.allBillByIdAcc = action.payload;
        })
        builder.addCase(getAllBillByUser.fulfilled,(state,action) =>{
            state.zone.allBillByIdUser = action.payload;
        })
        builder.addCase(addBill.fulfilled,(state,action) =>{
            state.zone.dataBill = action.payload;
        })
        builder.addCase(tourByMonth.fulfilled,(state,action) =>{
            state.zone.tourByMonth = action.payload;
        })
    }
})
export default AllZone.reducer
