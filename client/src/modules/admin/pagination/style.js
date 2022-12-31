import styled from 'styled-components';
import { DarkGrey, PrimaryColor } from '../../../globalStyle';

export const Pagination = styled.div`
    .pagination_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .prev-btn, .next-btn {
            font-weight: 600;
            letter-spacing: 1px;
            background: transparent;
            border-color: transparent;
            text-transform: capitalize;
        }

        .page-btn {
            width: 32px;
            margin: 8px;
            height: 32px;
            border-radius: 5px;
            background: ${DarkGrey};
            border-color: transparent;
            transition: all 0.3s linear;
        }

        .active-btn {
            color: #FFFFFF;
            background: ${PrimaryColor};
        }
    }
`