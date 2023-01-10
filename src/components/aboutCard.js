import React from "react";

const infoCard = ({ data, cardAct }) => {
    return (
        <div className="about-card-display-cont">
            {data[cardAct].map(item => (
                <div className="card-body">
                    <div className="card-context">
                        <p className="card-img">{item.body}</p>
                        <p className="card-title">{item.header}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default infoCard;