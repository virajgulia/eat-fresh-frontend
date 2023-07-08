import { useState } from "react"
import "./Home.css"
import { fileUpload } from "../../auth/Firebase/ImageUpload"
export const Home = () => {
    const [data, setData] = useState({})

    async function submit() {
        let url = await fileUpload(data)
        console.log(url)

    }
    return (
        <>
            <div className="main_con">

                <img src="/cheff.webp" />
            </div>
        </>
    )
}