import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Button from './Button';
import appointment from '../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className='flex justify-center items-center px-12 mb-24'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" srcSet="" />
            </div>
            <div className='flex-1'>
                <h3 className='font-bold text-2xl text-primary pt-3 mb-5'>Appointment</h3>
                <h2 className='text-4xl mb-6 text-white'>Make an appointment Today</h2>
                <p className='mb-6 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button className='mb-6'>Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppoinment;