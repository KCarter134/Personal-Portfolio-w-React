import React from "react";

const Card = ({ data, cardIndex }) => {
    return (
        <div className="card-display-cont">
            {data[cardIndex].map(item => (
                <div className="card-body">
                    <div className="card-context">
                        {/*<p className="card-img">{item.image}</p>*/}
                        <p className="card-title">{item.title}</p>
                        <img src={item.image} alt={'SOME TING WONG'}/>
                        <p className="card-name">{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

