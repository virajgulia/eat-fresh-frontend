import { useEffect, useState } from "react"
import './Table.css'
import $ from 'jquery'
import { Button, Dialog } from "@mui/material"
import { AddEditTable } from "./AddEditTable"
import axios from "axios"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { tableCrud } from "../../Store/Slices/TableSlice"
import { toast } from "react-toastify"
export const Table = () => {

    const [dialog, setDialog] = useState(false)
    const [tableData, setTableData] = useState('')
    const [editTableId, setEditTableId] = useState('')
    const dispatch = useDispatch()
    const [mode, setMode] = useState('')
    let navigate = useNavigate()

    let { table } = useSelector(sel => sel)

    async function addTable(e) {
        e.preventDefault()
        let rr = $('#form input').serializeArray()

        if (mode == 'add') {
            try {
                dispatch(tableCrud({ met: 'post', data: { name: rr[0].value } }))
                setDialog(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        else {

            if (editTableId !== '') {

                let editData = $('#form input').serializeArray()
                console.log(editData[0].value)
                let data = { name: editData[0].value }
                try {

                    dispatch(tableCrud({ met: 'put', data: { name: editData[0].value, _id: editTableId } }))

                    setDialog(false)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
    }
    async function editTable(name, id) {
        setDialog(true)
        setEditTableId(id)
        setMode('edit')
        setTableData(name)
    }


    function closeDialog() {
        setDialog(false)
        setEditTableId('')
        setTableData('')
    }
    useEffect(() => {

        if (table.length == 0) {
            dispatch(tableCrud({ met: 'get' }))
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
                    <form onSubmit={addTable} id="form">
                        <AddEditTable tableData={tableData} closeDialog={closeDialog} />
                    </form>
                </div>
            </Dialog>

            <div className="p-3">
                <div className="text-end p-3">
                    <button className="btn_primary" onClick={() => {
                        setMode('add')
                        setDialog(true)
                    }}>Add Table</button>
                </div>
                <h2 className="center">All Tables</h2>
                <div className="table_card_con">
                    {table.map((res, key) => {
                        return (
                            <div key={key} className="table_card m-2 pointer center">{res.name}
                                <div>
                                    <i onClick={() => editTable(res.name, res._id)} className="fa fa-edit"></i>
                                    <Button onClick={() => navigate(`/table/${res._id}`)} variant='primary'>view</Button>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )
}