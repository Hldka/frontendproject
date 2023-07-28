import axios from "axios";
import { services } from "..";

const API_URL = import.meta.env.VITE_APP_API_URL;

// COMMON ENDPOINTS
export const sendMessage = async (message) => {
    const response = await axios.post(`${API_URL}/contactmessage/visitors`, message);
    return response.data;
}

// ADMIN ENDPOINTS
export const getMessagesByPage = async (
    page = 0,
    size = 20,
    sort = "id",
    direction = "DESC"
) => {
    const response = await axios.get(`${API_URL}/contactmessage/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`, services.authHeader());
    return response.data;
};
export const getMessage = async (id) => {
    const response = await axios.get(`${API_URL}/contactmessage/${id}`, services.authHeader());
    return response.data;
}
export const deleteMessage = async (id) => {
    const response = await axios.delete(`${API_URL}/contactmessage/${id}`, services.authHeader());
    return response.data;
}