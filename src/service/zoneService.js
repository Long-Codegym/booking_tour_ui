import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const allZone = createAsyncThunk(
    "getAllBillByIdCCDV",
    async (allZone) => {
        const res = await customAxios.get("zone", {headers: {Authorization: "Bearer " + localStorage.getItem("token")}});
        return res.data;
    }
)