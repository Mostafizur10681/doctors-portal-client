import React from 'react';
import flouride from '../../../src/assets/images/fluoride.png';
import cavity from '../../../src/assets/images/cavity.png';
import whiteening from '../../../src/assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: flouride

        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whiteening
        }
    ]
    return (
        <div className='text-center mb-24'>
            <h3 className='font-bold uppercase text-primary text-2xl'>Our Services</h3>
            <h2 className='text-4xl mb-12'>Services We Provide</h2>

            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;