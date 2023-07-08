import { Navigate, Outlet } from "react-router"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { useState } from "react"

export const Dashboardkeeper = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'))

    document.addEventListener('click', () => {
        console.log('llllll')
    })

    // setTimeout(() => {
    //     localStorage.setItem('isLoggedIn', false)
    //     setIsLoggedIn(false)
    // }, 10000);


    return (
        <>
            {isLoggedIn ?
                <Sidebar onMouseMove={() => console.log('[[[[[[[[[[[[[[[[[[[[[[[[[')}>
                    <Outlet></Outlet>
                </Sidebar>
                :
                <Navigate to='/login' />
            }
        </>
    )
}