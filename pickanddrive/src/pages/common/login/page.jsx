import { useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../../../store";
import { useFormik } from "formik";
import { services } from "../../../services/";
import { utils } from "../../../utils";
import { CustomForm, PasswordInput } from "../../../components";
import { constants } from "../../../constants";
import "./style.scss";

const { routes } = constants;

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            // istegini endpointe gonder
            const data = await services.user.login(values);
            // token'i sifrelenmis localstorage'e kaydet
            services.encryptedLocalStorage.setItem(
                "pickanddrivetoken",
                data.token
            );
            // token ile kullanici bilgilerini al
            const responseUser = await services.user.getUser();
            // kullanici bilgilerini merkezi state'e kaydet
            dispatch(loginSuccess(responseUser));
            utils.functions.swalToast(
                "You have successfully logged in",
                "success"
            );
            navigate(routes.home);
        } catch (error) {
            dispatch(loginFailure());
            utils.functions.swalToast(error.response.data.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: utils.initialValues.loginFormInitialValues,
        validationSchema: utils.validations.loginFormValidationSchema,
        onSubmit,
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit} className="login-form">
            <CustomForm
                formik={formik}
                name="email"
                label="Email Address"
                placeholder="johndoe@example.com"
                type="email"
            />
            <PasswordInput
                formik={formik}
                name="password"
                label="Password"
                placeholder="Enter your password..."
            />
            <Button
                type="submit"
                disabled={!(formik.dirty && formik.isValid) || loading}>
                {loading && <Spinner animation="border" size="sm" />} LOGIN
            </Button>
            <p>OR</p>
            <Button
                onClick={() => navigate(routes.register)}
                disabled={loading}>
                REGISTER
            </Button>
        </Form>
    );
};

export default LoginPage;
