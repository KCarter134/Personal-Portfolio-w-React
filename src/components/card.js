import React from "react";

const Card = ({ data, cardIndex }) => {
    return (
        <div className="card-display-cont">
            {data[cardIndex].map(item => (
                <div className="card-body">
                    <div className="card-context">
                        {/*<p className="card-img">{item.image}</p>*/}
                        <p className="card-title">{item.title}</p>
                        <img src={item.image} alt={'language picture'}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

