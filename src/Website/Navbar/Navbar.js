
import React from "react"
import './Navbar.css'
export const Navbar = () => {
    return (
        <>
            <div className="main_con">
                <div className="header_con container py-3">

                    <ul className="flex around align my-auto">
                        <li>Home</li>
                        <li>Order</li>
                        <li>Menu</li>
                        <li><b>EAT-FRESH</b></li>
                        <li>Reservation</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}