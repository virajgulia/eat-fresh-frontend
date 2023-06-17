import axios from "axios";
import { Component } from "react";
import { APIS } from "../auth/Apis";
import { useDispatch } from "react-redux";

class ProductService extends Component {

    static async getProductByCategory(data) {
        return await axios.post(APIS.PRODUCT.getByCategory, data)
    }

}
export default ProductService