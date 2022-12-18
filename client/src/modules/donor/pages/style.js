import styled from "styled-components";
import donor from '../../../images/donor.webp'
import { Black, LightShadow, Mainbackground, PrimaryColor, TextShadow } from "../../../globalStyle";

export const Banner = styled.div`
    padding-bottom: 400px;
    
    .banner_backgroundImage {
        width: 100%;
        opacity: 0.9;
        height: 500px;
        display: flex;
        color: #FFFFFF;
        text-align: center;
        align-items: center;
        justify-content: center;
        background: url(${donor}) no-repeat center center/cover;

        @media screen and (max-width : 520px) { 
            height: 300px;
        }

        &_content {
            h3 {
                font-size: 40px;
                line-height: 50px;
                text-transform: uppercase;
                text-shadow: ${TextShadow};

                @media screen and (max-width : 520px) { 
                    font-size: 25px;
                    line-height: 35px;
                }
            }

            p {
                font-size: 18px;
                font-weight: 600;
                line-height: 30px;
                font-style: italic;
                letter-spacing: 1px;
                text-shadow: ${TextShadow};

                
                @media screen and (max-width : 520px) { 
                    font-size: 10px;
                    line-height: 20px;
                }
            }

            button {
                border: none;
                margin: 5px 0;
                font-weight: 600;
                padding: 10px 20px;
                letter-spacing: 1px;
                color: ${Black};
                background: ${PrimaryColor};
                
                @media screen and (max-width : 520px) { 
                    font-size: 12px;
                    padding: 10px 12px;
                }
            }
        }
    }
`

export const DonateMedicine = styled.section`
    padding: 100px 0;
    padding-bottom: 500px;
    
    @media screen and (max-width : 520px) { 
        padding: 50px 0;
        padding-bottom: 450px;
    }

    .donateMedicine {
        &_search-field {
            width: 100%;
            margin: 0 auto;
            max-width: 480px;
            border-radius: 5px;
            position: relative;
            padding: 15px 30px;
            margin-bottom: 80px;
            background: #FFFFFF;
            box-shadow: ${LightShadow};
            text-transform: capitalize;
            
            @media screen and (max-width : 520px) { 
                max-width: 300px;
                margin-bottom: 60px;
            }

            label {
                font-weight: 600;
                margin-bottom: 12px;
                letter-spacing: 1px;
                color: ${Black};
                
                @media screen and (max-width : 520px) { 
                    font-size: 14px;
                }
            }
            
            input {
                width: 100%;
                border: none;
                font-size: 16px;
                padding: 10px 16px;
                margin-bottom: 8px;
                border-radius: 5px 0 0 5px;
                background: ${Mainbackground};

                &:focus {
                    outline: none;
                }
                @media screen and (max-width : 520px) { 
                    padding: 10px;
                    font-size: 14px;
                }
            }
            
            button {
                right: 6%;
                border: none;
                position: absolute;
                padding: 10px 20px;
                border-radius: 0 5px 5px 0;
                background-color: ${PrimaryColor};
                        
                @media screen and (max-width : 520px) { 
                    padding: 8px 15px;
                }
            }
        }
    }
`

export const DonateForm = styled.section`
    padding: 100px 0;
    padding-bottom: 500px;

    @media screen and (max-width : 520px) { 
        padding: 50px 0;
        padding-bottom: 450px;
    }

    .donateForm {
        &_heading {
            text-align: center;
            margin-bottom: 25px;
        }

        &_form {
            width: 100%;
            margin: 0 auto;
            max-width: 950px;
            border-radius: 5px;
            background: #FFFFFF;

            @media screen and (max-width : 768px) { 
                max-width: 600px;
            }

            @media screen and (max-width : 520px) { 
                max-width: 300px;
            }

            &_detail {
                padding: 32px;
                @media screen and (max-width : 520px) { 
                    padding: 16px;
                }

                &_donor, &_medicine {
                    h5 {
                        font-weight: 600;
                        letter-spacing: 1px;
                        margin-bottom: 20px;
                        color: ${Black};
                        text-transform: capitalize;
                    }

                    &_fieldControl {
                        gap: 30px;
                        display: flex;
                        align-items: center;

                        @media screen and (max-width : 520px) { 
                            gap: 0px;
                            flex-wrap: wrap;
                        }

                        .form-group {
                            width: 100%;
                            margin-bottom: 10px;

                            label {
                                font-size: 16px;
                                font-weight: 500;
                                letter-spacing: 1px;
                            }

                            .form-control {
                                padding: 10px;
                                margin-bottom: 15px;
                                letter-spacing: 1px;
                                background: ${Mainbackground};
                                background-image: none !important;
                                border-color: ${Mainbackground} !important;
                
                                &:focus {
                                    box-shadow: none !important;
                                    background: ${Mainbackground} !important;
                                }
                            }
                        }
                    }
                }
            }
        }
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