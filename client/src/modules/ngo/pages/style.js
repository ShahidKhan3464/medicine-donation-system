import styled from 'styled-components';
import lift from '../../../images/lift.jpg';
import { Black } from '../../../globalStyle';
import smile from '../../../images/smile.jpg';

export const Hero = styled.div`
    color: #FFFFFF;
    padding-bottom: 400px;

    h6 {
        font-size: 38px;
        line-height: 50px;
        text-transform: uppercase;

        @media screen and (max-width : 1024px) {
            font-size: 35px;
        }

        @media screen and (max-width : 520px) {
            font-size: 20px;
            line-height: 35px;
        }

        span {
            color: ${Black};
        }
    }

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 30px;
        font-style: italic;
        letter-spacing: 1px;

        @media screen and (max-width : 520px) { 
            font-size: 14px;
            line-height: 25px;
        }
    }

    .slider-image1 {
        display: flex;
        min-height: 600px;
        text-align: center;
        align-items: center;
        flex-direction: column;
        background-size: cover;
        justify-content: center;
        background-position: center;
        background-image: url(${smile});

        @media screen and (max-width : 768px) { 
            min-height: 500px;
        }

        @media screen and (max-width : 520px) { 
            min-height: 350px;
        }
    }

    .slider-image2 {
        display: flex;
        min-height: 600px;
        text-align: center;
        align-items: center;
        flex-direction: column;
        background-size: cover;
        justify-content: center;
        background-position: center;
        background-image: url(${lift});

        @media screen and (max-width : 768px) { 
            min-height: 500px;
        }
        
        @media screen and (max-width : 520px) { 
            min-height: 350px;
        }
    }

    .swiper-button-prev, .swiper-button-next {
        color: #FFFFFF;
    }

    .swiper-button-prev::after, .swiper-button-next::after {
        font-size: 35px;
    }
`
export const Donations = styled.section`
    padding: 100px 0;
    padding-bottom: 500px;

    @media screen and (max-width : 520px) { 
        padding: 50px 0;
        padding-bottom: 450px;
    }

    .donations {
        &_heading {
            text-align: center;
            margin-bottom: 25px;
        }
    }
`
export const Profile = styled.section`
    padding: 100px 0;
    padding-bottom: 500px;

    @media screen and (max-width : 520px) { 
        padding: 50px 0;
        padding-bottom: 450px;
    }

    .profile {
        &_heading {
            text-align: center;
            margin-bottom: 25px;
        }
    }
`