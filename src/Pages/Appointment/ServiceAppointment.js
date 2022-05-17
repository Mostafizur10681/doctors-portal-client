import React from 'react';

const ServiceAppointment = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div class="card w-96 bg-base-100 drop-shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try Again Another Day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(appointment)}
                        disabled={slots.length === 0}
                        for="booking-modal" class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default ServiceAppointment;