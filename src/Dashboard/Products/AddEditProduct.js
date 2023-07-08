import { useRef, useState } from "react"
import { useSelector } from "react-redux"

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Checkbox } from "@mui/material";

export const AddEditProduct = ({ closeDialog, setProductData }) => {
    let categories = useSelector(r => r.category)

    const [selectedCategory, setSelectedCategory] = useState([])

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function formChange(e) {
        let { name, value } = e.target

        if (name == 'image') {

            setProductData((pre) => {
                return { ...pre, [name]: e.target.files[0] }

            })
            return
        }
        setProductData((pre) => {
            return { ...pre, [name]: value }
        })

    }
    function multiselectChange(e) {
        let { value } = e.target
        setSelectedCategory(value)
        setProductData((pre) => {
            return { ...pre, category: value.map(e => e._id) }
        })
    }

    return (
        <>
            <div className="pb-3">
                <h3 className="center">Add Product</h3>

                <div>
                    <div><label>Product Name</label> </div>
                    <input className="form-control" onChange={formChange} type="text" name='name' />
                </div>
                <div>
                    <div><label>Product Price</label> </div>
                    <input className="form-control" onChange={formChange} type="number" name='price' />
                </div>
                <div>
                    <div> <label>Product Img</label> </div>
                    <input className="form-control" type="file" onChange={formChange} name='image' />
                </div>
                <div>
                    <div><label>Product Category</label> </div>
                    <Select
                        multiple
                        displayEmpty
                        value={selectedCategory}
                        onChange={multiselectChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Select category</em>;
                            }
                            console.log(selected)
                            return selected.map(e => e.category_name).join(', ')
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                        {categories.map((res) => (
                            <MenuItem
                                key={res._id}
                                value={res}

                            >
                                <Checkbox checked={selectedCategory.findIndex(r => r._id == res._id) !== -1} />
                                {res.category_name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>



            </div >
            <div className="flex justify-content-end">
                <button className="close_btn me-3" type="button" onClick={closeDialog}>close</button>
                <button className="btn_primary" type="submit">Submit</button>
            </div>
        </>
    )
}











