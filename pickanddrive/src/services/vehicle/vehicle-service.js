import axios from 'axios';
import { services } from '..';

const API_URL = import.meta.env.VITE_APP_API_URL;

// COMMON ENDPOINTS
export const getVehicleById = async (id) => {
    const response = await axios.get(`${API_URL}/car/visitors/${id}`);
    return response.data;
};
export const getVehicles = async () => {
    const response = await axios.get(`${API_URL}/car/visitors/all`);
    return response.data;
};
export const getVehiclesByPage = async (page = 0, size = 6, sort = "model", direction = "ASC") => {
    const response = await axios.get(`${API_URL}/car/visitors/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`);
    return response.data;
};

// ADMIN ENDPOINTS
export const addVehicle = async (imageId, payload) => {
    const response = await axios.post(`${API_URL}/car/admin/${imageId}/add`, payload, services.authHeader());
    return response.data;
};

export const deleteVehicle = async (id) => {
    const response = await axios.delete(`${API_URL}/car/admin/${id}/auth`, services.authHeader());
    return response.data;
};

export const deleteVehicleImage = async (id) => {
    const response = await axios.delete(`${API_URL}/files/${id}`, services.authHeader());
    return response.data;
};

export const downloadVehicleReports = async () => {
    const token = services.encryptedLocalStorage.getItem("pickanddrivetoken");
    const response = await axios.get(`${API_URL}/excel/download/cars`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            responseType: "blob"
        }
    );
    return response.data;
};
export const updateVehicle = async (vehicleId, imageId, payload) => {
    const response = await axios.put(`${API_URL}/car/admin/auth?id=${vehicleId}&imageId=${imageId}`, payload, services.authHeader());
    return response.data;
};

export const uploadVehicleImage = async (file) => {
    const response = await axios.post(`${API_URL}/files/upload`, file, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${services.encryptedLocalStorage.getItem("pickanddrivetoken")}`
        }
    })
    return response.data;
};