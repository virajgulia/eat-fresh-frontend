import { useRef } from "react"
import { Form } from "../../Form"

export const AddEditProduct = ({ closeDialog }) => {
    let addProduct = useRef([
        { name: 'name', type: 'text', label: 'Product Name' },
        { name: 'price', type: 'number', label: 'Product Price' },
        { name: 'image', type: 'text', label: 'Product Img' },
        { name: 'category', type: 'select', label: 'Product Name', options: ['breakfast', 'lunch', 'dinner'] },
    ])
    return (
        <>
            <div className="pb-3">
                <h3 className="center">Add Product</h3>
                {addProduct.current.map((res, key) => {
                    return (
                        <div className="w-100">
                            <Form data={res} key={key} />
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-content-end">
                <button className="close_btn me-3" type="button" onClick={closeDialog}>close</button>
                <button className="btn_primary" type="submit">Submit</button>
            </div>
        </>
    )
}