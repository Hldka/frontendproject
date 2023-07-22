// FUNCTIONS
import { validCheck, swalQuestion, swalToast } from "./functions/functions";

// INITIAL VALUES
import { loginFormInitialValues, registerFormInitialValues } from "./initial-values/initial-values";

// TABLES


// VALIDATIONS
import { loginFormValidationSchema, registerFormValidationSchema } from "./validations/validations";

export const utils = {
    functions: {
        validCheck,
        swalQuestion,
        swalToast
    },
    initialValues: {
        loginFormInitialValues,
        registerFormInitialValues
    },
    tables: {},
    validations: {
        loginFormValidationSchema,
        registerFormValidationSchema
    },
};