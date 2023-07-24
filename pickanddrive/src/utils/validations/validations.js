import * as Yup from 'yup';

// LOGIN FORM
export const loginFormValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    password: Yup.string()
        .required("Please enter your password")
});

