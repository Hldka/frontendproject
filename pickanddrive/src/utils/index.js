// FUNCTIONS
import { validCheck, swalQuestion, swalToast, checkDates, checkExpireDate, combineDateAndTime, formatDateTime, getCurrentDate, getDate, getTime, } from "./functions/functions";

// INITIAL VALUES
import { loginFormInitialValues, registerFormInitialValues, adminNewVehicleFormInitialValues, bookingFormInitialValues, contactFormInitialValues, userPasswordFormInitialValues } from "./initial-values/initial-values";

// TABLES
import { adminUserColumns, adminReservationsColumns } from "./tables/tables";

// VALIDATIONS
import { loginFormValidationSchema, registerFormValidationSchema, adminReservationDetailsFormValidationSchema, adminUserDetailsFormValidationSchema, adminVehicleFormValidationSchema, bookingFormValidationSchema, contactFormValidationSchema, userPasswordFormValidationSchema, userProfileFormValidationSchema, } from "./validations/validations";

export const utils = {
    functions: {
        validCheck,
        swalQuestion,
        swalToast,
        checkDates,
        checkExpireDate,
        combineDateAndTime,
        formatDateTime,
        getCurrentDate,
        getDate,
        getTime,
    },
    initialValues: {
        loginFormInitialValues,
        registerFormInitialValues,
        adminNewVehicleFormInitialValues,
        bookingFormInitialValues,
        contactFormInitialValues,
        userPasswordFormInitialValues
    },
    tables: {
        adminUserColumns,
        adminReservationsColumns
    },
    validations: {
        loginFormValidationSchema,
        registerFormValidationSchema,
        adminReservationDetailsFormValidationSchema,
        adminUserDetailsFormValidationSchema,
        adminVehicleFormValidationSchema,
        bookingFormValidationSchema,
        contactFormValidationSchema,
        userPasswordFormValidationSchema,
        userProfileFormValidationSchema,
    },
};