import axios from "axios";
import { getUserData } from "./storage";

axios.defaults.baseURL = 'http://127.0.0.1:7500/';

const REGISTER_URL= 'createUsers/';
const LOGIN_URL='checklogin/';
const ALL_EMPLOYEE_DETAILS_URL = 'AllEmp_details/';

// Register the user 
export const RegisterAPI = (inputs) => {
    let data= { 
        username:inputs.username,
        firstname:inputs.firstname,
        lastname:inputs.lastname,
        address:inputs.address,
        phone:inputs.phone,
        password:inputs.password,
        confirm_Password:inputs.confirm_Password
        // role_id:3
    }
    return axios.post(REGISTER_URL,data)
};

// For check Login 
export const LoginApi =(inputs) =>{
    let data={
        username:inputs.username,
        password:inputs.password,
    }
    // console.log(data)
    return axios.post(LOGIN_URL,data)
};

export const userdetailsApi =()=>{
    let data = {userdetails: getUserData()}
    return axios.post(data)
};

export const Emp_Det_Api = () => {
    // console.log(axios.get(ALL_EMPLOYEE_DETAILS_URL))
    return axios.get(ALL_EMPLOYEE_DETAILS_URL)
};
