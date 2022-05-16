import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialDetails from './TestimonialDetails';
import quote from '../../assets/icons/quote.svg'

const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Winson Herry',
            location: 'California'
        }
    ]
    return (
        <section className='px-12 mb-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-bold text-2xl text-primary pt-3 mb-5'>Appointment</h3>
                    <h2 className='text-4xl mb-20 text-accent text-accent'>Make an appointment Today</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" srcSet="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2'>
                {
                    testimonials.map(testimonial => <TestimonialDetails
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></TestimonialDetails>)
                }
            </div>
        </section>
    );
};

export default Testimonials;