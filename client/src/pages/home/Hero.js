import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Hero } from './style';

const Index = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    });

    return (
        <Hero>
            <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation={width > 768 ? true : false}
            >
                <SwiperSlide>
                    <div className="slider-image1">
                        <h6>Give a <span> helping hand </span> to those who need it!</h6>
                        <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-image2">
                        <h6>The measure of life is not its duration, but its <span> donation </span>!</h6>
                        <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Hero >
    )
}

export default Index