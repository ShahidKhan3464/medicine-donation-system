import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import { Banner } from './style'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Header />
      <Banner>
        <div className="banner_backgroundImage">
          <div className='banner_backgroundImage_content'>
            <h3>Health is Wealth</h3>
            <p>"Our Mission is to provide Medicine to Needy one"</p>
            <Button onClick={() => navigate("/donor/donateMedicine")} >
              Donate Now
            </Button>
          </div>
        </div>
      </Banner>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage