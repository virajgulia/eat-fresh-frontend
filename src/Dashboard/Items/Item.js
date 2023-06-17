import { Dialog, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { AddEditItem } from "./AddEditItem"
import $ from 'jquery'
import { useDispatch, useSelector } from "react-redux"
import { ItemCrud } from "../../Store/Slices/ItemSlice"

export const Item = () => {
    const [dialog, setDialog] = useState(false)

    let sel = useSelector(sel => sel.item)
    let dispatch = useDispatch()


    async function addItem(e) {
        e.preventDefault()
        let rr = $('#form input').serializeArray()
        let obj = {}

        rr.forEach(res => obj[res.name] = res.value)
        console.log(obj)
        try {
            dispatch(ItemCrud({ method: 'post', data: obj }))
            setDialog(false)
        }
        catch (err) {
            console.log(err)
        }
    }
    async function getAllItems() {
        try {
            dispatch(ItemCrud({ method: 'get' }))

        }
        catch (err) {
            console.log(err)
        }
    }

    async function deleteItem(id) {
        try {
            dispatch(ItemCrud({ method: 'delete', params: { _id: id } }))
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (sel.length == 0) {
            getAllItems()
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
                    <form onSubmit={addItem} id="form">
                        <AddEditItem closeDialog={() => setDialog(false)} />
                    </form>
                </div>
            </Dialog>


            <div className="p-3">
                <div className="text-end p-3">
                    <button className="btn_primary" onClick={() => {

                        setDialog(true)
                    }}>Add Item</button>
                </div>
                <h2 className="center">All Items</h2>
                <div className="table_card_con">
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sno.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sel.map((res, key) => {
                            return (
                                <TableRow key={key}>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell>{res.name}</TableCell>
                                    <TableCell><i onClick={() => deleteItem(res._id)} class="pointer fs-3 fa fa-trash-o" aria-hidden="true"></i></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}