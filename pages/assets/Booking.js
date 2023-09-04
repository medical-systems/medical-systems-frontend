import React from 'react';
import Navbar from '@/components/NavBar';
import LeftNavbar from '@/components/LeftNavbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Appointment () {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    function bookingFormHandler(event) {
        event.preventDefault();
        const appointmentData = {
          doctor: selectedDoctor,
          appointmentDate: event.target.date.value,
          appointmenttime: event.target.time.value,
          treatment: event.target.treatment.value,
          comment: event.target.comment.value,
        }
        console.log(appointmentData)
      }


    return (
        <>
            <div className="w-full max-h-[2000px] ">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex space-x-0">
                    <LeftNavbar />
                    <BookingForm className=" grid-rows-5" handler={bookingFormHandler} onDataReceived = {setSelectedDoctor}/>
                </div>
                <Footer />
            </div>
        </>
    );
}

