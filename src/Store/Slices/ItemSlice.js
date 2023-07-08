import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { APIS } from "../../auth/Apis"
import { loader } from "./LoaderSlice"


export const ItemCrud = createAsyncThunk('fetchItems', async (data, thunk_api) => {
    console.log(data)
    thunk_api.dispatch(loader('start'))
    let userData = JSON.parse(localStorage.getItem('eatFreshUserData'))
    let token = { headers: { "Authorization": userData.token } }
    let res;
    switch (data.method) {
        case "get":
            res = await axios.get(APIS.ITEM.common, token)
            break;
        case "post":
            res = await axios.post(APIS.ITEM.common, data.data, token)
            break;
        case "delete":
            res = await axios.delete(`${APIS.ITEM.common}/${data.params._id}`, token)
            break;
        case "put":

            res = await axios.put(`${APIS.ITEM.common}/${data.params._id}`, data.data, token)
            break;
        default:
            break;
    }

    console.log(res.data)
    thunk_api.dispatch(loader('stop'))
    return { method: data.method, data: res.data }

})

export const ItemSlice = createSlice({
    name: 'item',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(ItemCrud.fulfilled, (state, action) => {
            console.log(action.payload)
            switch (action.payload.method) {
                case 'post':
                    return [...state, action.payload.data]
                case 'get':
                    return action.payload.data
                case 'delete':
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




