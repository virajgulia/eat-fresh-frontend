export const CategoryCard = ({ res }) => {
    return (
        <div className="card_item pointer">
            <div className="img_con flex center">
                <img src={res.image} className="cat_img" />
            </div>
            <div className="text-center">
                <div className="cat_text">{res.category_name}</div>
                <div className="arrow_icon center mx-auto mt-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
            </div>
        </div>
    )
}