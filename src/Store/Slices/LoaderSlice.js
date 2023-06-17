import { createSlice } from "@reduxjs/toolkit";


export const LoaderSlice = createSlice({
    name: 'loader',
    initialState: false,
    reducers: {
        loader(state, action) {
            console.log(action.payload)
            switch (action.payload) {
                case 'start':
                    return true
                case 'stop':
                    return false
                default:
                    break;
            }
            return state
        }
    }
})
export const { loader } = LoaderSlice.actions



