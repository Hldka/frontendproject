import { useEffect, useState } from "react";
import { constants } from "../../../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { CustomForm, Loading } from "../../../../components";
import {
    Alert,
    Button,
    ButtonGroup,
    Form,
    Row,
    Spinner,
} from "react-bootstrap";
import { services } from "../../../../services";

const { routes } = constants;

const formItems = [
    {
        label: "First Name",
        name: "firstName",
    },
    {
        label: "Last Name",
        name: "lastName",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
    },
    {
        label: "Phone Number",
        name: "phoneNumber",
        asInput: "ReactInputMask",
        mask: "(999) 999-9999",
    },
    {
        label: "Address",
        name: "address",
    },
    {
        label: "Zip Code",
        name: "zipCode",
    },
];

const AdminUserDetailsPage = () => {
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [updating, setUpdating] = useState(false);

    const { userId } = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        roles: [],
    });

    const onSubmit = async (values) => {
        setUpdating(true);
        if (!values.password) delete values.password;
        const dto = {
            ...values,
            builtIn: false, // bazi verilerin silinmesini onlemek amaciyla
        };

        try {
            await services.user.updateUserAdmin(userId, dto);
            utils.functions.swalToast("User updated successfully.", "success");
        } catch (error) {
            utils.functions.swalToast(
                "There was an error updating the user.",
                "error"
            );
        } finally {
            setUpdating(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema:
            utils.validations.adminUserDetailsFormValidationSchema,
        onSubmit,
        enableReinitialize: true,
    });

    const removeUser = async () => {
        setDeleting(true);
        try {
            await services.user.deleteUser(userId);
            utils.functions.swalToast("User deleted successfully.", "success");
            navigate(`${routes.adminUsers}`);
        } catch (error) {
            utils.functions.swalToast(
                "There was an error deleting the user.",
                "error"
            );
        } finally {
            setDeleting(false);
        }
    };

    const handleDelete = async () => {
        utils.functions
            .swalQuestion(
                "Are you sure you want to delete this user?",
                "You won't be able to revert this action!"
            )
            .then((result) => {
                if (result.isConfirmed) {
                    removeUser();
                }
            });
    };

    const handleChangeRoles = (role) => {
        if (formik.values.roles.includes(role)) {
            const newRoles = formik.values.roles.filter((r) => r !== role);
            formik.setFieldValue("roles", newRoles);
        } else {
            formik.setFieldValue("roles", [...formik.values.roles, role]);
        }
    };

    const loadData = async () => {
        try {
            const userData = await services.user.getUserAdmin(userId);
            setInitialValues(userData);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Loading height={500} />
    ) : (
        <Form
            noValidate
            onSubmit={formik.handleSubmit}
            className="admin-user-details-form mt-5">
            <fieldset disabled={formik.values.builtIn}>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {formItems.map((item) => (
                        <CustomForm key={item.name} formik={formik} {...item} />
                    ))}
                </Row>
                <Form.Check
                    label="Customer"
                    value="Customer"
                    type="checkbox"
                    name="roles"
                    checked={formik.values.roles.includes("Customer")}
                    onChange={() => handleChangeRoles("Customer")}
                />
                <Form.Check
                    label="Admin"
                    value="Administrator"
                    type="checkbox"
                    name="roles"
                    checked={formik.values.roles.includes("Administrator")}
                    onChange={() => handleChangeRoles("Administrator")}
                />
            </fieldset>
            {formik.values.builtIn && (
                <Alert variant="warning">
                    Built-in accounts cannot be deleted or updated.
                </Alert>
            )}
            <div className="text-end">
                <ButtonGroup>
                    <Button onClick={() => navigate(-1)}>Cancel</Button>
                    {!formik.values.builtIn && (
                        <>
                            <Button
                                type="submit"
                                disabled={
                                    !(formik.dirty && formik.isValid) ||
                                    updating
                                }>
                                {updating && (
                                    <Spinner animation="border" size="sm" />
                                )}{" "}
                                Update
                            </Button>
                            <Button
                                variant="danger"
                                onClick={handleDelete}
                                disabled={deleting}>
                                {deleting && (
                                    <Spinner animation="border" size="sm" />
                                )}{" "}
                                Delete
                            </Button>
                        </>
                    )}
                </ButtonGroup>
            </div>
        </Form>
    );
};

export default AdminUserDetailsPage;
