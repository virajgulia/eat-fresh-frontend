import { useQuery } from '../../UseQuery'
import { Navbar } from '../Navbar/Navbar'
import { useEffect } from 'react'
import ProductService from '../../Services/ProductService'
import { useState } from 'react'
import styles from './Products.module.css'

export const Products = () => {

    let loc = useQuery()
    const [sortedProducts, setSortedProducts] = useState([])

    let id = loc.get('id') || ''
    let start = loc.get('start') || ''
    let end = loc.get('end') || ''

    console.log(id)
    async function getSortedProduct(data) {

        ProductService.getSortedProducts(data).then((res) => {
            console.log(res.data)
            setSortedProducts(res.data)
        })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getSortedProduct({ id, start: 0, end: 5 })
    }, [])


    return (
        <>
            <Navbar />
            <h1>This is product listing page</h1>
            <div className={`${styles.product_main_con} flex`}>
                {sortedProducts.map((res) => {
                    return (
                        <div className={styles.card_con}>
                            <div className={styles.card}>
                                <img src={res.image} className={`${styles.card_img}`} />
                            </div>
                        </div>

                    )
                })}
            </div>

        </>
    )
}