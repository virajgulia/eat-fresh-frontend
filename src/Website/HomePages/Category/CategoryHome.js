import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categorycrud } from "../../../Store/Slices/CategorySlice"
import "./CategoryHome.css"
import { Link } from "react-router-dom"
import { CategoryCard } from "./CategoryCard"


export const CategoryHome = () => {

    let allCategories = useSelector(e => e.category)
    let dispatch = useDispatch()

    useEffect(() => {
        if (allCategories.length == 0) {
            dispatch(categorycrud({ method: 'get' }))
        }
    }, [])

    return (
        <>
            <h1>All Categories</h1>

            <div className="card_con">
                {allCategories.map((res) => {

                    return (
                        <Link to={`/product/?id=${res._id}`} key={res._id} style={{ textDecoration: 'none' }}>
                            <CategoryCard res={res} />
                        </Link>
                    )
                })}

            </div>

        </>
    )
}