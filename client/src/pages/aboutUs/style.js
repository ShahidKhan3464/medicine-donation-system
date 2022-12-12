import styled from 'styled-components';
import { HeadingColor, LightShadow } from '../../globalStyle';

export const About = styled.section`
    padding: 50px 0;
    padding-bottom: 500px;
    
    @media screen and (max-width : 520px) { 
        padding: 30px 0;
        padding-bottom: 450px;
    }

    .about {
        &_heading {
            text-align: center;
            margin-bottom: 25px;
        }

        &_container {
            padding: 40px;
            min-height: 400px;
            text-align: center;
            border-radius: 10px;
            background: #FFFFFF;
            box-shadow: ${LightShadow};

            @media screen and (max-width : 991px) { 
                margin-bottom: 20px;
            }

            @media screen and (max-width : 520px) { 
                padding: 15px;
            }
                    

            h3 {
                margin: 25px 0;
                font-size: 22px;
                font-weight: 600;
                letter-spacing: 1px;
                color: ${HeadingColor};
            }
        }
    }
`