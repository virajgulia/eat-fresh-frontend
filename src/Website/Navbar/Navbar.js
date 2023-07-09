
import React, { useState } from "react"
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux"
import { cartCrud } from "../../Store/Slices/CartSlice"
export const Navbar = () => {

    let dispatch = useDispatch()
    let cartLength = useSelector(s => s.cart)

    function getCart() {
        if (cartLength.length == 0) {
            dispatch(cartCrud({ method: 'getcart' }))
        }
    }

    useState(() => {
        getCart()
    }, [])
    return (
        <>
            <div className="navbar_main_con">
                <div className="header_con container py-3">

                    <ul className="flex around align my-auto">
                        <li>Home</li>
                        <li>Order</li>
                        <li>Menu</li>
                        <li><b>EAT-FRESH</b></li>
                        <li>Reservation</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>{cartLength.length}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}