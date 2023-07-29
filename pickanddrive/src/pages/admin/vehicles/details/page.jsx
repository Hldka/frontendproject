import {
    Alert,
    Badge,
    Button,
    ButtonGroup,
    Col,
    Form,
    Row,
    Spinner,
} from "react-bootstrap";
import { constants } from "../../../../constants";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { CustomForm, Loading } from "../../../../components";
import "./style.scss";
import { services } from "../../../../services";

const { routes } = constants;

const API_URL = import.meta.env.VITE_APP_API_URL;

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

const AdminVehicleDetailsPage = () => {
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [updating, setUpdating] = useState(false);

    // image loading related states
    const [loaded, setLoaded] = useState(false);
    const [imageChanged, setImageChanged] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const fileImageRef = useRef();
    const { vehicleId } = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        model: "",
        doors: "",
        seats: "",
        luggage: "",
        tranmission: constants.transmissionTypes[0].value,
        airConditioning: constants.airConditioningTypes[0].value,
        fuelType: constants.fuelTypes[0].value,
        age: "",
        pricePerHour: "",
        image: [],
    });

    const onSubmit = async (values) => {
        setUpdating(true);

        try {
            let imageId = values.image[0];
            // eger goruntum degistirildiyse bu state guncellenecek ve burasi true olacak
            if (imageChanged) {
                // mevcut image database'den silinecek

                if (values.image.length > 1) {
                    values.image.forEach(async (image) => {
                        await services.vehicle.deleteVehicleImage(image);
                    });
                } else {
                    if (imageId) {
                        await services.vehicle.deleteVehicleImage(imageId);
                    }
                }

                const newImageFile = fileImageRef.current.files[0];
                const formData = new FormData();
                formData.append("file", newImageFile);

                const response = await services.vehicle.uploadVehicleImage(
                    formData
                );
                imageId = response.imageId;
                setImageChanged(false);
            }

            const payload = { ...values };
            delete payload.image;

            await services.vehicle.updateVehicle(vehicleId, imageId, payload);
            utils.functions.swalToast(
                "Vehicle updated successfully.",
                "success"
            );
        } catch (error) {
            utils.functions.swalToast(
                "There was an error updating the vehicle.",
                "error"
            );
        } finally {
            setUpdating(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: utils.validations.adminVehicleFormValidationSchema,
        onSubmit,
        enableReinitialize: true,
    });

    // const handleSelectImage = () => {
    //     fileImageRef.current.click();
    // };

    const handleImageChange = () => {
        const file = fileImageRef.current.files[0];
        if (!file) return;

        // Sectigimiz goruntuyu ekrana yerlestirmemizi sagliyor
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImageSrc(reader.result);
            setImageChanged(true);
        };
    };

    const loadData = async () => {
        try {
            const response = await services.vehicle.getVehicleById(vehicleId);
            setInitialValues(response);
            setImageSrc(`${API_URL}/files/display/${response.image[0]}`);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const removeVehicle = async () => {
        setDeleting(true);
        try {
            await services.vehicle.deleteVehicle(vehicleId);
            utils.functions.swalToast(
                "Vehicle deleted successfully.",
                "success"
            );
            navigate(`${routes.adminVehicles}`);
        } catch (error) {
            utils.functions.swalToast(
                "There was an error deleting the vehicle.",
                "error"
            );
        } finally {
            setDeleting(false);
        }
    };

    const handleDelete = async () => {
        utils.functions
            .swalQuestion(
                "Are you sure you want to delete this vehicle?",
                "You won't be able to revert this!"
            )
            .then((result) => {
                if (result.isConfirmed) {
                    removeVehicle();
                }
            });
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Loading height={500} />
    ) : (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <div className="admin-vehicle-details-form">
                <fieldset disabled={formik.values.builtIn}>
                    <Row className="align-items-center">
                        <Col xl={3} className="image-area">
                            {!loaded && <Loading height={200} />}
                            {imageSrc && (
                                <img
                                    src={imageSrc}
                                    alt={formik?.values?.model}
                                    title={formik?.values?.model}
                                    style={{
                                        display: loaded ? "block" : "none",
                                    }}
                                    onLoad={() => setLoaded(true)}
                                />
                            )}
                            <Form.Group>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    accept=".jpg, .jpeg, .png"
                                    ref={fileImageRef}
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
                </fieldset>
                {formik.values.builtIn && (
                    <Alert variant="warning" className="mt-5">
                        Built-in vehicles cannot be deleted or updated.
                    </Alert>
                )}
                <div className="text-end">
                    <ButtonGroup>
                        <Button
                            onClick={() => navigate(`${routes.adminVehicles}`)}>
                            Cancel
                        </Button>
                        {!formik.values.builtIn && (
                            <>
                                <Button
                                    type="submit"
                                    disabled={
                                        (!imageChanged &&
                                            !(
                                                formik.dirty && formik.isValid
                                            )) ||
                                        updating
                                    }>
                                    {updating && (
                                        <Spinner animation="border" size="sm" />
                                    )}{" "}
                                    Update
                                </Button>
                                <Button
                                    variant="danger"
                                    disabled={deleting}
                                    onClick={handleDelete}>
                                    {deleting && (
                                        <Spinner animation="border" size="sm" />
                                    )}{" "}
                                    Delete
                                </Button>
                            </>
                        )}
                    </ButtonGroup>
                </div>
            </div>
        </Form>
    );
};

export default AdminVehicleDetailsPage;
