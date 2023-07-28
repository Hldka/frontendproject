import axios from "axios";
import { services } from "../";

const API_URL = import.meta.env.VITE_APP_API_URL;

// COMMON ENDPOINTS
export const createReservation = async (carId, dto) => {
    const response = await axios.post(`${API_URL}/reservations/add?carId=${carId}`, dto, services.authHeader());
    return response.data;
};

export const getReservationById = async (id) => {
    const response = await axios.get(`${API_URL}/reservations/${id}/auth`, services.authHeader());
    return response.data;
};

export const getReservationsByPage = async (page = 0, size = 20, sort = "pickUpTime", direction = "DESC") => {
    const response = await axios.get(`${API_URL}/reservations/auth/all?page=${page}&size=${size}&sort=${sort}&direction=${direction}`, services.authHeader());
    return response.data;
};

export const isVehicleAvailable = async (payload) => {
    const { carId, pickUpDateTime, dropOffDateTime } = payload;
    const response = await axios.get(`${API_URL}/reservations/auth?carId=${carId}&pickUpDateTime=${pickUpDateTime}&dropOffDateTime=${dropOffDateTime}`, services.authHeader());
    return response.data;
};


// ADMIN ENDPOINTS
export const deleteReservation = async (id) => {
    const response = await axios.delete(`${API_URL}/reservations/admin/${id}/auth`, services.authHeader());
    return response.data;
};

export const downloadReservationReports = async () => {
    const token = services.encryptedLocalStorage.getItem("pickanddrivetoken");
    const response = await axios.get(`${API_URL}/excel/download/reservations`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            responseType: "blob"
        }
    );
    return response.data;
};

export const getReservationByIdAdmin = async (id) => {
    const response = await axios.get(`${API_URL}/reservations/${id}/admin`, services.authHeader());
    return response.data;
};

export const getReservationsByPageAdmin = () => { };

export const updateReservation = async (carId, reservationId, payload) => {
    const response = await axios.put(`${API_URL}/reservations/admin/auth?carId=${carId}&reservationId=${reservationId}`, payload, services.authHeader());
    return response.data;
};
