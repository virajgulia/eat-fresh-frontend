import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { APIS } from "../../auth/Apis";
import { toast } from "react-toastify";

export const cartCrud = createAsyncThunk('fetchCart', async (data) => {
    let { token, _id } = JSON.parse(localStorage.getItem('eatFreshUserData'))
    let token2 = { headers: { "Authorization": token } }

    let res;
    switch (data.method) {
        case 'getcart':
            res = await axios.post(APIS.CART.getCartLength, { userId: _id }, token2)
            break;
        case 'addcartitem':
            res = await axios.post(APIS.CART.add, { ...data.data, userId: _id }, token2)
            break;
        default:
            break;
    }
    return { method: data.method, data: res.data }
})

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: [],
    extraReducers: (builder) => {

        builder.addCase(cartCrud.fulfilled, (state, action) => {
            switch (action.payload.method) {
                case "getcart":
                    return action.payload.data
                case "addcartitem":
                    let arr = [...current(state)]
                    let ind = current(state).findIndex(re => re.productId == action.payload.data)
                    if (ind == -1) {
                        arr.push({ productId: action.payload.data, quantity: 1 })
                    }
                    else {
                        console.log(arr[ind].quantity)
                        toast.success('Already In Cart So We Increase Its Quantity By One')
                        arr[ind] = { productId: arr[ind].productId, quantity: arr[ind].quantity + 1 }
                    }
                    return [...arr]
                default:
                    return state
            }

        })

        builder.addCase(cartCrud.rejected, (state, action) => {
            return state
        })

    }

})