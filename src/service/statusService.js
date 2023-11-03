import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllStatus = createAsyncThunk(
    "getAllStatus",
    async (idAdmin) => {
        const res = await customAxios.get("status/allStatus",{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)