import axios from "axios";
import { Component } from "react";
import { toast } from "react-toastify";
import { APIS } from "../auth/Apis";



class TableService extends Component {
    state = {}
    static getSingleTable = async (id) => {
        return await axios.get(`${APIS.TABLE.common}/${id}`)
    }
    static payBill = async (id) => {
        return await axios.put(`${APIS.TABLE.paybill}${id}`)
    }
    static removeItem = async (id, res) => {
        return await axios.post(`${APIS.TABLE.additem}${id}`, { itemName: res.itemName, price: res.price, mode: res.mode })
    }
}

export default TableService;