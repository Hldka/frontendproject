import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { utils } from "../../../../utils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { services } from "../../../../services";
import { PasswordInput } from "../../../";

const passwordItems = [
    {
        name: "oldPassword",
        label: "Current Password",
    },
    {
        name: "newPassword",
        label: "New Password",
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
    },
];

const UserPasswordForm = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const { builtIn } = user;

    const onSubmit = async (values) => {
        setLoading(true);

        const dto = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
        };

        try {
            await services.user.updatePassword(dto);
            utils.functions.swalToast(
                "Your password has been updated.",
                "success"
            );
            formik.resetForm();
        } catch (error) {
            utils.functions.swalToast(
                "There was an error updating your password.",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: utils.initialValues.userPasswordFormInitialValues,
        validationSchema: utils.validations.userPasswordFormValidationSchema,
        onSubmit,
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <fieldset disabled={builtIn}>
                {passwordItems.map((item) => (
                    <PasswordInput key={item.name} formik={formik} {...item} />
                ))}
                <Button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty) || loading}
                    className="text-uppercase w-100 mt-3">
                    Update Password
                </Button>
            </fieldset>
        </Form>
    );
};

export default UserPasswordForm;
