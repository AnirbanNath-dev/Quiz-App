import { createSlice } from "@reduxjs/toolkit";
import auth from "../types/authType";



const initialState: auth = {
    hasStarted : false
}


const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        authStart : (state) => {
            state.hasStarted = true;
        },
        authEnd : (state) => {
            state.hasStarted = false;
        }
    }
})

export const { authStart, authEnd } = authSlice.actions;

export default authSlice.reducer