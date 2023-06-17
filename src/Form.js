
export const Form = ({ data }) => {

    function renderSwitch(res) {
        switch (res.type) {
            case 'text':
            case 'number':
                return <div>
                    <label><b>{res.label}</b></label>
                    <input required defaultValue={res.value} className="form-control" name={res.name} type={res.type} />
                </div>
            case 'select':
                return (
                    <div>
                        <label><b>{res.label}</b></label>
                        <select className="form-control" defaultValue='' name={res.name}>
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