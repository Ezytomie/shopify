import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.instance"
// import Toast from "react-hot-toast";

export const login = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.post("/login", payload)
            console.log(data)
            localStorage.setItem("token", data?.token)
            localStorage.setItem("id", data?.isAccountExist?.id)
            return data?.isAccountExist
        } catch (error) {
            console.log(error.response.data.err)
            return rejectWithValue(error.response.data.err)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            localStorage.removeItem("token")
            localStorage.removeItem("id")
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error)
        }
    }
)

export const keepLogin = createAsyncThunk(
    "auth/keepLogin",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.get("/auth")
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const register = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.post("/register", payload)
            return data?.data
        } catch (error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data.message)
        }
    }
)