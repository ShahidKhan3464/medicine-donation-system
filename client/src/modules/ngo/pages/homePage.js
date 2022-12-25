import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from '../../../components/footer';
import { Navigation } from "swiper";
import NgoLinks from './ngoLinks';
import { Hero } from './style';

const Index = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    });

    return (
        <React.Fragment>
            <NgoLinks />
            <Hero>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={width > 768 ? true : false}
                >
                    <SwiperSlide>
                        <div className="slider-image1">
                            <h6>Be the reason for someone smile today!</h6>
                            <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-image2">
                            <h6>We Rise by lifting others!</h6>
                            <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Hero>
            <Footer />
        </React.Fragment>
    )
}

export default Index