import React from 'react';

const infoCards = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card card-side  pl-5 shadow-xl ${bgClass}`}>
            <figure>
                <img src={img} alt="Watch" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title font-bold">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>

            </div>
        </div>
    );
};

export default infoCards;