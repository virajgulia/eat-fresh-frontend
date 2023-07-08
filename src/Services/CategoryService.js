import axios from "axios";
import { Component } from "react";
import { APIS } from "../auth/Apis";
import { useDispatch } from "react-redux";

class CategoryService extends Component {

    static async addCategory(data) {
        return await axios.post(APIS.CATEGORY.add, data)
    }

}
export default CategoryService