import { CategoryHome } from "../HomePages/Category/CategoryHome"
import { Page1 } from "../HomePages/Page1"
import { PopularItems } from "../HomePages/PopularItems"
import { Navbar } from "../Navbar/Navbar"

import styles from './Webhome.module.css'

export const Webhome = () => {
    return (
        <>
            <div className={styles.home_page_main_con}>

                <Navbar />



                <div className={styles.first_main_con}>


                    <div className={`${styles.left_con} center`}>

                        <div className={`${styles.text_con} w-75`}>
                            <h1 className={styles.head}>Enjoy Our Delicious Meal</h1> <br />
                            <p className={styles.para}>lorem th kthsdk fsklfhioewfh iofjnkdsfj ioefj osidjf iodjfoisjdf iosf sdoif sdfios dfoidsj foijsdf iojsdf iosjdf iosdjf sodijf oasidfj oasdijf asiofj sioajf dasiofj sofcmsioadfhiasdhf iasudfh asidhfs odhi
                            </p>
                            <button className="btn_primary_web">Order</button>
                            <button className="btn_primary_web ms-4">Book Table</button>
                        </div>

                    </div>

                    <div className={styles.right_con}>
                        <div className={styles.img_con}></div>
                    </div>




                </div>


                <Page1 />
                <PopularItems />
                <CategoryHome />


            </div>

        </>
    )
}