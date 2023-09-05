import React from 'react';
import Navbar from '@/components/NavBar';
import AppointmentList from "@/components/AppointmentList"
import Footer from '@/components/Footer';
import useAppointment from "@/hooks/useAppointment";
import useDoctors from '@/hooks/useDoctors';
import { useAuth } from '@/contexts/auth';


export default function Appointment() {
    const { user, login, token } = useAuth()
    const { appointmentsList } = useAppointment()
    const { doctors } = useDoctors()
    const appointments = []
    console.log("youyo",appointmentsList)
    Object.keys(appointmentsList).forEach((appointmentKey) => {
        Object.keys(doctors).forEach((doctorKey) => {
            if (appointmentsList[appointmentKey]["doctor"] == doctors[doctorKey]["id"]) {
                let appointment = {
                    "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
                    "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
                    "Payment": appointmentsList[appointmentKey]["payment"],
                    "doctorName": doctors[doctorKey]["first_name"] + " " + doctors[doctorKey]["last_name"],
                    "email": doctors[doctorKey]["email"],
                }
                console.log(333, appointment)
                appointments.push(appointment)
            }
        });
    });

    function updateAppointmentHandler(event) {
        event.preventDefault();
        const appointmentData = {
            "doctor": selectedDoctor.id,
            "Appointment_date": event.target.date.value,
            "Appointment_time": event.target.time.value,
            "treatment": parseInt(event.target.treatment.value),
            "notes": event.target.comment.value,
        }
        console.log(selectedDoctor)
        createAppointments(appointmentData)
    }

    console.log("user", user)
    console.log(444, appointments)
    console.log(111, appointmentsList)
    console.log(222, doctors)

    return (
        <>
            <div className=" max-h-[2000px] ">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex min-h-screen ">
                    <AppointmentList myList={appointments} />
                </div>
                <Footer />
            </div>
        </>
    );
}

