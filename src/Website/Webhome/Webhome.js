import { Page1 } from "../HomePages/Page1"
import { PopularItems } from "../HomePages/PopularItems"
import { Navbar } from "../Navbar/Navbar"
import './Webhome.css'
export const Webhome = () => {
    return (
        <>
            <div className="main_con">

                <div className="home_main">

                    <Navbar />
                    <div className="home_para_con flex mt-2">
                        <div className="w-50 center left_con_text">
                            <div className="w-75 ">
                                <h1>Enjoy Our Delicious Meal</h1> <br />
                                <p>lorem th kthsdk fsklfhioewfh iofjnkdsfj ioefj osidjf iodjfoisjdf iosf sdoif sdfios dfoidsj foijsdf iojsdf iosjdf iosdjf sodijf oasidfj oasdijf asiofj sioajf dasiofj sofcmsioadfhiasdhf iasudfh asidhfs odhi
                                </p>
                                <button className="btn_primary_web">Order</button>
                                <button className="btn_primary_web ms-4">Book Table</button>
                            </div>
                        </div>
                        <div className="w-50 round_con">
                            <div className="dd"></div>
                        </div>
                    </div>
                </div>
                {/* second page starts here  */}
                <Page1 />
                <PopularItems />

            </div>

        </>
    )
}