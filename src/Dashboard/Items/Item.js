import { Dialog, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { AddEditItem } from "./AddEditItem"
import $ from 'jquery'
import { useDispatch, useSelector } from "react-redux"
import { ItemCrud } from "../../Store/Slices/ItemSlice"

export const Item = () => {
    const [dialog, setDialog] = useState(false)
    const [mode, setMode] = useState('')
    let sel = useSelector(sel => sel.item)
    let dispatch = useDispatch()

    const [itemData, setItemData] = useState({
        name: '',
        price: ''
    })

    async function addItem(e) {

        e.preventDefault()
        console.log(itemData)
        try {
            if (mode == 'add') {
                dispatch(ItemCrud({ method: 'post', data: itemData }))
                setDialog(false)
            }
            else {
                dispatch(ItemCrud({ method: 'put', params: { _id: itemData._id }, data: itemData }))
                setDialog(false)
            }
            setItemData({
                name: '',
                price: ''
            })
        }

        catch (err) {
            console.log(err)
        }
    }

    function moveToEdit(data) {
        setMode('edit')
        setDialog(true)
        setItemData(data)
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
                        <AddEditItem itemData={{ state: itemData, set: setItemData }} closeDialog={() => setDialog(false)} />
                    </form>
                </div>
            </Dialog>


            <div className="p-3">
                <div className="text-end p-3">
                    <button className="btn_primary" onClick={() => {
                        setMode('add')
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
                                    <TableCell>
                                        <i onClick={() => deleteItem(res._id)} class="pointer fs-3 fa fa-trash-o" aria-hidden="true"></i>
                                        <i onClick={() => moveToEdit(res)} class="pointer fs-3 fa fa-edit" aria-hidden="true"></i>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}