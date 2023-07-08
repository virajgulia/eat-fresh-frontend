
export const Form = ({ data }) => {

    function renderSwitch(res) {
        console.log(res)
        switch (res.type) {
            case 'text':
            case 'number':
            case 'file':
                return <div>
                    <label><b>{res.label}</b></label>
                    <input onChange={res.onChange} required defaultValue={res.value} className="form-control" name={res.name} type={res.type} />
                </div>
            case 'select':
                return (
                    <div>
                        <label><b>{res.label}</b></label>
                        <select onChange={res.onChange} className="form-control" defaultValue={res.value} name={res.name}>
                            <option value='' disabled>-Select-</option>
                            {res.options?.map((res2, key) => <option key={key} value={res2}>{res2}</option>)}
                        </select>
                    </div>
                )

            default:
                break;
        }
    }

    return (
        <>
            {renderSwitch(data)}
        </>
    )

}