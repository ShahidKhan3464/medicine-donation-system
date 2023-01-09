import styled from 'styled-components';
import { Pink, PrimaryColor, DarkGrey } from '../../../globalStyle';

export const Sidebar = styled.aside`
    height: 100vh;
    display: flex;
    grid-row-end: 3;
    grid-row-start: 1;
    padding-top: 3rem;
    position: relative;
    background: ${Pink};
    flex-direction: column;
    transition: all 300ms ease;
    @media screen and (max-width : 1200px) { 
        display: none;
    }

    .sidebar {
        &_logo {
            gap: 15px;
            height: 50px;
            display: flex;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 1px;
            align-items: center;
            justify-content: center;

            img {
                width: 50px;
                height: 45px;
                object-fit: cover;
                border-radius: 50%;
            }

            >span>span {
                color: ${PrimaryColor};
            }
        }

        &_menu {
            gap: 30px;
            display: flex;
            margin-top: 50px;
            margin-left: 32px;
            flex-direction: column;

            &_item {
                gap: 15px;
                height: 40px;
                display: flex;
                cursor: pointer;
                position: relative;
                align-items: center;
                border-radius: 10px;
                transition: all 300ms ease;

                svg {
                    font-size: 22px;
                }

                span {
                    font-size: 18px;
                    text-transform: capitalize;
                }
            }

            .active-item {
                margin-left: 0;
                background: ${DarkGrey};

                &:before {
                    width: 7px;
                    content: "";
                    height: 100%;
                    background: ${PrimaryColor};
                    margin-right: calc(15px - 7px);
                }
            }
        }
    }
`