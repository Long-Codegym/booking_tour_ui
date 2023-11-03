import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllAccByAdmin = createAsyncThunk(
    "getAllAccByAdmin",
    async (idAdmin) => {
        const res = await customAxios.get("accounts/allAccount?id=" + idAdmin ,{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)