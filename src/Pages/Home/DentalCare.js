import React from 'react';
import Button from './Button';
import treatment from '../../../src/assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="card lg:card-side w-4/5 mx-auto pb-7 mb-24">
            <figure>
                <img style={{ width: '498px', height: '576px' }} className='rounded-lg' src={treatment} alt="Album" />
            </figure>
            <div className="card-body rounded-lg" style={{ width: '497px', height: '347px' }}>
                <h2 className="card-title font-bold text-accent text-5xl mb-6">Exceptional Dental Care, on Your Terms</h2>
                <p className='mb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions">
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>

    );
};

export default DentalCare;