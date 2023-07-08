export const AddEditCategory = ({ mode, inpChange, setFile, setDialog }) => {
    return (
        <>
            <div>
                <h5>{mode} Category</h5>
                <div>
                    <input className="form-control" name='category_name' onChange={inpChange} />
                </div>
                <div className="mt-3">
                    <input type="file" className="form-control" name="image" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="text-end mt-2">
                    <button type="button" onClick={() => setDialog(false)} className="close_btn me-2">Cancel</button>
                    <button className="btn_primary" type="submit">Save</button>
                </div>
            </div>

        </>
    )
}