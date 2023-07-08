import { Box, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import './HomePages.css'
import ProductService from "../../Services/ProductService"
import { useDispatch } from "react-redux"
import { loader } from "../../Store/Slices/LoaderSlice"

export const PopularItems = () => {
    let [tabValue, setTabValue] = useState('breakfast')
    let [tabData, setTabData] = useState([])
    function tabChange(e, val) {
        console.log(val)
        setTabValue(val)
    }
    let dispatch = useDispatch()

    function getProductByCategory() {

        // dispatch(loader('start'))
        // ProductService.getProductByCategory({ category: tabValue }).then((res) => {
        //     console.log(res.data)
        //     dispatch(loader('stop'))
        //     setTabData(res.data)
        // })
        //     .catch(err => {
        //         dispatch(loader('stop'))
        //         console.log(err)
        //     })
    }
    useEffect(() => {
        getProductByCategory()
    }, [tabValue])

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
                        <Tab className={`${tabValue == 1 ? 'tab_active' : ''} tab`} value='breakfast' label="Breakfast" />
                        <Tab className={`${tabValue == 2 ? 'tab_active' : ''} tab`} value='lunch' label="Lunch" />
                        <Tab className={`${tabValue == 3 ? 'tab_active' : ''} tab`} value='dinner' label='Dinner' />
                    </Tabs>
                </div>
            </div >

            <div className="food_con container mt-5">
                {tabData.map((res) => {
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