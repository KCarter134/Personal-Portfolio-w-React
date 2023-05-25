import React from "react";

const infoCard = ({ data, cardAct }) => {
    return (
        <div className="about-card-display-cont">
            {data[cardAct].map(item => (
                <div className="dynamic-card-context">
                    <div className="aboutcard-header-cont">
                        <p className="dynamic-card-title">{item.header}</p>
                    </div>
                    <div className="aboutcard-body-cont">
                        <p className="dynamic-card-body">{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default infoCard;