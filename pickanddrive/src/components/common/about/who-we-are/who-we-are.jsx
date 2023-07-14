import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../../constants";
import "./who-we-are.scss";

const {
    website: { about },
} = constants;

const WhoWeAre = () => {
    return (
        <Container className="who-we-are">
            <Row>
                <Col lg={3}>
                    <div className="img-col">
                        <img src="/img/about_1.jpg" alt="Who We Are" />
                        <div className="border-left"></div>
                        <div className="border-top"></div>
                    </div>
                </Col>
                <Col lg={9} className="who-we-are-content">
                    <div className="who-we-are-info">
                        <h2>{about.title}</h2>
                        <p>{about.desc[0]}</p>
                    </div>
                </Col>
                {/* ------- */}
                <Col lg={9} className="who-we-are-content">
                    <p>{about.desc[1]}</p>
                </Col>
                <Col lg={3}>
                    <div className="img-col">
                        <img
                            src="/img/about_2.jpg"
                            alt="Who We Are"
                            className="right"
                        />
                        <div className="border-right"></div>
                        <div className="border-bottom"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhoWeAre;
