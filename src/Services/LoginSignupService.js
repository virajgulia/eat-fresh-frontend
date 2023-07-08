import axios from "axios";
import { Component } from "react";
import { APIS } from "../auth/Apis";
import { useDispatch } from "react-redux";

class LoginSignupService extends Component {

    static async signup(data) {
        return await axios.post(APIS.SIGNUP, data)
    }

    static async login(data) {
        return await axios.post(APIS.LOGIN, data)
    }

}
export default LoginSignupService