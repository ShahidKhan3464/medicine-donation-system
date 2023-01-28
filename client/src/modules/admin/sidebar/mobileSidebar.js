import React from 'react';
import { links } from "../sidebarData";
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Sidebar } from './style';

const Index = ({ show, setShow }) => {
    const navigate = useNavigate()
    const location = window.location.pathname.split("/")[2]

    const handleSignOut = () => {
        localStorage.clear()
        window.location.href = "/";
    }

    return (
        <Sidebar>
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <div className="sidebar_logo">
                        <span>
                            Medicine<span> Donation</span>
                        </span>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="sidebar_menu">
                        {links.map((link, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => navigate(link.pathname)}
                                    className={location === link.name ? "sidebar_menu_item active-item" : "sidebar_menu_item"}
                                >
                                    <link.icon />
                                    <span>{link.name}</span>
                                </div>
                            );
                        })}

                        <div className="sidebar_menu_item">
                            <FaSignOutAlt onClick={handleSignOut} />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Sidebar>
    )
}

export default Index;