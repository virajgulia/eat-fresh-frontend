import { Navigate, Outlet } from "react-router"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"

export const Dashboardkeeper = () => {
    let isLoggedIn = localStorage.getItem('isLoggedIn')

    return (
        <>
            {isLoggedIn ?
                <Sidebar>
                    <Outlet></Outlet>
                </Sidebar>
                :
                <Navigate to='/login' />
            }
        </>
    )
}