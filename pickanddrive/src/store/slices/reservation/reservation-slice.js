import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        vehicle: null,
        reservations: null,
    },
    reducers: {
        setVehicle: (state, action) => {
            state.vehicle = action.payload;
        },
        setReservations: (state, action) => {
            state.reservations = action.payload;
        },
    }
});

export const { setReservations, setVehicle } = reservationSlice.actions;
export default reservationSlice.reducer;