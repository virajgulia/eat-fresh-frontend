import { useEffect, useState } from "react"
import './Table.css'
import { Button, Dialog } from "@mui/material"
import { AddEditTable } from "./AddEditTable"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { tableCrud } from "../../Store/Slices/TableSlice"


export const Table = () => {

    const [dialog, setDialog] = useState(false)
    const [tableData, setTableData] = useState({ name: '', items: [] })
    const [editTableId, setEditTableId] = useState('')

    const dispatch = useDispatch()
    const [mode, setMode] = useState('')
    let navigate = useNavigate()
    let { table } = useSelector(sel => sel)

    async function addTable(e) {
        e.preventDefault()
        console.log(tableData)
    }


    async function addTable(e) {
        e.preventDefault()
        try {
            if (mode == 'add') {
                dispatch(tableCrud({ met: 'post', data: { name: tableData.name } }))
                setDialog(false)
            }
            else {
                if (editTableId !== '') {
                    dispatch(tableCrud({ met: 'put', data: { name: tableData.name, _id: editTableId } }))
                    setDialog(false)
                }
            }
        }
        catch (err) {
            setDialog(false)
            console.log(err)
        }


    }
    async function editTable(name, id) {
        setDialog(true)
        setEditTableId(id)
        setMode('edit')
        setTableData({ ...tableData, name })
    }


    function closeDialog() {
        setDialog(false)
        setEditTableId('')
        setTableData({ name: '' })
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
                        <AddEditTable tableData={{ state: tableData, set: setTableData }} closeDialog={closeDialog} />
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