import axios from "axios";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const Login = async (username, password) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/auth/login',{ username: username, password: password});

    // const response = await axios.get(process.env.NEXT_PUBLIC_BASE_API);
    
    if(response?.data?.data?.token){    
        setCookie(process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME, response.data.data.token, { path: '/', domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
        return response;
    }
}

const getPhoneBook = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_API + 'apps/phone-book/show');
    return response.data.data
}

const GetDataService = {
    getPhoneBook,
};
export default GetDataService;

