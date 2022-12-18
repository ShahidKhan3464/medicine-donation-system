import styled from 'styled-components';
import { Bgcolor, DarkGrey, MainBorderColor } from '../../globalStyle';

export const Footer = styled.footer`
    bottom: 0;
    width: 100%;
    height: 400px;
    position: absolute;
    color: ${DarkGrey};
    border-top: 2px solid ${MainBorderColor};

    .footer {
        &_upper {
            font-size: 14px;
            padding: 70px 0;
            background: ${Bgcolor};

            @media screen and (max-width : 520px) { 
                padding: 40px 0;
            }

            h6 {
                font-size: 14px;
                padding-bottom: 10px;
                display: inline-block;
                text-transform: uppercase;
                border-bottom: 1px solid ${MainBorderColor};
            }
    
            ul {
                gap: 20px;
                padding: 0;
                display: flex;
                margin-top: 30px;
                list-style: none;
                flex-direction: column;

                @media screen and (max-width : 520px) { 
                    margin-top: 20px;
                }

                a {
                    color: ${DarkGrey};
                    text-decoration: none;
                }      
            }

            .last-col {
                @media screen and (max-width : 991px) { 
                    margin-top: 30px;
                }

                .address {
                    gap: 10px;
                    display: flex;
                    margin-top: 30px;
                    flex-direction: column;
                }
            }
        }

        &_lower {
            width: 100%;
            height: 60px;
            background-color: #1E1E1E;

            @media screen and (max-width : 520px) { 
                height: 50px;
            }

            p {
                margin: 0;
                line-height: 60px;
                text-align: center;
                letter-spacing: 1px;

                @media screen and (max-width : 520px) { 
                    font-size: 8px;
                    line-height: 50px;
                }
            }
        }
    }
`