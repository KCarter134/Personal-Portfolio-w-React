import React from "react";

const infoCard = ({ data, cardAct }) => {
    return (
        <div className="about-card-display-cont">
            {data[cardAct].map(item => (
                <li className="about-card-list">
                <div className="dynamic-card-context">
                    <div className="aboutcard-header-cont">
                        <p className="dynamic-card-title">{item.header}</p>
                    </div>
                    <div className="aboutcard-body-cont">
                        <li className="dynamic-card-body">{item.body}</li>
                    </div>
                </div>
                </li>
            ))}
        </div>
    );
};

export default infoCard;