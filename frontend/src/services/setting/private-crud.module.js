import api from '../api.services';

//phone book
const PhoneBookCreate = async (data) =>{
    const response = await api.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/phone-book/create', data);
    return response
}

const PhoneBookDelete = async (data) => {
    const response = await api.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/phone-book/delete', data);
    return response
}

const PhoneBookUpdate = async (data) => {
    const response = await api.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/phone-book/update', data);
    return response
}


//sensor detail

const SensorDetailUpdate = async (data) => {
    const response = await api.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/sensor-detail/update', data);
    return response
}

//suhu humadity
const SuhuHumadityUpdate = async (data) => {
    const response = await api.post(process.env.NEXT_PUBLIC_BASE_API + 'apps/suhu-humadity/update', data);
    return response
}



const PrivateCrud = {
    PhoneBookCreate,
    PhoneBookDelete,
    PhoneBookUpdate,

    SensorDetailUpdate,
    SuhuHumadityUpdate
}

export default PrivateCrud;