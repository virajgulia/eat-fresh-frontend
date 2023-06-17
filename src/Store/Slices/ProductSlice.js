import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIS } from "../../auth/Apis";
import { loader } from "./LoaderSlice";


export const productCrud = createAsyncThunk('fetchProducts', async (data, thunk_api) => {
    thunk_api.dispatch(loader('start'))
    const res = await axios[data.method](APIS.PRODUCT.common, data.data && data.data)
    thunk_api.dispatch(loader('stop'))
    return { type: data.method, data: res.data }
})


export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(productCrud.fulfilled, (state, action) => {
            switch (action.payload.type) {
                case 'post':
                    return [...state, action.payload.data]
                case 'get':
                    return action.payload.data
                default:
                    break;
            }
        })
        builder.addCase(productCrud.rejected, (state, action) => {

            return state
        })
        builder.addCase(productCrud.pending, (state, action) => {

            return state
        })
    }
})
