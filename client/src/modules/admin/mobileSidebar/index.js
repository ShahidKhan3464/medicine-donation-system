import React from 'react';
import { links } from "../sidebarData";
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Index = ({ show, setShow }) => {
    const navigate = useNavigate()
    const location = window.location.pathname.split("/")[2]

    const handleSignOut = () => {
        localStorage.clear()
        window.location.href = "/";
    }

    return (
        <React.Fragment>
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <div>
                        Medicine<span> Donation</span>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="sidebar-menu">
                        {links.map((link, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => navigate(link.pathname)}
                                    className={location === link.name ? "active-item" : "sidebar-menu-item"}
                                >
                                    <link.icon />
                                    <span>{link.name}</span>
                                </div>
                            );
                        })}

                        <div className="sidebar-menu-item">
                            <FaSignOutAlt onClick={handleSignOut} />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}

export default Index;