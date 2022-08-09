import React from "react";
import "./style.css";

const Card = ({ title, value, icon }) => {

    return (
        <div className="Card" >
            <div className="detail">
                <span>{value}</span>
                <span>{title}</span>
            </div>
            <div className="icon">
                <img src={icon} alt={icon} />
            </div>
        </div>
    );
};

export default Card