import api from '../api.services';


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


const PrivateCrud = {
    PhoneBookCreate,
    PhoneBookDelete,
    PhoneBookUpdate
}

export default PrivateCrud;