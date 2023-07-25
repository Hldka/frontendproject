import { useEffect, useState } from "react";
import { services } from "../../../../../services";
import { useParams } from "react-router-dom";
import {
    Loading,
    PageHeader,
    Spacer,
    UserReservationDetailsAccordion,
    UserReservationDetailsPanel,
} from "../../../../../components";
import { Col, Container, Row } from "react-bootstrap";

const UserReservationDetailsPage = () => {
    const [loading, setLoading] = useState(true);
    const [reservation, setReservation] = useState({});
    const { reservationId } = useParams();

    const loadData = async () => {
        try {
            const data = await services.reservation.getReservationById(
                reservationId
            );
            setReservation(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <PageHeader title="Reservation Details" />
            <Spacer />
            <Container>
                {loading ? (
                    <Loading height={500} />
                ) : (
                    <Row>
                        <Col md={6} className="d-flex flex-column">
                            <UserReservationDetailsPanel {...reservation} />
                        </Col>
                        <Col md={6}>
                            <UserReservationDetailsAccordion {...reservation} />
                        </Col>
                    </Row>
                )}
            </Container>
            <Spacer />
        </>
    );
};

export default UserReservationDetailsPage;
