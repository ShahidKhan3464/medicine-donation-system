import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='banner'>
            <div className="banner-background">
                <div className='banner-text'>
                    <h3>Health is Wealth</h3>
                    <p>"Our Mission is to provide Medicine to Needy one"</p>
                    <Button variant="warning" onClick={() => navigate("/donateMedicine")} >
                        Donate Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Banner