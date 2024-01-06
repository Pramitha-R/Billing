import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:7500/';

const REGISTER_URL= 'createUsers/';
const LOGIN_URL='checklogin/';
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
    console.log('data-------',data)
    return axios.post(REGISTER_URL,data)
};

export const LoginApi =(inputs) =>{
    let data={
        username:inputs.username,
        password:inputs.password,
    }
    console.log(data)
    return axios.post(LOGIN_URL,data)
};
