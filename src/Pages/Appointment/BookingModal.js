import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment }) => {

    const { _id, name, slots } = treatment;

    const [user] = useAuthState(auth);

    console.log(user)
    const handleModal = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary text-center">Apointment Name: {name}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder='Your Name' value={user?.displayName || ''} name='name' class="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ''} name='email' class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' class="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;