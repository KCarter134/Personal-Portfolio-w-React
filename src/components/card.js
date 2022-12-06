import React from "react";
import htmlPic from "../assets/svg/html5-1.svg";
import cardData from "./Data";

const Card = ({ data, cardIndex }) => {
    return (
        <div className="card-display-cont">
            {data[cardIndex].map(item => (
                <div className="card-body">
                    <div className="card-context">
                        {/*<p className="card-img">{item.image}</p>*/}
                        <p className="card-title">{item.title}</p>
                        <p className="card-name">{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

