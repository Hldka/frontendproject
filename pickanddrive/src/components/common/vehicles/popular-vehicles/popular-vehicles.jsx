import { Container, Row } from "react-bootstrap";
import { SectionHeader, Spacer, VehicleCard } from "../../../";
import { useEffect, useState } from "react";

const PopularVehicles = () => {
    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState([]);

    const loadData = async () => {
        try {
            // const vehicleData = await axios.
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
                    <VehicleCard />
                </Row>
            </Container>
        </div>
    );
};

export default PopularVehicles;
