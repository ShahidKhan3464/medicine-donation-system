import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {

    return (
        <div className='carousel-ngo'>
            <Carousel>
                <Carousel.Item>
                    <img src={require('../../..//images/smile.jpg')} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Be the reason for someone smile today!</h3>
                        <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../../..//images/lift.jpg')} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>We Rise by lifting others!</h3>
                        <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner