import styled from 'styled-components';
import { Mainbackground, PrimaryColor, } from '../../../globalStyle';

export const List = styled.div`
    gap: 15px;
    padding: 15px;
    display: flex;
    margin: 50px 0;
    background: #FFFFFF;
    border-radius: 10px;
    flex-direction: column;

    .table {
        tbody tr:nth-of-type(odd) {
            background: transparent;
        }

        &>:not(:first-child) {
            border-top: none;
        }

        td, th {
            border: none;
            padding: 10px 0px;
            background: transparent;
        }

        button: {
            border: none;
            color: #FFFFFF;
            padding: 5px 10px;
            border-radius: 10px;
            letter-spacing: 1px;
            background: ${PrimaryColor};
        }

        svg {
            color: #FFFFFF;
            margin: 0 10px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 50%;
        }

        .approved {
            width: 120px;
            display: flex;
            padding: 3px 0;
            align-items: center;
            border-radius: 15px;
            justify-content: center;
            background: rgba(255, 194, 194, 0.63);
        }
    }
`
export const AddNgo = styled.div`
    .addNgo {
        &_form {
            width: 100%;
            padding: 20px;
            margin: 50px 0;
            border-radius: 5px;
            background: #FFFFFF;

            @media screen and (max-width : 768px) { 
                max-width: 600px;
            }

            @media screen and (max-width : 520px) { 
                max-width: 300px;
            }

            &_fieldControl {
                gap: 50px;
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
`