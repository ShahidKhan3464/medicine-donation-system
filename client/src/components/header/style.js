import styled from 'styled-components';
import { Bgcolor, MainBorderColor, PrimaryColor, TextShadow } from '../../globalStyle';

export const Header = styled.header`
    .navbar {
        opacity: 0.9;
        background: ${Bgcolor};
        border-bottom: 2px solid ${MainBorderColor};

        .navbar-toggler {
            @media screen and (max-width : 991px) { 
                // padding: 3px 6px !important;
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