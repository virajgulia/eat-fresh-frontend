import { useState } from "react"

import { fileUpload } from "../../auth/Firebase/ImageUpload"
export const Home = () => {
    const [data, setData] = useState({})

    async function submit() {
        let url = await fileUpload(data)
        console.log(url)

    }
    return (
        <>
            <div>this is home</div>
            <input type='file' onChange={(e) => setData(e.target.files[0])} />
            <button onClick={submit} className="btn_primary">Submit</button>
        </>
    )
}