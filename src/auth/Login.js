import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"

export const Login = () => {
    let [cred, setCred] = useState('')
    let navigate = useNavigate()
    function login() {
        if (cred == 'Admin') {
            localStorage.setItem('isLoggedIn', true)
            navigate('/home')
        }
        else {
            alert('password is "Admin" ')
        }
    }
    return (
        <>
            <TextField onChange={(e) => setCred(e.target.value)} />
            <Button onClick={login}>submit</Button>
        </>
    )
}