import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { TablesSlice, addItem, tableCrud } from "../../Store/Slices/TableSlice"
import TableService from "../../Services/TableService"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { ItemCrud } from "../../Store/Slices/ItemSlice"
import "./Table.css"
import { APIS } from "../../auth/Apis"

export const VisitTable = () => {

    let { id } = useParams()

    const [table, setTable] = useState({})
    let sel = useSelector(s => s)
    let navigate = useNavigate()

    console.log(sel)
    let dispatch = useDispatch()
    async function getTableById() {

        try {
            let res = await TableService.getSingleTable(id)
            console.log(res.data)
            setTable(res.data[0])
        }
        catch (err) {
            console.log(err)
        }



    }

    const getAllItems = async () => {
        try {
            dispatch(ItemCrud({ method: 'get' }))
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTableById()
        getAllItems()
    }, [])


    async function addItemToTable(res) {
        TableService.removeItem(id, { ...res, itemName: res.name, mode: 'inc' }).then(() => {
            var arr = { ...table }
            let index = arr.items.findIndex(e => e.itemName == res.name)
            if (index == -1) {
                arr.items.push({ itemName: res.name, price: res.price, quantity: 1 })
            }
            else {
                arr.items[index] = { ...arr.items[index], quantity: arr.items[index].quantity + 1 }
            }
            setTable(arr)
        })
            .catch(err => console.log(err))

    }
    async function removeItem(res) {

        TableService.removeItem(id, { ...res, mode: 'dec' }).then((res2) => {
            let index = table.items.findIndex(e => e.itemName == res.itemName)
            let arr = [...table.items]
            if (arr[index].quantity == 1) {
                arr.splice(index, 1)
            }
            else {
                arr[index] = { ...arr[index], quantity: arr[index].quantity - 1 }
            }
            setTable({ ...table, items: arr })
        })
            .catch(err => console.log(err))
    }


    function findTotal() {
        let num = 0;
        table.items?.map(el => {
            num += el.price * el.quantity
        });
        return num
    }

    function payBill() {
        TableService.payBill(id).then(e => navigate('/table')).catch(err => console.log(err))
    }

    return (
        <>
            <div className="visit_main_con m-0 p-0">
                <h2 className="text-center my-3">
                    {table.name}
                </h2>
                <div className="flex px-2">
                    <div className="w-50 left_con">
                        <h3 className="text-center">All Items</h3>
                        <>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><b>Item</b></TableCell>
                                        <TableCell><b>Price</b></TableCell>
                                        <TableCell><b>Action</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sel.item.map((res, key) => {
                                        return (
                                            <TableRow>
                                                <TableCell>{res.name}</TableCell>
                                                <TableCell><i className="fa fa-inr"></i> {res.price}</TableCell>
                                                <TableCell><button onClick={() => addItemToTable(res)} className="btn_primary"><i className="fa fa-plus"></i></button></TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </>
                    </div>
                    <div className="w-50 left_con mx-4">
                        <h3 className="text-center">Added Items</h3>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sno.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {table.items?.map((res, key) => {
                                    return (
                                        <TableRow key={key}>
                                            <TableCell>{key + 1}</TableCell>
                                            <TableCell>{res.itemName}</TableCell>
                                            <TableCell>{res.quantity}</TableCell>
                                            <TableCell><button onClick={() => removeItem(res)} className="btn_primary"><i className="fa fa-minus"></i></button></TableCell>

                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                        {table.items?.length !== 0 ?
                            <div className="around align my-2">
                                <div>
                                    Total Amount is {findTotal()}
                                </div>
                                <div>
                                    <button className="btn_primary px-4" onClick={payBill}>Pay</button>
                                </div>

                            </div> : null}
                    </div>

                </div>
            </div>

        </>
    )
}