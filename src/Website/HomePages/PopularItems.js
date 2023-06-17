import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import './HomePages.css'

export const PopularItems = () => {
    let [tabValue, setTabValue] = useState(1)

    function tabChange(e, val) {
        console.log(val)
        setTabValue(val)
    }
    let arr = [
        {
            "_id": "648c6365e3747c03886eb755",
            "name": "Chicken Burger",
            "price": 564,
            "category": "lunch",
            "image": "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
            "created_at": "2023-06-16T13:04:21.478Z",
            "__v": 0
        },
        {
            "_id": "648dbb7b91c3e39f39db7d4c",
            "name": "Samosa",
            "price": 89,
            "category": "breakfast",
            "image": "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
            "created_at": "2023-06-17T13:44:37.827Z",
            "__v": 0
        },
        {
            "_id": "648dbb8791c3e39f39db7d4e",
            "name": "Veg Biryani",
            "price": 987890,
            "category": "lunch",
            "image": "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
            "created_at": "2023-06-17T13:44:37.827Z",
            "__v": 0
        },
        {
            "_id": "648dbb9191c3e39f39db7d50",
            "name": "Veg Pulav",
            "price": 899,
            "category": "dinner",
            "image": "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
            "created_at": "2023-06-17T13:44:37.827Z",
            "__v": 0
        }
    ]


    return (
        <>
            <div className="tab_heading text-center">Most Popular Items</div>
            <div className="center">

                <div className="tab_con">
                    <Tabs
                        value={tabValue}
                        onChange={tabChange}
                        TabIndicatorProps={{ style: { background: 'orange' } }}
                    >
                        <Tab className={`${tabValue == 1 ? 'tab_active' : ''} tab`} value={1} label="Breakfast" />
                        <Tab className={`${tabValue == 2 ? 'tab_active' : ''} tab`} value={2} label="Lunch" />
                        <Tab className={`${tabValue == 3 ? 'tab_active' : ''} tab`} value={3} label='Dinner' />
                    </Tabs>
                </div>
            </div >

            <div className="food_con container mt-5">
                {arr.map((res) => {
                    return (
                        <>
                            <div className="flex gap-4">
                                <div className="food_img_con">
                                    <img src={res.image} />
                                </div>
                                <div className="flex between w-100 fs-5 food_sub_con">
                                    <div className="">
                                        <b>{res.name}</b>
                                    </div>
                                    <div className="rs"><i className="fa fa-inr"></i> {res.price}</div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>


            <div className="mb-5"></div>
        </>
    )
}