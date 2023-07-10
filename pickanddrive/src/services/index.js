import { deleteMessage, getMessage, getMessagesByPage, sendMessage } from "./contact/contact-service";

import { createReservation, deleteReservation, downloadReservationReports, getReservationById, getReservationByIdAdmin, getReservationsByPage, getReservationsByPageAdmin, isVehicleAvailable, updateReservation } from "./reservation/reservation-service";

import { deleteUser, downloadUserReports, getUser, getUserAdmin, getUsersByPage, login, register, updatePassword, updateUser, updateUserAdmin } from "./user/user-service";

import { addVehicle, deleteVehicle, deleteVehicleImage, downloadVehicleReports, getVehicleById, getVehicles, getVehiclesByPage, updateVehicle, uploadVehicleImage } from "./vehicle/vehicle-service";

export const services = {
    contact: {
        // COMMON ENDPOINTS
        sendMessage,
        // ADMIN ENDPOINTS
        deleteMessage,
        getMessage,
        getMessagesByPage,
    },
    reservation: {
        // COMMON ENDPOINTS
        createReservation,
        getReservationById,
        getReservationsByPage,
        isVehicleAvailable,
        // ADMIN ENDPOINTS
        deleteReservation,
        downloadReservationReports,
        getReservationByIdAdmin,
        getReservationsByPageAdmin,
        updateReservation,
    },
    user: {
        // COMMON ENDPOINTS
        login,
        register,
        // USER ENDPOINTS
        getUser,
        updateUser,
        updatePassword,
        // ADMIN ENDPOINTS
        deleteUser,
        downloadUserReports,
        getUserAdmin,
        getUsersByPage,
        updateUserAdmin,
    },
    vehicle: {
        // COMMON ENDPOINTS
        getVehicleById,
        getVehicles,
        getVehiclesByPage,
        // ADMIN ENDPOINTS
        addVehicle,
        deleteVehicle,
        deleteVehicleImage,
        downloadVehicleReports,
        updateVehicle,
        uploadVehicleImage,
    }
}