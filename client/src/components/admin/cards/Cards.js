import React from "react";
import Card from "../card/Card";
import "./style.css";

const Cards = ({ allData }) => {

    return (
        <div className="Cards">
            {allData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            value={card.count}
                            icon={card.icon}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;