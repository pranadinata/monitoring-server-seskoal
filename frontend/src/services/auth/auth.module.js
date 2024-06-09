import axios from "axios";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const Login = async () => {
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/login');

    // const response = await axios.get(process.env.NEXT_PUBLIC_BASE_API);

    return response

    // if(response?.data?.data?.token){
    //     return response.data.data;
    // }
    // return 'login kesini dulu guys'
}

const AuthService = {
    Login,
};
export default AuthService;

