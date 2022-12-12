import styled from 'styled-components';

export const Pink = '#FF919D'
export const DarkGrey = '#afafaf'
export const PrimaryColor = '#5a9e0b'
export const HeadingColor = '#303030'
export const Mainbackground = '#f1f3f4'
export const Bgcolor = 'rgb(8 10 10 / 85%)'
export const TextShadow = '0 0 0.57rem #1d0505'
export const MainBorderColor = 'rgb(79, 79, 79)'
export const LightShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)'
export const DarkShadow = '0 2px 10px 2px rgba(0, 0, 0, 0.3)'

export const PrimaryHeading = styled.h6`
    font-size: 50px;
    color: ${HeadingColor};
    font-family: 'Lora', serif;
    
    @media screen and (max-width : 520px) { 
        font-size: 35px;
    }
`

export const Underline = styled.div`
    width: 10%;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 25px;
    background: ${Bgcolor};
    
    @media screen and (max-width : 520px) { 
        width: 30%;
        margin-bottom: 15px;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width : 991px) { 
        flex-wrap: wrap;
    }

    .formContainer {

        &_imgBox {
            width: 100%;
            // height: 400px;
            // max-width: 500px;
            height: ${props => props.height}px;
            max-width: ${props => props.maxWidth}px;

            @media screen and (max-width : 520px) { 
                height: 250px;
                max-width: 250px;
            }

            img {
                width: 100%;
                height: 100%;
                filter: invert(5%);
                object-fit: contain;
            }
        }

        &_form {
            width: 100%;
            padding: 20px;
            max-width: 500px;
            border-radius: 5px;
            background: #FFFFFF;
            box-shadow: ${LightShadow};

            @media screen and (max-width : 520px) { 
                max-width: 400px;
            }

            @media screen and (max-width : 375px) { 
                max-width: 350px;
            }

            @media screen and (max-width : 320px) { 
                max-width: 300px;
            }

            label {
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 1px;
            }

            .form-control, .form-select {
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

            p {
                font-size: 14px;
                letter-spacing: 1px;

                a {
                    margin-left: 5px;
                    letter-spacing: 1px;
                    display: inline-block;
                    font-weight: 600 !important;
                    color: ${PrimaryColor} !important;
                }
            }
        }
    }
`