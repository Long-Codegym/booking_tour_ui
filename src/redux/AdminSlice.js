import {createSlice} from "@reduxjs/toolkit";
import {getAllAccByAdmin} from "../service/accountService";
import {getAllStatus} from "../service/statusService";
import {getAllRole} from "../service/roleService";

const initialState = {
    admin: {
        allAccount: [],
        allRole:[],
        allStatus:[]
    }
}

const AdminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllAccByAdmin.fulfilled,(state,action)=>{
            state.admin.allAccount=action.payload;
        })
        builder.addCase(getAllRole.fulfilled,(state,action)=>{
            state.admin.allRole=action.payload;
        })
        builder.addCase(getAllStatus.fulfilled,(state,action)=>{
            state.admin.allStatus=action.payload;
        })
    }
})


export default AdminSlice.reducer;
