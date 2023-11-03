import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllRole = createAsyncThunk(
    "getAllRole",
    async (idAdmin) => {
        const res = await customAxios.get("roles/allRole",{headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)