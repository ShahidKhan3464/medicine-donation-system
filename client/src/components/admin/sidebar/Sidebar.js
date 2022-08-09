import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SidebarData } from "../data/Data";
import { FaSignOutAlt } from 'react-icons/fa'
import Logo from "../../../assets/images/logo.jpg";
import "./style.css";

const Sidebar = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(0);

    const handleMenuItem = (index, pathname) => {
        setSelected(index);
        navigate(pathname)
    }

    const handleSignOut = () => {
        localStorage.clear()
        window.location.href = "/";
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="logo" />
                <span>
                    Medicine<span> Donation</span>
                </span>
            </div>

            <div className="sidebar-menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={selected === index ? "menuItem activeItem" : "menuItem"}
                            onClick={() => handleMenuItem(index, item.pathname)}
                        >
                            <item.icon style={{ fontSize: '1.4rem' }} />
                            <span>{item.heading}</span>
                        </div>
                    );
                })}

                <div className="menuItem">
                    <FaSignOutAlt onClick={handleSignOut} />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;