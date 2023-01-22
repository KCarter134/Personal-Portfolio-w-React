import React from "react";

const infoCard = ({ data, cardAct }) => {
    return (
        <div className="about-card-display-cont">
            {data[cardAct].map(item => (
                    <div className="dynamic-card-context">
                        <p className="dynamic-card-title">{item.header}</p>
                        <p className="dynamic-card-body">{item.body}</p>
                    </div>
            ))}
        </div>
    );
};

export default infoCard;