import React from 'react';

const infoCards = ({ img, cardTitle, bgClass }) => {
    return (
        <div class={`card card-side  pl-5 shadow-xl ${bgClass}`}>
            <figure>
                <img src={img} alt="Watch" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title font-bold">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>

            </div>
        </div>
    );
};

export default infoCards;