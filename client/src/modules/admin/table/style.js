import styled from 'styled-components';
import { PrimaryColor } from '../../../globalStyle';

export const List = styled.div`
    gap: 15px;
    width: 96%;
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
    }
`