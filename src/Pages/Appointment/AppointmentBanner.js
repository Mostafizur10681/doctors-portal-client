import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{ background: `url(${bg})` }} class="hero px-16 min-h-screen">
            <div class="hero-content img-fluid flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        className='img-fluid'
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;