import './Sidebar.css'
import $ from 'jquery'
import sidebarData from './SidebarData.json'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
export const Sidebar = ({ children }) => {

    const [sidebarToggle, setSidebarToggle] = useState(true)
    $(window).on("resize", function (event) {
        // console.log($(this).width());
    });

    useEffect(() => {
        // console.log(sidebarData)
    }, [])

    function sideToogle() {
        setSidebarToggle(!sidebarToggle)
    }

    return (
        <>
            <div className="main_con">
                <div className="d-flex">
                    <div className="sidebar_main_con" style={{ width: sidebarToggle ? '270px' : '0px' }}>
                        <h1 className='center logo'>Eat Fresh</h1>
                        <div className='mt-3'>
                            {sidebarData.map((res, key) => {
                                return (
                                    <div key={key} className='link_maincon mx-3 ps-2 mt-2 pointer'>
                                        <NavLink
                                            className='link'

                                            to={res.path}>
                                            {res.title}
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="child_main_con w-100" style={{ height: '100vh', overflow: 'auto' }}>
                        <div className='top_bar_maincon'>
                            <i className='fa fa-bars fs-2 m-2 pointer' onClick={sideToogle}></i>
                        </div>
                        <div>

                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}