import { Button, Dialog, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { AddEditCategory } from "./AddEditCategory"
import { fileUpload } from "../../auth/Firebase/ImageUpload"
import CategoryService from "../../Services/CategoryService"
import { useDispatch, useSelector } from "react-redux"
import { categorycrud } from "../../Store/Slices/CategorySlice"
import { loader } from "../../Store/Slices/LoaderSlice"

export const Category = () => {

    const [dialog, setDialog] = useState(false)
    const [mode, setMode] = useState('Add')
    const [categoryData, setCategoryData] = useState({ category_name: '', image: '' })
    const [file, setFile] = useState({})

    const categories = useSelector(e => e.category)
    const dispatch = useDispatch()

    let navigate = useNavigate()
    async function addCategory(e) {
        e.preventDefault()
        console.log(categoryData)
        if (file.name !== undefined) {
            console.log(file)
            setDialog(false)
            // dispatch(loader('start'))
            let image = await fileUpload(file)
            console.log(image)
            return
            console.log({ ...categoryData, image })
            dispatch(categorycrud({ method: 'post', data: { ...categoryData, image } }))
            setFile({})
            setCategoryData({ category_nameL: '', image: '' })
        }


    }


    function inpChange(e) {

        let { name, value } = e.target
        setCategoryData({ ...categoryData, [name]: value })

    }
    useEffect(() => {
        dispatch(categorycrud({ method: 'get' }))
    }, [])
    return (
        <>

            <Dialog
                open={dialog}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <div className="p-3">
                    <form onSubmit={addCategory} id="form">
                        <AddEditCategory setFile={setFile} setDialog={setDialog} mode={mode} inpChange={inpChange} />
                    </form>
                </div>
            </Dialog>

            <div className="p-3">
                <div className="text-end p-3">
                    <button className="btn_primary" onClick={() => {



                        setDialog(true)
                    }}>Add Category</button>
                </div>
                <h2 className="center">All Categories</h2>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Images</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((res, key) => {
                            return (
                                <TableRow key={key}>
                                    <TableCell>
                                        <img src={res.image} style={{ width: '40px', height: '40px' }} />
                                    </TableCell>
                                    <TableCell>{res.category_name}</TableCell>
                                    <TableCell>
                                        <i class="pointer fs-3 fa fa-trash-o" aria-hidden="true"></i>
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