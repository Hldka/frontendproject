// FUNCTIONS
import { validCheck, swalQuestion, swalToast } from "./functions/functions";

// INITIAL VALUES
import { loginFormInitialValues } from "./initial-values/initial-values";

// TABLES


// VALIDATIONS
import { loginFormValidationSchema } from "./validations/validations";

export const utils = {
    functions: {
        validCheck,
        swalQuestion,
        swalToast
    },
    initialValues: {
        loginFormInitialValues
    },
    tables: {},
    validations: {
        loginFormValidationSchema
    },
};