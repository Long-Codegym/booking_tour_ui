import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllTours = createAsyncThunk(
    "getAllBill",
    async (filterBill) => {
        const res = await customAxios.get("admin/findBillByIdStatus" + filterBill , {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)
