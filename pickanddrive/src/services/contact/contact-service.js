import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

// COMMON ENDPOINTS
export const sendMessage = async (message) => {
    const response = await axios.post(`${API_URL}/contactmessage/visitors`, message);
    return response.data;
}

// ADMIN ENDPOINTS
export const getMessagesByPage = () => { }
export const getMessage = () => { }
export const deleteMessage = () => { }