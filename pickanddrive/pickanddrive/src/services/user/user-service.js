import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL;

// COMMON ENDPOINTS
export const login = async (payload) => {
    const response = await axios.post(`${API_URL}/login`, payload);
    return response.data;
};
export const register = async (payload) => {
    const response = await axios.post(`${API_URL}/register`, payload);
    return response.data;
};

// USER ENDPOINTS
export const getUser = () => { };
export const updatePassword = () => { };
export const updateUser = () => { };

// ADMIN ENDPOINTS
export const deleteUser = () => { };
export const downloadUserReports = () => { };
export const getUserAdmin = () => { };
export const getUsersByPage = () => { };
export const updateUserAdmin = () => { };