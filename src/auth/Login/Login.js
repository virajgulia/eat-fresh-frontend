import { Box, Typography, TabPanel, Step, StepLabel, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import LoginSignupService from "../../Services/LoginSignupService"
import styles from './Login.module.css'


export const Login = () => {

    let [userData, setUserData] = useState({
        email: 'abc@gmail.com', password: '12345678'
    })

    let navigate = useNavigate()

    async function login(e) {
        e.preventDefault()
        try {
            let res = await LoginSignupService.login(userData)
            console.log(res.data)
            if (res.data.token !== undefined) {
                localStorage.setItem("eatFreshUserData", JSON.stringify(res.data))
                localStorage.setItem("isLoggedIn", true)
                navigate('/webhome')
            }
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <div className={`${styles.login_main_con}`}>

                <Box className={styles.login_con}>
                    <div className="text-center display-5"><b>Welcome Back :)</b></div>

                    <div className={`${styles.login_p}`}>
                        To Keep connected with us please login with your personal<br /> information by email address and password
                    </div>

                    <form onSubmit={login}>

                        <div className='w-75 mx-auto mt-3'>

                            <div className={styles.inp_con}>
                                <label className={`${styles.bb}`}><b>Email Address</b></label>
                                <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} className={`${styles.inp}`} type="text" />
                                <div className={styles.icon}>
                                    <i aria-hidden="true" className={`${styles.login_u} fa fa-envelope-o`}></i>
                                </div>
                            </div>

                            <br />
                            <div className={styles.inp_con}>
                                <label><b>Password</b></label>
                                <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} className={`${styles.inp}`} type="text" />
                                <div className={styles.icon}>

                                    <i aria-hidden="true" className={`${styles.login_u} fa fa-envelope-o`}></i>
                                </div>
                                <br />
                            </div>


                            <div className='text-end mt-2'>
                                Forget Password?
                            </div>

                        </div>

                        <div className={styles.login_buttons}>
                            <button className={styles.login_btn}>Login Now</button>
                            <button className={styles.login_btn1} onClick={() => navigate('/signup')}>Create Account</button>
                        </div>
                        {/* <div className="text-center">
                            <button className="btn_primary px-5">Login</button>
                        </div> */}

                    </form>
                </Box>

            </div>
        </>
    )
}