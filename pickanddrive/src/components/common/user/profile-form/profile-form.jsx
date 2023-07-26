import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { utils } from "../../../../utils";
import { services } from "../../../../services";
import { CustomForm } from "../../../";

const formInputs = [
    {
        name: "firstName",
        label: "First Name",
    },
    {
        name: "lastName",
        label: "Last Name",
    },
    {
        name: "email",
        label: "Email",
        type: "email",
    },
    {
        name: "phoneNumber",
        label: "Phone Number",
        asInput: "ReactInputMask",
        mask: "(999) 999-9999",
    },
    {
        name: "address",
        label: "Address",
    },
    {
        name: "zipCode",
        label: "Zip Code",
        type: "number",
    },
];

const UserProfileForm = () => {
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => state.auth);
    console.log(user);

    const initialValues = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        address: user?.address,
        zipCode: user?.zipCode,
    };

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            await services.user.updateUser(values);
            utils.functions.swalToast(
                "Profile updated successfully.",
                "success"
            );
        } catch (error) {
            utils.functions.swalToast("Unable to update profile.", "error");
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: utils.validations.userProfileFormValidationSchema,
        onSubmit,
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <fieldset disabled={user?.builtIn}>
                {formInputs.map((item) => (
                    <CustomForm key={item.name} formik={formik} {...item} />
                ))}
                <Button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty) || loading}
                    className="text-uppercase w-100 mt-3">
                    Update Information
                </Button>
            </fieldset>
        </Form>
    );
};

export default UserProfileForm;
