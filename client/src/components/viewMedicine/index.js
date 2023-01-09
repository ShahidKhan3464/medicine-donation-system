import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const index = ({ open, setOpen, images }) => {
    console.log(images)
    // const file = images.map(img => URL.createObjectURL(img))
    // console.log(file, 'file')

    return (
        <Modal show={open} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {/* Medicine Details */}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={true}
                // navigation={width > 768 ? true : false}
                >
                    <SwiperSlide>
                        {images.map(({ id, filePath }) => {
                            return (
                                <div className="slider-image1">
                                    {console.log(filePath)}
                                    <img src={filePath} alt="medicine" />
                                </div>
                            )
                        })}
                    </SwiperSlide>
                </Swiper>
            </Modal.Body>
        </Modal>
    )
}

export default index