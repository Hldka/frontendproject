import { constants } from "../../../constants";
import { ImHome } from "react-icons/im";
import { BsCarFrontFill, BsInfoCircleFill, BsHeadphones } from "react-icons/bs";
import { MdPrivacyTip } from "react-icons/md";
import "./footer.scss";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { ContactInfo, QuickLink } from "../../";

const {
    routes: { about, contact, home, privacyPolicy, vehicles },
    website: { name, footer },
} = constants;

const quickLinks = [
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
    {
        direct: privacyPolicy,
        icon: <MdPrivacyTip />,
        text: "Privacy Policy",
    },
];

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer>
            <Container>
                <Row className="text-primary g-5">
                    <Col lg={6} xl={3}>
                        <Link to={home}>
                            <div className="logo">
                                <img src="/logo.png" alt={name} />
                                <div className="logo_text">
                                    PICK & <br /> <span>DRIVE</span>
                                    <p>
                                        YOUR RELIABLE RIDE, AS LONG AS YOU NEED
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={6} xl={3}>
                        <h2>Quick Links</h2>
                        <ul>
                            {quickLinks.map((quickLink) => (
                                <QuickLink
                                    key={quickLink.text}
                                    pathname={pathname}
                                    {...quickLink}
                                />
                            ))}
                        </ul>
                    </Col>
                    <Col lg={6} xl={3}>
                        <h2>Working Hours</h2>
                        <ul>
                            <li>Mon-Fri: 09:00 AM — 09:00 PM</li>
                            <li>Saturday: 09:00 AM — 07:00 PM</li>
                            <li>Sunday: 09:00 AM — 05:00 PM</li>
                        </ul>
                    </Col>
                    <Col lg={6} xl={3}>
                        <h2>Contact Us</h2>
                        <ContactInfo />
                    </Col>
                </Row>
                <Row>
                    <p className="footer_text">{footer}</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;