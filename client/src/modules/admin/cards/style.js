import styled from 'styled-components';
import { DarkGrey, LightShadow } from '../../../globalStyle';

export const Cards = styled.div`
    gap: 55px;
    display: flex;
    margin-top: 20px;

    .cards {
        &_container {
            width: 100%;
            max-width: 350px;

            &_card {
                display: flex;
                padding: 30px;
                cursor: pointer;
                align-items: center;
                border-radius: 10px;
                background: #FFFFFF;
                justify-content: space-between;

                &:hover {
                    box-shadow: ${LightShadow};
                }

                &_detail {
                    gap: 10px;
                    display: flex;
                    flex-direction: column;
                    
                    span:nth-child(1) {
                        font-size: 25px;
                        font-weight: 600;
                    }

                    span:nth-child(2) {
                        font-size: 20px;
                        font-weight: 600;
                        color: ${DarkGrey};
                    }
                }
            }
        }
    }
`