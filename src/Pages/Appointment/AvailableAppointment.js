import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceAppointment from './ServiceAppointment';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <h4 className='text-2xl text-center text-secondary mb-12'>Available Appointment : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(appointment => <ServiceAppointment
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></ServiceAppointment>)
                }
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;