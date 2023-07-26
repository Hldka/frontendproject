import axios from "axios";
import { services } from "..";
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
export const getUser = async () => {
    const response = await axios.get(`${API_URL}/user`, services.authHeader());
    return response.data;
};
export const updatePassword = async (dto) => {
    const response = await axios.patch(`${API_URL}/user/auth`, dto, services.authHeader());
    return response.data;
};
export const updateUser = async (userInfo) => {
    const response = await axios.put(`${API_URL}/user`, userInfo, services.authHeader());
    return response.data;
};

// ADMIN ENDPOINTS
export const deleteUser = () => { };

export const downloadUserReports = async () => {
    // TODO: Implement this
    const response = await axios.get(`${API_URL}/excel/download/users`,
    );

};

export const getUserAdmin = () => { };

export const getUsersByPage = async (page = 0, size = 20, sort = "id", direction = "DESC") => {
    const response = await axios.get(`${API_URL}/user/auth/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`, services.authHeader());
    return response.data;
};

export const updateUserAdmin = () => { };