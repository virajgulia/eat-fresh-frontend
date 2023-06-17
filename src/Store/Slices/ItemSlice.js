import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { APIS } from "../../auth/Apis"
import { loader } from "./LoaderSlice"


export const ItemCrud = createAsyncThunk('fetchItems', async (data, thunk_api) => {
    thunk_api.dispatch(loader('start'))
    const res = await axios[data.method](`${APIS.ITEM.common}${data.params !== undefined ? `/${data.params._id}` : ''}`, data.data && data.data)
    console.log(res.data)
    thunk_api.dispatch(loader('stop'))
    return { method: data.method, data: res.data }

})

export const ItemSlice = createSlice({
    name: 'item',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(ItemCrud.fulfilled, (state, action) => {

            switch (action.payload.method) {
                case 'post':
                    return [...state, action.payload.data]
                case 'get':
                    return action.payload.data
                case 'delete':
                    return state.filter(res => res._id !== action.payload.data)
                default:
                    break;
            }
        })

        builder.addCase(ItemCrud.rejected, (state, action) => {

            return state
        })
        builder.addCase(ItemCrud.pending, (state, action) => {

            return state
        })
    }
})




