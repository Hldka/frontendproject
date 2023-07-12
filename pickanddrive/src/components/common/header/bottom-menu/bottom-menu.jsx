import { Container, Nav, Navbar } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import { BsCarFrontFill, BsInfoCircleFill, BsHeadphones } from "react-icons/bs";
import { constants } from "../../../../constants";
import { Link, useLocation } from "react-router-dom";
import { UserMenu } from "../../../";
import "./bottom-menu.scss";

const {
    routes: { about, contact, home, vehicles },
} = constants;

const navigationLinks = [
    {
        direct: home,
        icon: <ImHome />,
        text: "Home",
    },
    {
        direct: vehicles,
        icon: <BsCarFrontFill />,
        text: "Vehicles",
    },
    {
        direct: about,
        icon: <BsInfoCircleFill />,
        text: "About Us",
    },
    {
        direct: contact,
        icon: <BsHeadphones />,
        text: "Contact Us",
    },
];

const BottomMenu = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <div className="bottom-menu">
            <Navbar expand="lg">
                <Container className="p-0">
                    <Navbar.Toggle aria-controls="toggle" />
                    <Navbar.Collapse id="toggle">
                        <Nav className="me-auto">
                            {navigationLinks.map((navigationLink) => (
                                <Nav.Link
                                    key={navigationLink.text}
                                    as={Link}
                                    to={navigationLink.direct}
                                    active={pathname === navigationLink.direct}>
                                    {navigationLink.icon} {navigationLink.text}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <UserMenu />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default BottomMenu;