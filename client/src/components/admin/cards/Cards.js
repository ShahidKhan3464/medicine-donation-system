import React from "react";
import Card from "../card/Card";
import users from "../../../assets/images/users.png";
import ngos from "../../../assets/images/ngos.png";
import doantions from "../../../assets/images/donations.png";
import "./style.css";

const Cards = () => {

    const cardsData = [
        {
            title: "Users",
            value: "50",
            icon: users,
        },
        {
            title: "Ngos",
            value: "50",
            icon: ngos,
        },
        {
            title: "Donations",
            value: "50",
            icon: doantions,
        }
    ]

    return (
        <div className="Cards">
            {cardsData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            value={card.value}
                            icon={card.icon}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;