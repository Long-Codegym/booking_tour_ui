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
        const res = await customAxios.get("tours/getTourByZone/" + nameZone, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getToursById = createAsyncThunk(
    "getToursById",
    async (idTour) => {
        const res = await customAxios.get("tours/getTourById/" + idTour, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getTourByFilter = createAsyncThunk(
    "getTourByFilter",
    async (filter) => {
        const res = await customAxios.post("tours/getAllTourByFilter", filter, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getAllSupplies = createAsyncThunk(
    "getAllSupplies",
    async () => {
        const res = await customAxios.get("supplies", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getAllCity = createAsyncThunk(
    "getAllCity",
    async () => {
        const res = await customAxios.get("cities", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const addTour = createAsyncThunk(
    "addTour",
    async (tourDTO) => {
        const res = await customAxios.post("tours/createTour",tourDTO, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)