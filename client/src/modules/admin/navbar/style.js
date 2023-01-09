import styled from 'styled-components';
import { LightShadow, Mainbackground } from '../../../globalStyle';

export const Navbar = styled.nav`
    height: 70px;
    display: flex;
    padding: 0 30px;
    align-items: center;
    background: #FFFFFF;
    box-shadow: ${LightShadow};
    border-radius: 10px 0 0 10px;
    justify-content: space-between;
    @media screen and (max-width : 1200px) { 
        border-radius: 0px;
    }

    @media screen and (max-width : 520px) { 
        padding: 0 15px;
    }

    .navbar {
        &_right {
            @media screen and (max-width : 1200px) { 
                width: 60%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &_bar-icon {
                    button {
                        border: none;
                        outline: none;
                        font-size: 25px;
                        background: transparent;
                    }
                }
            }
            &_input-field {
                position: relative;
                @media screen and (max-width : 1024px) { 
                    display: none;
                }
                input {
                    border: none;
                    outline: none;
                    padding: 10px;
                    border-radius: 10px;
                    letter-spacing: 1px;
                    background: ${Mainbackground};
                }

                svg {
                    top: 11px;
                    right: 15px;
                    font-size: 20px;
                    cursor: pointer;
                    position: absolute;
                }
            }
        }

        &_left {
            &_icons {
                gap: 20px;
                display: flex;
                align-items: center;

                svg {
                    cursor: pointer;
                    font-size: 25px;
                    @media screen and (max-width : 520px) { 
                        font-size: 20px;
                    }
                }
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: contain;
                    @media screen and (max-width : 1024px) { 
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
`