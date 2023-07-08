import { ItemSlice } from "./Slices/ItemSlice";
import { TablesSlice } from "./Slices/TableSlice";
import { configureStore } from "@reduxjs/toolkit";
import { LoaderSlice } from "./Slices/LoaderSlice";
import { productSlice } from "./Slices/ProductSlice";
import { categorySlice } from "./Slices/CategorySlice";


export const store = configureStore({
    reducer: {
        item: ItemSlice.reducer,
        table: TablesSlice.reducer,
        loader: LoaderSlice.reducer,
        product: productSlice.reducer,
        category: categorySlice.reducer
    }
})