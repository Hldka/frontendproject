import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./dashboard-card.scss";

const DashboardCard = (props) => {
    return (
        <Link to={props.path}>
            <div className="dashboard-card" title={props.title}>
                <div className="icon">{props.icon}</div>
                <div className="content">
                    <div className="title">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="item">
                        {props.statistics ? (
                            <p>{props.statistics}</p>
                        ) : (
                            <Spinner animation="border" size="sm" />
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DashboardCard;
