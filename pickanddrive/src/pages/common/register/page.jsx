import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { utils } from "../../../utils";
import { services } from "../../../services";
import { constants } from "../../../constants";
import { Button, Form, Spinner } from "react-bootstrap";
import { CustomForm, PasswordInput } from "../../../components";
import "./style.scss";

const { routes } = constants;

const formItems = [
    {
        name: "firstName",
        label: "First Name",
        placeholder: "Enter first name",
    },
    {
        name: "lastName",
        label: "Last Name",
        placeholder: "Enter last name",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter email",
        type: "email",
    },
    {
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "Enter phone number",
        asInput: "ReactInputMask",
        mask: "(999) 999-9999",
    },
    {
        name: "address",
        label: "Address",
        placeholder: "Enter address",
    },
    {
        name: "zipCode",
        label: "Zip Code",
        placeholder: "Enter zip code",
        type: "number",
    },
];

const passwordItems = [
    {
        name: "password",
        label: "Password",
        placeholder: "Enter password",
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Confirm password",
    },
];

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            await services.user.register(values);
            utils.functions.swalToast(
                "You have successfully registered!",
                "success"
            );
            navigate(routes.login);
        } catch (error) {
            console.log(error);
            utils.functions.swalToast(error.response.data.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: utils.initialValues.registerFormInitialValues,
        validationSchema: utils.validations.registerFormValidationSchema,
        onSubmit,
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="register-form">
            {formItems.map((item, index) => (
                <CustomForm key={index} formik={formik} {...item} />
            ))}
            {passwordItems.map((item, index) => (
                <PasswordInput key={index} formik={formik} {...item} />
            ))}
            <Button
                type="submit"
                disabled={!(formik.dirty && formik.isValid) || loading}>
                {loading && <Spinner animation="border" size="sm" />} REGISTER
            </Button>
            <p>Already a member?</p>
            <Button onClick={() => navigate(routes.login)} disabled={loading}>
                LOGIN
            </Button>
        </Form>
    );
};

export default RegisterPage;
