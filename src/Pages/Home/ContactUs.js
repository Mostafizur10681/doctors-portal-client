import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import Button from './Button';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className='mb-20' style={{ background: `url(${appoinment})` }} >
            <div style={{ width: '450px' }} className='mx-auto px-12 text-center py-20'>
                <h3 className='font-bold lg:text-2xl text-lg text-secondary mb-5'>Contact Us</h3>
                <h2 className='lg:text-3xl text-2xl mb-6 text-white text-white  mb-9'>Stay connected with us</h2>
                <form>
                    <input type="text" placeholder="Email Address" height='48px' className="input w-80 lg:w-96" />
                    <br />
                    <input type="text" placeholder="Subject" style={{ height: '48px' }} className="input my-4 w-80 lg:w-96" />
                    <br />
                    <textarea className="textarea w-80 lg:w-96  rounded-lg textarea-bordered" style={{ height: '136px' }} placeholder="Your Message"></textarea>
                    <div className='mt-6'>
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;