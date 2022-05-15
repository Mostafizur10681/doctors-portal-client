import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../../src/assets/icons/clock.svg';
import location from '../../../src/assets/icons/marker.svg';
import phone from '../../../src/assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-24 px-12'>
            <InfoCards bgClass='bg-gradient-to-r from-secondary to-primary ' cardTitle='Opening Hours' img={clock}></InfoCards>
            <InfoCards bgClass='bg-accent ' cardTitle='Visit Our Location' img={location}></InfoCards>
            <InfoCards bgClass='bg-gradient-to-r from-secondary to-primary ' cardTitle='Contact Us Now' img={phone}></InfoCards>
        </div>
    );
};

export default Info;