import React from 'react';
import Navbar from '@/components/NavBar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { useState } from 'react';
import useDoctors from '@/hooks/useDoctors';
import useInfo from "@/hooks/useInfo";
import { useAuth } from "@/contexts/auth";
import useAppointment from "@/hooks/useAppointment";
import { useRouter } from 'next/router';


export default function Appointment() {
    
    const { doctors } = useDoctors()
    const { info } = useInfo()
    const { user, login, token } = useAuth()
    const { createAppointments } = useAppointment()
    const router = useRouter();
    const listOfDoctors = []
    const treatments = []

    Object.keys(doctors).forEach((doctorKey) => {
        listOfDoctors.push(doctors[doctorKey])
    });
    const [selectedDoctor, setSelectedDoctor] = useState(0);
    Object.keys(info["treatments"]).forEach((treatmentKey) => {
        treatments.push(info["treatments"][treatmentKey])
    });


    function bookingFormHandler(event) {
        event.preventDefault();
        const appointmentData = {
            "doctor": selectedDoctor,
            "Appointment_date": event.target.date.value,
            "Appointment_time": event.target.time.value,
            "treatment": parseInt(event.target.treatment.value),
            "notes": event.target.comment.value,
        }
        createAppointments(appointmentData)
        router.push("/assets/Appointment")
    }


    return (
        <>
            <div className="w-full max-h-[2000px] min-h-screen">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex space-x-0">
                    <BookingForm className="grid-rows-5 " handler={bookingFormHandler} onDataReceived={setSelectedDoctor} listOfDoctors ={ listOfDoctors } treatments={treatments}/>
                </div>
                <Footer />
            </div>
        </>
    );
}

