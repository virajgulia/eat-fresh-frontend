import './HomePages.css'

export const Card = ({ res }) => {
    return (
        <>
            <div className='card_main_con card pointer'>
                <div>
                    <i className={`${res.icon} fs-1 card_icon`}></i>
                </div>
                <div className='my-2'>
                    <div className='heading'>{res.head}</div>
                </div>
                <div>
                    <p>{res.text}</p>
                </div>
            </div>
        </>
    )
}