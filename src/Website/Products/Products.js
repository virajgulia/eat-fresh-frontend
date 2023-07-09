import { useQuery } from '../../UseQuery'
import { Navbar } from '../Navbar/Navbar'
import { useEffect } from 'react'
import ProductService from '../../Services/ProductService'
import { useState } from 'react'
import styles from './Products.module.css'
import { useDispatch } from 'react-redux'
import { loader } from '../../Store/Slices/LoaderSlice'
import axios from 'axios'
import { APIS } from '../../auth/Apis'
import { cartCrud } from '../../Store/Slices/CartSlice'

export const Products = () => {

    let loc = useQuery()
    const [sortedProducts, setSortedProducts] = useState([])

    let id = loc.get('id') || ''
    let start = loc.get('start') || ''
    let end = loc.get('end') || ''
    let dispatch = useDispatch()
    console.log(id)


    async function getSortedProduct(data) {
        dispatch(loader('start'))
        ProductService.getSortedProducts(data).then((res) => {
            console.log(res.data)
            setSortedProducts(res.data)
            dispatch(loader('stop'))
        })
            .catch(err => {
                dispatch(loader('stop'))
                console.log(err)
            })
    }

    async function addCart(id) {
        dispatch(cartCrud({ method: 'addcartitem', data: { productId: id } }))
    }

    useEffect(() => {
        getSortedProduct({ id, start: 0, end: 5 })
    }, [])


    return (
        <>
            <Navbar />
            <h1 className='text-center my-3'>All Products</h1>
            <div className={`${styles.product_main_con}`}>

                {sortedProducts.map((res) => {
                    return (


                        <div className={styles.card_con}>

                            <div className={styles.card}>
                                <img src={res.image} className={`${styles.card_img}`} />
                            </div>

                            <div className={`${styles.text} ps-3 mt-2`}>{res.name}</div>
                            <hr className='mx-3 my-0' />
                            <div className={`${styles.text} ps-3 mt-2`}><i className='fa fa-inr'></i>{res.price}</div>
                            <div className='around'>
                                <button className='btn_primary_web'>Buy Item</button>
                                <button className='btn_primary_web' onClick={() => addCart(res._id)}>Add To Cart</button>

                            </div>



                        </div>



                    )
                })}
            </div>

        </>
    )
}