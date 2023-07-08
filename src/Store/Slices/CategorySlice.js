import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIS } from "../../auth/Apis";
import { loader } from "./LoaderSlice";
import axios from "axios";


export const categorycrud = createAsyncThunk('fetchCategory', async (data, thunk_api) => {
    console.log(data)
    thunk_api.dispatch(loader('start'))


    const res = await axios[data.method](`${APIS.CATEGORY.add}`, data.data && data.data)
    console.log(res.data)
    thunk_api.dispatch(loader('stop'))
    return { method: data.method, data: res.data }

})


export const categorySlice = createSlice({
    name: 'item',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(categorycrud.fulfilled, (state, action) => {
            console.log(action.payload.data)
            switch (action.payload.method) {
                case 'get':
                    return action.payload.data
                case 'post':
                    return [...state, action.payload.data[0]]
                default:
                    break;
            }
        })
    }
})