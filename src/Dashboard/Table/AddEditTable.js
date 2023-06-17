import { useRef } from "react"
import { Form } from "../../Form"

export const AddEditTable = ({ closeDialog, tableData }) => {
    let addTable = useRef([
        { name: 'name', type: 'text', label: 'Table Name', value: tableData },
    ])


    return (
        <>
            <div className="pb-3">
                <h3 className="center">Add Table</h3>
                {addTable.current.map((res, key) => {
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