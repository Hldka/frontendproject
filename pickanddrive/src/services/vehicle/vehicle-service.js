import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;


// COMMON ENDPOINTS
export const getVehicleById = () => { };
export const getVehicles = async () => {
    const response = await axios.get(`${API_URL}/car/visitors/all`);
    return response.data;
};
export const getVehiclesByPage = async () => {};

// ADMIN ENDPOINTS
export const addVehicle = () => { };
export const deleteVehicle = () => { };
export const deleteVehicleImage = () => { };
export const downloadVehicleReports = () => { };
export const updateVehicle = () => { };
export const uploadVehicleImage = () => { };