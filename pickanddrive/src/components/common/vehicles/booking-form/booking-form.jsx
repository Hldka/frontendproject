import { useFormik } from "formik";
import { utils } from "../../../../utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CustomForm, SectionHeader } from "../../../";
import {
    Alert,
    Button,
    ButtonGroup,
    Form,
    FormCheck,
    InputGroup,
    Spinner,
} from "react-bootstrap";
import { services } from "../../../../services";
import { constants } from "../../../../constants";
import moment from "moment/moment";

const { routes } = constants;

const formItems = [
    {
        label: "Pick Up Location",
        name: "pickUpLocation",
        floating: true,
    },
    {
        label: "Drop Off Location",
        name: "dropOffLocation",
        floating: true,
    },
    {
        label: "Pick Up Date",
        name: "pickUpDate",
        type: "date",
        floating: true,
        min: moment().format("YYYY-MM-DD"),
    },
    {
        label: "Pick Up Time",
        name: "pickUpTime",
        type: "time",
        floating: true,
    },
    {
        label: "Drop Off Date",
        name: "dropOffDate",
        type: "date",
        floating: true,
    },
    {
        label: "Drop Off Time",
        name: "dropOffTime",
        type: "time",
        floating: true,
    },
    {
        label: "Card Number",
        name: "cardNo",
        floating: true,
        asInput: "ReactInputMask",
        mask: "9999-9999-9999-9999",
    },
    {
        label: "Card Holder Name",
        name: "cardHolderName",
        floating: true,
    },
    {
        label: "Expiry Date",
        name: "expiryDate",
        type: "month",
        floating: true,
    },
    {
        label: "CVV",
        name: "cvv",
        floating: true,
        asInput: "ReactInputMask",
        mask: "999",
    },
    {
        label: "I agree to the terms and conditions",
        name: "terms",
        id: "terms",
        type: "checkbox",
    },
];

const BookingForm = () => {
    const [loading, setLoading] = useState(false);
    const [vehicleAvailable, setVehicleAvailable] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const {
        auth: { isLoggedIn },
        reservation: { vehicle },
    } = useSelector((state) => state);

    const navigate = useNavigate();

    const onSubmit = async (values) => {
        setLoading(true);

        const {
            pickUpDate,
            pickUpTime,
            dropOffDate,
            dropOffTime,
            pickUpLocation,
            dropOffLocation,
        } = values;

        console.log(values);

        const dto = {
            pickUpTime: utils.functions.combineDateAndTime(
                pickUpDate,
                pickUpTime
            ),
            dropOffTime: utils.functions.combineDateAndTime(
                dropOffDate,
                dropOffTime
            ),
            pickUpLocation: pickUpLocation,
            dropOffLocation: dropOffLocation,
        };

        try {
            await services.reservation.createReservation(vehicle.id, dto);
            utils.functions.swalToast(
                "Reservation created successfully!",
                "success"
            );
            navigate(routes.userReservations);
        } catch (error) {
            utils.functions.swalToast(
                "There is an error occurred during rent operation!",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleAvailability = async () => {
        if (!isLoggedIn || !formik.dirty) return;
        // TODO: Formik dirty kontrolu yapilacak

        setLoading(true);

        const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } =
            formik.values;

        const dto = {
            carId: vehicle.id,
            pickUpDateTime: utils.functions.combineDateAndTime(
                pickUpDate,
                pickUpTime
            ),
            dropOffDateTime: utils.functions.combineDateAndTime(
                dropOffDate,
                dropOffTime
            ),
        };

        try {
            if (!utils.functions.checkDates(formik.values))
                return utils.functions.swalToast(
                    "Pick up date must be minimum 1 hour before drop off date!",
                    "error"
                );
            // TODO: Gecmise yonelik bir tarih secilmemeli
            const data = await services.reservation.isVehicleAvailable(dto);
            console.log(data);
            const { available, totalPrice } = data;
            setTotalPrice(totalPrice);
            setVehicleAvailable(available);
            if (!available) {
                utils.functions.swalToast(
                    "Vehicle is not available for the selected dates!",
                    "error"
                );
            }
            // TODO: Eger arac uygun degilse, tekrardan istek gonderilmemesi icin islem yapilmali
        } catch (error) {
            utils.functions.swalToast(
                "There is an error occurred during rent operation!",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: utils.initialValues.bookingFormInitialValues,
        validationSchema: utils.validations.bookingFormValidationSchema,
        onSubmit,
    });

    return (
        <div className="booking-form">
            <SectionHeader title1="Book" title2="Now" />
            {/* show alert if user not logged in - eger kullanici giris yapmadiysa uyari goster */}
            {!isLoggedIn && (
                <Alert>
                    Please login first to check if the car is available
                </Alert>
            )}
            <Form noValidate onSubmit={formik.handleSubmit}>
                {/* check if user logged in, otherwise make reservation disabled - kullanicinin giris yapip yapmadigini kontrol et, aksi halde rezervasyonu erisilemez kil */}
                <fieldset disabled={!isLoggedIn}>
                    {formItems.slice(0, 2).map((item) => (
                        <CustomForm key={item.name} formik={formik} {...item} />
                    ))}
                    <InputGroup className="mb-3">
                        {formItems.slice(2, 4).map((item) => (
                            <CustomForm
                                key={item.name}
                                formik={formik}
                                {...item}
                            />
                        ))}
                    </InputGroup>
                    <InputGroup className="mb-3">
                        {formItems.slice(4, 6).map((item) => (
                            <CustomForm
                                key={item.name}
                                formik={formik}
                                {...item}
                            />
                        ))}
                    </InputGroup>
                    <Button
                        variant="secondary"
                        className={`w-100 ${isLoggedIn || "d-none"}`}
                        disabled={loading}
                        onClick={handleAvailability}>
                        {loading && <Spinner animation="border" size="sm" />}{" "}
                        Check If Available
                    </Button>
                </fieldset>
                {/*  check both vehicle available and user logged in, otherwise make payment section invisible - kullanicinin giris yaptigini ve aracin uygun oldugunu kontrol et, aksi halde odeme kismi gorunmez olsun */}
                <fieldset
                    className={`mt-5 ${
                        (vehicleAvailable && isLoggedIn) || "d-none"
                    }`}>
                    <Alert variant="success">
                        <h2>Total Price: ${totalPrice}</h2>
                        {formItems.slice(6, 10).map((item) => (
                            <CustomForm
                                key={item.name}
                                formik={formik}
                                {...item}
                            />
                        ))}
                        <FormCheck
                            type="checkbox"
                            id="terms"
                            value={true}
                            label="I agree to the terms and conditions"
                            {...formik.getFieldProps("terms")}
                        />
                        <ButtonGroup className="w-100 mt-3">
                            <Button
                                variant="outline-primary"
                                disabled={loading}
                                onClick={() => setVehicleAvailable(false)}
                                className="w-50">
                                Edit
                            </Button>
                            <Button
                                variant="outline-primary"
                                type="submit"
                                disabled={loading}
                                className="w-50">
                                Book Now
                            </Button>
                        </ButtonGroup>
                    </Alert>
                </fieldset>
            </Form>
        </div>
    );
};

export default BookingForm;
