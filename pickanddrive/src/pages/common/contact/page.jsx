import { Col, Container, Row } from "react-bootstrap";
import {
    ContactForm,
    ContactInfo,
    ContactMap,
    PageHeader,
    Spacer,
} from "../../../components";
import { constants } from "../../../constants";
import "./style.scss";

const { website } = constants;

const ContactPage = () => {
    return (
        <>
            <PageHeader title={website.contact.title} />
            <Spacer />
            <Container>
                <Row>
                    <Col md={6} className="contact-info-container">
                        <p >{website.contact.desc}</p>
                        <Spacer />
                        <ContactInfo />
                    </Col>
                    <Col md={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
            <Spacer />
            <ContactMap />
        </>
    );
};

export default ContactPage;
