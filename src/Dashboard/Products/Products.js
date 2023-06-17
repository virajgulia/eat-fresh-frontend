import { Dialog, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { AddEditProduct } from "./AddEditProduct"
import { useEffect, useState } from "react"
import $ from 'jquery'
import axios from "axios"
import { APIS } from "../../auth/Apis"
import { useDispatch, useSelector } from "react-redux"
import { productCrud } from "../../Store/Slices/ProductSlice"

export const Product = () => {
    const [dialog, setDialog] = useState(false)

    function closeDialog() {
        setDialog(false)
    }
    let sel = useSelector(e => e.product)
    let dispatch = useDispatch()
    async function addProduct(e) {
        e.preventDefault()
        let rr = $('#form input').serializeArray()
        let rr2 = $('#form select').serializeArray()
        let obj = {}
        let formData = [...rr, ...rr2]
        formData.forEach(res => obj[res.name] = res.value)
        console.log(obj)
        try {
            setDialog(false)
            dispatch(productCrud({ method: 'post', data: obj }))
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (sel.length == 0) {
            dispatch(productCrud({ method: 'get' }))
        }
    }, [])

    return (
        <>
            <Dialog
                open={dialog}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <div className="p-3">
                    <form onSubmit={addProduct} id="form">
                        <AddEditProduct closeDialog={closeDialog} />
                    </form>
                </div>
            </Dialog>
            <div className="text-end p-3">
                <button className="btn_primary" onClick={() => setDialog(true)}>Add Product</button>
            </div>
            <h2 className="text-center">All Products</h2>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sno.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sel.map((res, key) => {
                        return (
                            <TableRow key={key}>
                                <TableCell>{key + 1}</TableCell>
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{res.category}</TableCell>
                                <TableCell>
                                    <i class="pointer fs-3 fa fa-trash-o" aria-hidden="true"></i>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </>
    )
}