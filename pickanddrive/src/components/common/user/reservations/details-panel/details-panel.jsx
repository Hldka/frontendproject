import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_API_URL;

const UserReservationDetailsPanel = (props) => {
    const navigate = useNavigate();

    // TODO: Add a loading state while image is being loaded

    return (
        <>
            <h2>{props.car?.model}</h2>
            <img
                src={`${API_URL}/files/display/${props.car?.image}`}
                alt={props.car?.model}
                title={props.car?.model}
                className="img-fluid"
            />
            <Button onClick={() => navigate(-1)}>Back To Reservations</Button>
        </>
    );
};

export default UserReservationDetailsPanel;
