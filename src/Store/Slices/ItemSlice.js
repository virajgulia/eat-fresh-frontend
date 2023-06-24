import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { APIS } from "../../auth/Apis"
import { loader } from "./LoaderSlice"


export const ItemCrud = createAsyncThunk('fetchItems', async (data, thunk_api) => {
    console.log(data)
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
                    console.log('222222222222222')
                    return [...state, action.payload.data]
                case 'get':
                    console.log('333333333333')
                    return action.payload.data
                case 'delete':
                    console.log('4444444444')
                    return state.filter(res => res._id !== action.payload.data)
                case "put":
                    state[state.findIndex(r => r._id == action.payload.data._id)] = action.payload.data
                    return state
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




