import {
    Link,
    Navigate,
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../../constants";
import { GiCancel, GiHomeGarage } from "react-icons/gi";
import { useSelector } from "react-redux";
import "./style.scss";
import { useEffect } from "react";

const { routes, website } = constants;

const AuthLayout = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (Object.keys(user).length > 0) return <Navigate to={routes.home} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <Container fluid className="auth-layout">
            <Row>
                <Col lg={6} className="banner">
                    <img
                        src="/logo.png"
                        alt={website.name}
                        title={website.name}
                    />
                    <div className="toolbar">
                        <GiCancel
                            title="Go Back"
                            onClick={() => navigate(-1)}
                        />
                        <GiHomeGarage
                            title="Go Home Page"
                            onClick={() => navigate(routes.home)}
                        />
                    </div>
                </Col>
                <Link to={routes.home} className="logo">
                    <img
                        src="/logo.png"
                        alt={website.name}
                        title={website.name}
                    />
                    <div className="logo_text">
                        PICK & <br /> <span>DRIVE</span>
                        <p>YOUR RELIABLE RIDE, AS LONG AS YOU NEED</p>
                    </div>
                </Link>
                <Col lg={6} className="forms">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default AuthLayout;
