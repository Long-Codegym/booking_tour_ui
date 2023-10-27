import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

// export const getAllTours = createAsyncThunk(
//     "getAllBill",
//     async () => {
//         const res = await customAxios.get("tours"  , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
//         return res.data;
//     }
// )
export const getAllToursByZone = createAsyncThunk(
    "getAllToursByZone",
    async (nameZone) => {
        const res = await customAxios.get("tours/getTourByZone/" + nameZone , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getToursById = createAsyncThunk(
    "getToursById",
    async (idTour) => {
        const res = await customAxios.get("tours/getTourById/" + idTour , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)