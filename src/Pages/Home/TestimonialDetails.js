import React from 'react';

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className="card w-96 bg-base-100 drop-shadow-xl

        ">
            <div className="card-body">
                <p>{testimonial.review}</p>
                <div className='flex justify-start items-center '>
                    <div className='avatar mr-4'>
                        <div className='ring ring-primary rounded-full ring-offset-2'>
                            <img className='mr-4' src={testimonial.img} alt="" />
                        </div>
                    </div>
                    <div >
                        <h5 className='font-bold text-lg'>{testimonial.name}</h5>
                        <p><small>{testimonial.location}</small></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;