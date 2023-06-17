import { configureStore } from "@reduxjs/toolkit";
import { TablesSlice } from "./Slices/TableSlice";
import { ItemSlice } from "./Slices/ItemSlice";
import { LoaderSlice } from "./Slices/LoaderSlice";
import { productSlice } from "./Slices/ProductSlice";


export const store = configureStore({
    reducer: {
        table: TablesSlice.reducer,
        item: ItemSlice.reducer,
        loader: LoaderSlice.reducer,
        product: productSlice.reducer
    }
})