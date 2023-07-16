import { Col, Container, Row } from "react-bootstrap";
import { OfferItem, SectionHeader } from "../../../";
import { constants } from "../../../../constants";
import {
    GiModernCity,
    GiCircleForest,
    GiEcology,
    GiCarWheel,
} from "react-icons/gi";
import { MdFamilyRestroom, MdOutlineWorkspacePremium } from "react-icons/md";
import "./best-offers.scss";


const { offers } = constants;

const offerIcons = [
    <GiModernCity key={0} />,
    <GiCircleForest key={1} />,
    <MdOutlineWorkspacePremium key={2} />,
    <MdFamilyRestroom key={3} />,
    <GiEcology key={4} />,
    <GiCarWheel key={5} />,
];

const BestOffers = () => {
    
    return (
        <div className="best-offers">
            <SectionHeader title1="Get Our" title2="Best Offers" />
            <div className="offers">
                <Container>
                    <Row>
                        <Col lg={4}>
                            {offers.slice(0, 3).map((offer, index) => (
                                <OfferItem
                                    key={offer.title}
                                    icon={offerIcons[index]}
                                    {...offer}
                                />
                            ))}
                        </Col>
                        <Col lg={4}>
                            <img
                                src="/img/vertical_car.png"
                                alt="vertical car"
                                className="img-fluid"
                            />
                        </Col>
                        <Col lg={4}>
                            {offers.slice(3).map((offer, index) => (
                                <OfferItem
                                    key={offer.title}
                                    icon={offerIcons[index + 3]}
                                    {...offer}
                                />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BestOffers;
