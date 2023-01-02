import React from "react";
import { links } from "../sidebarData";
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from "../../..//images/logo.jpg";
import { Sidebar } from './style';

const Index = () => {
    const navigate = useNavigate()
    const location = window.location.pathname.split("/")[2]

    const handleSignOut = () => {
        localStorage.clear()
        window.location.href = "/";
    }

    return (
        <Sidebar>
            <div className="sidebar_logo">
                <img src={logo} alt="logo" />
                <span>
                    Medicine<span> Donation</span>
                </span>
            </div>

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
        </Sidebar>
    );
};

export default Index;