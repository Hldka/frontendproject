import {
    Badge,
    Button,
    ButtonGroup,
    Col,
    Form,
    Row,
    Spinner,
} from "react-bootstrap";
import { constants } from "../../../../constants";
import { useState } from "react";
import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { CustomForm } from "../../../../components";
import "./style.scss";
import { services } from "../../../../services";

const { routes } = constants;

const formItems = [
    {
        name: "model",
        label: "Model",
        asGroup: Col,
    },
    {
        name: "doors",
        label: "Doors",
        asGroup: Col,
        type: "number",
    },
    {
        name: "seats",
        label: "Seats",
        asGroup: Col,
        type: "number",
    },
    {
        name: "luggage",
        label: "Luggage",
        asGroup: Col,
        type: "number",
    },
    {
        name: "age",
        label: "Age",
        asGroup: Col,
        type: "number",
    },
    {
        name: "pricePerHour",
        label: "Price Per Hour",
        asGroup: Col,
        type: "number",
    },
    {
        name: "transmission",
        label: "Transmission",
        asGroup: Col,
        type: "select",
        itemsArr: constants.transmissionTypes,
    },
    {
        name: "airConditioning",
        label: "Air Conditioner",
        asGroup: Col,
        type: "select",
        itemsArr: constants.airConditioningTypes,
    },
    {
        name: "fuelType",
        label: "Fuel Type",
        asGroup: Col,
        type: "select",
        itemsArr: constants.fuelTypes,
    },
];

const AdminNewVehiclePage = () => {
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (values) => {
        setLoading(true);

        // API'a dosya yukleyebilmek icin, FormData olusturuyoruz ve goruntumuzu bunun icerisine ekliyoruz
        // eger baska bilgiler varsa bunlar da FormData icerisine eklenebilir
        const formData = new FormData();
        formData.append("file", values.image);

        try {
            const imageData = await services.vehicle.uploadVehicleImage(
                formData
            );
            delete values.image;
            await services.vehicle.addVehicle(imageData.imageId, values);
            utils.functions.swalToast(
                "Vehicle created successfully",
                "success"
            );
            navigate(`${routes.adminVehicles}`);
        } catch (error) {
            utils.functions.swalToast(
                "There was an error creating the vehicle",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: utils.initialValues.adminNewVehicleFormInitialValues,
        validationSchema: utils.validations.adminVehicleFormValidationSchema,
        onSubmit,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageSrc(reader.result);
            formik.setFieldValue("image", file);
        };
    };

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <div className="admin-new-vehicle-form">
                <Row className="align-items-center">
                    <Col xl={3} className="image-area">
                        {imageSrc && (
                            <img
                                src={imageSrc}
                                alt={formik?.values?.model}
                                title={formik?.values?.model}
                            />
                        )}
                        <Form.Group>
                            <Form.Control
                                type="file"
                                name="image"
                                accept=".jpg, .jpeg, .png"
                                onChange={handleImageChange}
                                id="selectImage"
                                className="d-none"
                            />
                            <div className="cover">
                                <Button
                                    as={Form.Label}
                                    htmlFor="selectImage"
                                    // onClick={handleSelectImage}
                                >
                                    Select Image
                                </Button>
                            </div>
                        </Form.Group>
                        <Badge bg="danger" className="image-error">
                            {formik.errors.image}
                        </Badge>
                    </Col>
                    <Col xl={9}>
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {formItems.map((item) => (
                                <CustomForm
                                    key={item.name}
                                    formik={formik}
                                    {...item}
                                />
                            ))}
                        </Row>
                    </Col>
                </Row>
                <div className="text-end">
                    <ButtonGroup>
                        <Button
                            onClick={() => navigate(`${routes.adminVehicles}`)}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!formik.isValid || loading}>
                            {loading && (
                                <Spinner animation="border" size="sm" />
                            )}{" "}
                            Create
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </Form>
    );
};

export default AdminNewVehiclePage;
