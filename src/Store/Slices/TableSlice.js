import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIS } from "../../auth/Apis";
import { toast } from "react-toastify";
import { loader } from "./LoaderSlice";


export const tableCrud = createAsyncThunk('fetchTables', async (data, thunk_api) => {
    thunk_api.dispatch(loader('start'))
    const res = await axios[data.met](APIS.TABLE.common, data.data && data.data)
    console.log(res)
    thunk_api.dispatch(loader('stop'))
    return { data: res.data, type: data.met }
})


export const TablesSlice = createSlice({
    name: 'table',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(tableCrud.fulfilled, (state, action) => {
            let { type, data } = action.payload
            if (type == 'get') {
                console.log(data)
                return data
            }
            else if (type == 'post') {
                toast.success('Data updated success fully')
                return [...state, data[0]]
            }
        })
        builder.addCase(tableCrud.rejected, (state, action) => {

            return state
        })
        builder.addCase(tableCrud.pending, (state, action) => {
            return state
        })

    }
})