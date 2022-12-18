import styled from 'styled-components';
import heroSlider1 from '../../images/heroSlider1.jpg'
import heroSlider2 from '../../images/heroSlider2.jpg'
import { Bgcolor, Black, LightShadow, MainBorderColor, PrimaryColor, TextShadow } from '../../globalStyle';

export const Header = styled.header`
    .navbar {
        opacity: 0.9;
        background: ${Bgcolor};
        border-bottom: 2px solid ${MainBorderColor};

        .navbar-toggler {
            @media screen and (max-width : 991px) { 
                background: #FFFFFF !important;
                border: none !important;    
                outline: none !important;    

                span {
                    width: 1em !important;
                    height: 1em !important;
                }
            }
        }

        a {
            color: #FFFFFF;
            letter-spacing: 1px;
            text-decoration: none;
        }

        .logo {
            gap: 10px;
            display: flex;
            align-items: center;

            img {
                width: 80px;
                object-fit: cover;
                filter: invert(5%);

                @media screen and (max-width : 991px) { 
                    display: none;
                }
            }

            span {
                font-size: 25px;
                font-weight: 600;
                color: ${PrimaryColor};
                text-shadow: ${TextShadow};

                @media screen and (max-width : 1024px) { 
                    font-size: 22px;
                }

                @media screen and (max-width : 520px) { 
                    font-size: 18px;
                }
            }
        }

        .navbar-nav {
            gap: 60px;
            margin: auto;

            @media screen and (max-width : 1024px) {
                gap: 40px;
            }

            @media screen and (max-width : 991px) {
                gap: 25px;
                margin-top: 30px;
                margin-bottom: 30px;
            }

        }


        .links {
            gap: 30px;
            display: flex;
            align-items: center;
            @media screen and (max-width : 1024px) { 
                gap: 20px;
            }

            @media screen and (max-width : 991px) { 
                margin-bottom: 20px;
            }
            
            a {
                width: 90px;
                height: 40px;
                display: flex;
                font-weight: 500;
                border-radius: 4px;
                align-items: center;
                justify-content: center;
                background: ${PrimaryColor};

                &:hover {
                    color: #FFFFFF;
                }
            }
        }

        .navbar .active, a:hover {
            color: ${PrimaryColor};
        }
    }
`
export const Hero = styled.div`
    color: #FFFFFF;

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
        background-image: url(${heroSlider1});

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
        background-image: url(${heroSlider2});

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
export const WhyDonate = styled.div`
    padding: 50px 0;
    
    @media screen and (max-width : 520px) { 
        padding: 30px 0;
    }

    .whyDonate_heading {
        text-align: center;
        margin-bottom: 50px;

        @media screen and (max-width : 520px) { 
            margin-bottom: 30px;
        }

        p {
            font-size: 18px;
            color: #222222d1;
            
            @media screen and (max-width : 520px) { 
                font-size: 14px;
            }
        }
    }

    .card {
        min-height: 384px;
        border-radius: 10px;
        box-shadow: ${LightShadow};

        @media screen and (max-width : 991px) { 
            margin-bottom: 20px;
        }

        @media screen and (max-width : 520px) { 
            min-height: 360px;
        }

        img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .card-body {
            padding: 40px 20px;
            text-align: center;
            
            @media screen and (max-width : 520px) { 
                padding: 25px 10px;
            }

            .card-title {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
                letter-spacing: 1px;
                color: ${Black};
            }
        }
    }
`
export const Work = styled.div`
    padding: 50px 0;
    padding-bottom: 500px;
    
    @media screen and (max-width : 520px) { 
        padding: 30px 0;
        padding-bottom: 450px;
    }

    .work_heading {
        text-align: center;
        margin-bottom: 25px;
    }

    .card {
        border-radius: 10px;
        @media screen and (max-width : 991px) { 
            margin-bottom: 20px;
        }

        img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .card-body {
            padding: 40px 20px;
            text-align: center;

            .card-title {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
                letter-spacing: 1px;
                color: ${Black};
            }
        }

        img {
            filter: invert(2%);
        }
    }
`