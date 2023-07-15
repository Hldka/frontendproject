import { Col, Container, Row } from "react-bootstrap";
import { constants } from "../../../../constants";
import {
    GiCarKey,
    GiJeep,
    GiTimeSynchronization,
    GiRecycle,
} from "react-icons/gi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import "./what-we-do.scss";

const {
    whatWeDo: { desc, services, title },
} = constants;

const serviceIcons = [
    <GiCarKey key={0} />,
    <TbBuildingSkyscraper key={0} />,
    <GiTimeSynchronization key={0} />,
    <RiVipDiamondLine key={0} />,
    <GiRecycle key={0} />,
    <GiJeep key={0} />,
];

const WhatWeDo = () => {
    return (
        <Container fluid className="what-we-do">
            <Row>
                <Col xl={4}>
                    <img src="/img/what_we_do.jpg" alt="what we do" />
                </Col>
                <Col xl={8}>
                    <div>
                        <h2 className="mt-5">{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <Row className="props mb-5">
                        {services.map((service, index) => (
                            <Col sm={6} lg={4} key={service.id}>
                                {serviceIcons[index]}
                                <span>{service.title}</span>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WhatWeDo;