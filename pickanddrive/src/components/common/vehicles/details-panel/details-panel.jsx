import {
    GiCarDoor,
    GiCarSeat,
    GiGearStickPattern,
    GiComputerFan,
    GiCalendarHalfYear,
} from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { MdOutlineLuggage } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import "./details-panel.scss";
import { useSelector } from "react-redux";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Spacer } from "../../../";

const API_URL = import.meta.env.VITE_APP_API_URL;

const DetailsPanel = () => {
    const vehicle = useSelector((state) => state.reservation.vehicle);

    const carDetails = [
        {
            id: 1,
            title: "Model",
            icon: <FaCar />,
            info: vehicle?.model,
        },
        {
            id: 2,
            title: "Doors",
            icon: <GiCarDoor />,
            info: vehicle?.doors,
        },
        {
            id: 3,
            title: "Seats",
            icon: <GiCarSeat />,
            info: vehicle?.seats,
        },
        {
            id: 4,
            title: "Luggage",
            icon: <MdOutlineLuggage />,
            info: vehicle?.luggage,
        },
        {
            id: 5,
            title: "Transmission",
            icon: <GiGearStickPattern />,
            info: vehicle?.transmission,
        },
        {
            id: 6,
            title: "Air Conditioning",
            icon: <GiComputerFan />,
            info: vehicle?.airConditioning ? "Yes" : "No",
        },
        {
            id: 7,
            title: "Fuel Type",
            icon: <BsFuelPump />,
            info: vehicle?.fuelType,
        },
        {
            id: 8,
            title: "Age",
            icon: <GiCalendarHalfYear />,
            info: vehicle?.age,
        },
    ];

    return (
        <div className="details-panel">
            <div className="panel-title">
                <h1 className="text-primary">{vehicle?.model}</h1>
                <h3>
                    <Badge>$ {vehicle?.pricePerHour} / hour</Badge>
                </h3>
            </div>
            <Card>
                <img
                    src={`${API_URL}/files/display/${vehicle?.image}`}
                    alt={vehicle?.model}
                    title={vehicle?.model}
                    loading="lazy"
                />
            </Card>
            <Spacer />
            <h2 className="text-primary">Property Higlights</h2>
            <Row xs={2} md={4}>
                {
                    carDetails.map((detail) => (
                        <Col key={detail.id} title={detail.title}>
                            {detail.icon}
                            <span>{detail.title}</span>
                            {detail.info}
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default DetailsPanel;
