import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { utils } from "../../../utils";
import { logout } from "../../../store";
import { services } from "../../../services";
import { constants } from "../../../constants";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
    MdBookOnline,
    MdOutlineDashboard,
    MdOutlineLogout,
    MdOutlineSpeakerNotes,
    MdWeb,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiMechanicGarage } from "react-icons/gi";
import "./sidebar.scss";

const { routes } = constants;

const navigationItems = [
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        pathname: `${routes.adminDashboard}`,
    },
    {
        title: "Users",
        icon: <FaUsers />,
        pathname: `${routes.adminUsers}`,
    },
    {
        title: "Vehicles",
        icon: <GiMechanicGarage />,
        pathname: `${routes.adminVehicles}`,
    },
    {
        title: "Reservations",
        icon: <MdBookOnline />,
        pathname: `${routes.adminReservations}`,
    },
    {
        title: "Contact Messages",
        icon: <MdOutlineSpeakerNotes />,
        pathname: `${routes.adminContactMessages}`,
    },
];

const Sidebar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        utils.functions
            .swalQuestion("Logout", "Are you sure you want to logout?")
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(logout());
                    services.encryptedLocalStorage.removeItem(
                        "pickanddrivetoken"
                    );
                    navigate(`${routes.home}`);
                }
            });
    };

    return (
        <Navbar expand="lg" className="admin-sidebar">
            <Container>
                <Navbar.Brand>
                    <Link to={routes.home}>
                        <div className="logo">
                            <img src="/logo.png" alt={name} />
                            <div className="logo_text">
                                PICK & <br /> <span>DRIVE</span>
                                <p>YOUR RELIABLE RIDE, AS LONG AS YOU NEED</p>
                            </div>
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="admin-panel" />
                <Navbar.Collapse id="admin-panel">
                    <Nav className="mt-5">
                        {navigationItems.map((item) => (
                            <Nav.Link
                                key={item.title}
                                as={Link}
                                to={item.pathname}
                                active={
                                    item.title === "Dashboard"
                                        ? pathname === item.pathname
                                        : pathname.startsWith(item.pathname)
                                }>
                                {item.icon} {item.title}
                            </Nav.Link>
                        ))}
                        <Nav.Link as={Link} to={routes.home}>
                            <MdWeb /> Back To Website
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout}>
                            <MdOutlineLogout /> Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Sidebar;
