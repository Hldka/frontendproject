import { Col, Container, Row } from "react-bootstrap";
import { Loading, SectionHeader, Spacer, VehicleCard } from "../../../";
import { useEffect, useState } from "react";
import { services } from "../../../../services";
import "./popular-vehicles.scss";

const PopularVehicles = () => {
    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState([]);

    const loadData = async () => {
        try {
            const vehicleData = await services.vehicle.getVehiclesByPage();
            const { content } = vehicleData;
            setVehicles(content);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="popular-vehicles">
            <SectionHeader
                title1="Popular"
                title2="Cars"
                desc="To contribute to positive change and achieve our sustainability goals with many extraordinary"
            />
            <Spacer />
            <Container>
                <Row className="gy-5">
                    {loading ? (
                        <Loading />
                    ) : (
                        vehicles &&
                        vehicles.map((vehicle, index) => (
                            <Col md={6} lg={4} key={vehicle?.id || index}>
                                <VehicleCard {...vehicle} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default PopularVehicles;
