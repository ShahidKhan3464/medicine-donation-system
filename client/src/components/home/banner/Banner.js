import Carousel from 'react-bootstrap/Carousel';
import './style.css'

const Banner = () => {

    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <img src={require('../../..//images/heroSlider1.jpg')} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Give a <span> helping hand </span> to those who need it!</h3>
                        <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../../..//images/heroSlider2.jpg')} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>The measure of life is not its duration, but its <span> donation </span>!</h3>
                        <p>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner