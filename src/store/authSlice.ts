import { createSlice } from "@reduxjs/toolkit";
import auth from "../types/authType";



const initialState: auth = {
    hasStarted : false,
    name : "",
    limit : 10,
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
        },

        addName : (state , actions) => {
            state.name = actions.payload;
        }

    }
})

export const { authStart, authEnd , addName} = authSlice.actions;

export default authSlice.reducer