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
export const addBill = createAsyncThunk(
    "addBill",
    async (bill) => {
        const res = await customAxios.post("bills",bill, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const allTourId = createAsyncThunk(
    "allTourId",
    async (id) => {
        const res = await customAxios.get("tours/listTourById/"+ id, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const addImg = createAsyncThunk(
    "addImg",
    async (img) => {
        const res = await customAxios.post("images/addImg", img, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const    getAllBillByAcc = createAsyncThunk(
    "getAllBillByAcc",
    async ({idStatus,idAccount}) => {
        const res = await customAxios.post(`bills/getBillByIdAcc/${idStatus}/${idAccount}`, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const getAllBillByUser = createAsyncThunk(
    "getAllBillByUser",
    async ({idStatus,idAccount}) => {
        console.log(idStatus, idAccount)
        const res = await customAxios.post(`bills/getBillByIdUser/${idStatus}/${idAccount}`, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const cancelBill = createAsyncThunk(
    "cancelBill",
    async (idBill) => {
        const res = await customAxios.post("bills/cancel/" + idBill, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const confirmBill = createAsyncThunk(
    "confirmBill",
    async (idBill) => {
        const res = await customAxios.post("bills/confirm/"+ idBill, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const complete = createAsyncThunk(
    "complete",
    async (idBill) => {
        const res = await customAxios.post("bills/complete/"+ idBill, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
export const tourByMonth = createAsyncThunk(
    "tourByMonth",
    async () => {
        const res = await customAxios.get("tours", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)