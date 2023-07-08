import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import LoginSignupService from "../Services/LoginSignupService"
import { toast } from "react-toastify"

export const Login = () => {

    let [userData, setUserData] = useState({
        email: 'abc@gmail.com', password: '12345678'
    })

    let navigate = useNavigate()

    async function login(e) {
        e.preventDefault()
        // console.log(userData)
        let res = await LoginSignupService.login(userData)
        // if (res.data._id !== undefined) {
        console.log(res.data)
        localStorage.setItem("eatFreshUserData", JSON.stringify(res.data))
        localStorage.setItem("isLoggedIn", true)
        navigate('/table')
        // }
        // else {
        //     toast.error(res.data)
        // }
    }
    return (
        <>
            <Box className='card p-4 w-50 m-auto mt-5'>
                <div className="text-center display-5"><b>Login</b></div>
                <form onSubmit={login}>
                    <label><b>User Name</b></label>
                    <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} className="form-control" type="text" />
                    <br />
                    <label><b>Password</b></label>
                    <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="text" className="form-control" />
                    <br />
                    <div className="text-center">
                        <button className="btn_primary px-5">Login</button>
                    </div>

                </form>
            </Box>

        </>
    )
}