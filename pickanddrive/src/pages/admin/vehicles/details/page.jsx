import { Col, Form, Row } from "react-bootstrap";
import { constants } from "../../../../constants";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { Loading } from "../../../../components";

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

    const onSubmit = async (values) => {};

    const formik = useFormik({
        initialValues,
        validationSchema: utils.validations.adminVehicleFormValidationSchema,
        onSubmit,
        enableReinitialize: true,
    });

    const handleSelectImage = () => {};

    const handleImageChange = () => {};

    const loadData = async () => {
        try {
            //
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const removeVehicle = async () => {};

    const handleDelete = async () => {};

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
                        </Col>
                    </Row>
                </fieldset>
            </div>
        </Form>
    );
};

export default AdminVehicleDetailsPage;
