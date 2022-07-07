import { useState } from "react";
import { Link } from 'react-router-dom'
import { SidebarData } from "../data/Data";
import { FaSignOutAlt } from 'react-icons/fa'
import Logo from "../../../assets/images/logo.jpg";
import "./style.css";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="sidebar">
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
                            className={selected === index ? "menuItem active" : "menuItem"}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon style={{ fontSize: '1.4rem' }} />
                            <span>{item.heading}</span>
                            {/* <Link to={item.pathname}>{item.heading}</Link> */}
                        </div>
                    );
                })}

                <div className="menuItem">
                    <FaSignOutAlt />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;