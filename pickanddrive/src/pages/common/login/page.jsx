import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../../../store";
import { useFormik } from "formik";
import { services } from "../../../services/";
import { utils } from "../../../utils";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            // istegini endpointe gonder
            const data = await services.user.login(values);

            services.encryptedLocalStorage.setItem("token", data.token);
            // const responseUser = await services.user.getUser();
            // token ile kullanici bilgilerini al
            // kullanici bilgilerini merkezi state'e kaydet
            dispatch(loginSuccess());
            utils.functions.swalToast(
                "You have successfully logged in",
                "success"
            );
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
        <Form noValidate onSubmit={formik.handleSubmit}>
            {/* CUSTOM FORM */}
            {/* PASSWORD INPUT */}
            <Button>LOGIN</Button>
            <p>OR</p>
            <Button>REGISTER</Button>
        </Form>
    );
};

export default LoginPage;
