import { useEffect, useState } from "react";
import { constants } from "../../../constants";
import { services } from "../../../services";
import { IoIosPeople } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { MdOutlineBookOnline } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { AdminCarousel, DashboardCard, Loading } from "../../../components";

const { routes } = constants;

const AdminDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [members, setMembers] = useState([]);

    const loadData = async (page) => {
        try {
            const userData = await services.user.getUsersByPage(page);
            const vehiclesData = await services.vehicle.getVehiclesByPage(
                page,
                20
            );
            const reservationsData =
                await services.reservation.getReservationsByPage(page);
            setMembers(userData?.totalElements);
            console.log(vehiclesData);
            setVehicles(vehiclesData);
            setReservations(reservationsData?.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const dashboardItems = [
        {
            title: "Members",
            icon: <IoIosPeople />,
            path: routes.adminUsers,
            statistics: members,
        },
        {
            title: "Vehicles",
            icon: <FaCar />,
            path: routes.adminVehicles,
            statistics: vehicles?.totalElements,
        },
        {
            title: "Reservations",
            icon: <MdOutlineBookOnline />,
            path: routes.adminReservations,
            statistics: reservations,
        },
    ];

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container className="admin-dashboard">
            {loading ? (
                <Loading height={500} />
            ) : (
                <>
                    <Row xxl={3} className="gy-3">
                        {dashboardItems.map((item, index) => (
                            <Col key={index}>
                                <DashboardCard {...item} />
                            </Col>
                        ))}
                    </Row>
                    <AdminCarousel loading={loading} vehicles={vehicles} />
                </>
            )}
        </Container>
    );
};

export default AdminDashboard;
