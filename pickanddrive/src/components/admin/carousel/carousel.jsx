import { useState } from "react";
import { constants } from "../../../constants";
import { Carousel } from "react-bootstrap";
import { Loading } from "../../../components";
import { Link } from "react-router-dom";
import "./carousel.scss";

const { routes } = constants;

const API_URL = import.meta.env.VITE_APP_API_URL;

const AdminCarousel = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            className="admin-carousel"
            activeIndex={index}
            onSelect={handleSelect}>
            {props.loading ? (
                <Loading height={500} />
            ) : (
                props.vehicles?.content?.map((vehicle) => (
                    <Carousel.Item key={vehicle.id}>
                        <h2>{vehicle.model}</h2>
                        <div>
                            <Link to={`${routes.adminVehicles}/${vehicle.id}`}>
                                <img
                                    src={`${API_URL}/files/display/${vehicle.image[0]}`}
                                    alt={vehicle.model}
                                    title={vehicle.model}
                                    width={500}
                                />
                            </Link>
                        </div>
                    </Carousel.Item>
                ))
            )}
        </Carousel>
    );
};

export default AdminCarousel;
