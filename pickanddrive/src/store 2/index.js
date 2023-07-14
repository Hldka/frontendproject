import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth-slice";
import reservationReducer from "./slices/reservation/reservation-slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        reservation: reservationReducer,
    }
});

export { loginSuccess, loginFailure, logout } from "./slices/auth/auth-slice";
export { setReservations, setVehicle } from "./slices/reservation/reservation-slice";