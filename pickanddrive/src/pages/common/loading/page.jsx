import { constants } from "../../../constants";
import { Spinner } from "react-bootstrap";
import "./style.scss";

const { website } = constants;

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <Spinner animation="border" variant="primary" />
            <div className="logo">
                <img src="/logo.png" alt={website.name} />
                <div className="logo_text">
                    PICK & <br /> <span>DRIVE</span>
                    <p>YOUR RELIABLE RIDE, AS LONG AS YOU NEED</p>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
