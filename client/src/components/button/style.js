import styled from 'styled-components';
import { PrimaryColor } from '../../globalStyle';

export const ButtonStyle = styled.button`
    gap: 10px;
    width: 200px;
    height: 45px;
    display: flex;
    margin: 20px 0;
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 1px;
    align-items: center;
    justify-content: center;
    border: none !important;
    outline: none !important;
    border-radius: 5px !important;
    background: ${PrimaryColor} !important;

    span {
        width: 1.5rem !important;
        height: 1.5rem !important;
    }
`