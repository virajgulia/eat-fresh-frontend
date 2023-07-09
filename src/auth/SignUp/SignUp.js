import { Box } from "@mui/material"
import { useState } from "react"
import styles from './SignUp.module.css'
import LoginSignupService from "../../Services/LoginSignupService"
export const SignUp = () => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        mobile: '',
        password: ''
    })

    function inpChange(e) {
        let { name, value } = e.target
        setUserData({ ...userData, [name]: value })
        console.log('okokok')
    }
    async function signup(e) {
        e.preventDefault()
        console.log(userData)
        try {
            let res = await LoginSignupService.signup(userData)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <Box className={`${styles.signup_main_con} card p-4 w-50 m-auto`}>
            <div className="text-center display-5"><b>Sign Up</b></div>

            <form onSubmit={signup}>

                <label><b>First Name</b></label>
                <input required name="firstName" value={userData.firstName} onChange={inpChange} className="form-control" type="text" />
                {/* <br /> */}
                <label><b>Last Name</b></label>
                <input required name="lastName" value={userData.lastName} onChange={inpChange} className="form-control" type="text" />
                {/* <br /> */}
                <label><b>Email</b></label>
                <input required name="email" value={userData.email} onChange={inpChange} className="form-control" type="text" />
                {/* <br /> */}
                <label><b>Gender</b></label>
                <select value={userData.gender} name="gender" className="form-control" onChange={inpChange}>
                    <option value='' disabled>Select Gender</option>
                    {['Male', 'Female'].map(r => <option value={r}>{r}</option>)}
                </select>
                {/* <br /> */}
                <label><b>Mobile</b></label>
                <input name="mobile" required value={userData.mobile} onChange={inpChange} type="text" className="form-control" />
                {/* <br /> */}
                <label><b>Password</b></label>
                <input name="password" required value={userData.password} onChange={inpChange} type="text" className="form-control" />
                {/* <br /> */}
                <div className="text-center">
                    <button className="btn_primary px-5">Login</button>
                </div>

            </form>
        </Box>
    )
}