import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { constants } from "../../../constants";
import "./slider.scss";

const { slider } = constants;

const Slider = () => {
    return (
        <Swiper
            effect="fade"
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            className="slider">
            {slider.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="content">
                        <h2>{slide.title}</h2>
                        <p>{slide.subtitle}</p>
                    </div>
                    <img
                        src={`/img/${slide.image}`}
                        alt={slide.title}
                        title={slide.title}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
