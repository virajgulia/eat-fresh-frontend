import { Card } from "./Card"

export const Page1 = () => {

    let cardData = [
        {
            icon: 'fa fa-user',
            head: 'Master Chefs',
            text: 'A master or executive chef is the ultimate leader of a kitchen. His role is to ensure customer service.'
        },
        {
            icon: 'fa fa-cutlery',
            head: 'Quality Food',
            text: 'the sum of all properties and attributes of a food item that are acceptable to the customer.'
        },
        {
            icon: 'fa fa-cart-arrow-down',
            head: 'Online Order',
            text: 'Online food delivery is a courier service in which a restaurant delivers food to a customer. '
        },
        {
            icon: 'fa fa-server',
            head: '24/7 Service',
            text: 'We have 24/7 food order Service.Order Online and get food 24/7.'
        }
    ]

    return (
        <>
            <div className="my-5 px-4 flex justify-content-center gap-3">

                {cardData.map((res, key) => {
                    return <Card res={res} />
                })}
            </div>
        </>
    )
}