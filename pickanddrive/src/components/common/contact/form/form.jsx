import { useState } from "react";
import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { services } from "../../../../services";
import { CustomForm } from "../../../";
import { Button, Form, Spinner } from "react-bootstrap";

const formArray = [
    {
        name: "name",
        label: "Name",
    },
    {
        name: "email",
        label: "Email",
        type: "email",
    },
    {
        name: "subject",
        label: "Subject",
    },
    {
        name: "body",
        label: "Message",
        type: "textarea",
        rows: 5,
    },
];

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            await services.contact.sendMessage(values);
            utils.functions.swalToast(
                "Your message has been sent successfully!",
                "success"
            );
            // formik form resetleme işlemi
            formik.resetForm();
        } catch (error) {
            utils.functions.swalToast(error.response.data.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: utils.initialValues.contactFormInitialValues,
        validationSchema: utils.validations.contactFormValidationSchema,
        onSubmit,
    });

    return (
        <Form
            noValidate
            onSubmit={formik.handleSubmit}
            className="contact-form">
            {formArray.map((item) => (
                <CustomForm key={item.name} formik={formik} {...item} />
            ))}
            <Button
                type="submit"
                disabled={!(formik.dirty && formik.isValid) || loading}
                className="w-100">
                {loading && <Spinner animation="border" size="sm" />} Send
            </Button>
        </Form>
    );
};

export default ContactForm;
