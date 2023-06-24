import { useRef } from "react"
import { Form } from "../../Form"

export const AddEditItem = ({ closeDialog, itemData }) => {

    let addTable = useRef([
        { name: 'name', type: 'text', label: 'Item Name', value: itemData.state.name, onChange: formChange },
        { name: 'price', type: 'number', label: 'Item Price', value: itemData.state.price, onChange: formChange },
    ])

    function formChange(e) {
        let { name, value } = e.target
        itemData.set((pre) => { return { ...pre, [name]: value } })
    }



    return (
        <>
            {addTable.current.map((res, key) => {
                return (
                    <Form data={res} key={key} />

                )
            })}
            <div className="flex justify-content-end mt-3">
                <button className="close_btn me-3" type="button" onClick={closeDialog}>close</button>
                <button className="btn_primary" type="submit">Submit</button>
            </div>

        </>
    )
}