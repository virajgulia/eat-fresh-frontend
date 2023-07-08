import { useState } from "react"
import { Form } from "../Form"
import { Box, Typography } from "@mui/material"
import LoginSignupService from "../Services/LoginSignupService"
import { toast } from "react-toastify"

export const Signup = () => {

    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', password: '', gender: '' })

    let formData = [
        { name: 'firstName', type: 'text', label: 'First Name', value: userData.name, onChange: formChange },
        { name: 'lastName', type: 'text', label: 'Last Name', value: userData.lastName, onChange: formChange },
        { name: 'email', type: 'text', label: 'Email', value: userData.email, onChange: formChange },
        { name: 'mobile', type: 'number', label: 'Mobile Number', value: userData.mobile, onChange: formChange },
        { name: 'gender', type: 'select', label: 'Gender', value: userData.gender, onChange: formChange, options: ['Male', 'Female'] },
        { name: 'password', type: 'text', label: 'Password', value: userData.password, onChange: formChange },
    ]
    function formChange(e) {
        let { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    async function signUp(e) {
        e.preventDefault()
        console.log(userData)
        let res = await LoginSignupService.signup(userData)

        console.log(res.data)
    }

    return (
        <>
            <Typography variant="h3" className="text-center mt-3">Sign Up</Typography>
            <Box sx={{ width: '50%', m: 'auto', mt: 3 }}>
                <form onSubmit={signUp}>
                    {formData.map((res) => {
                        return (
                            <Form data={res} />
                        )
                    })}
                    <button className="btn_primary" type="submit">Signup</button>
                </form>
            </Box>
        </>
    )
}