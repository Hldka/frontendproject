import { Link } from "react-router-dom";
import { constants } from "../../../../constants";
import { GiCarDoor, GiGasPump, GiGearStick, GiCarSeat } from "react-icons/gi";
import { Button } from "react-bootstrap";
import "./vehicle-card.scss";

const { routes } = constants;

const API_URL = import.meta.env.VITE_APP_API_URL;

const VehicleCard = (props) => {
    return (
        <Link to={`${routes.vehicles}/${props.id}`}>
            <div className="vehicle-card">
                <div className="image">
                    <img
                        src={`${API_URL}/files/display/${props.image}`}
                        alt=""
                    />
                </div>
                <h4>{props.model}</h4>
                <div className="details">
                    <div>
                        <GiGearStick /> {props.transmission}
                    </div>
                    <div>
                        <GiGasPump /> {props.fuelType}
                    </div>
                    <div>
                        <GiCarDoor /> {props.doors} doors
                    </div>
                    <div>
                        <GiCarSeat /> {props.seats} seats
                    </div>
                </div>
                <Button>Rent Now</Button>
            </div>
        </Link>
    );
};

export default VehicleCard;
