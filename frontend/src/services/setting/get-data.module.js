import axios from "axios";


const getPhoneBook = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_API + 'apps/phone-book/show');
    return response.data.data
}

const getSensorDetail = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_API + 'apps/sensor-detail/show');
    return response.data.data
}
const GetDataService = {
    getPhoneBook,
    getSensorDetail
};
export default GetDataService;

