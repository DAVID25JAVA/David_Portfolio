import axios from "axios";

let baseUrl = 'https://portfolio-dashboard-backend-4eev.vercel.app/api';

const createInstance = axios.create({
    baseURL:baseUrl,
    withCredentials:true
})

 export const API = async ({method, url, data={},params={}}) => {
    try {
        const res = await createInstance({ method, url, data, params });
        return res;
    } catch (error) {
        throw new Error(error)
    }
}

