import React from 'react';
import Navbar from '@/components/NavBar';
import LeftNavbar from '@/components/LeftNavbar';
import AppointmentList from "@/components/AppointmentList"
import Footer from '@/components/Footer';
import useAppointment from "@/hooks/useAppointment";
import useDoctors from '@/hooks/useDoctors';
import { useAuth } from '@/contexts/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Appointment () {
    const { user,login,token} = useAuth()
    const { appointmentsList } = useAppointment()
    const { doctors } = useDoctors()
    const appointments = []
    Object.keys(appointmentsList).forEach((appointmentKey) => {
        Object.keys(doctors).forEach((doctorKey) => {
            if (appointmentsList[appointmentKey]["doctor"] == doctors[doctorKey]["id"]){
                let appointment = {
                    "appointmentDate" :appointmentsList[appointmentKey]["Appointment_date"],
                    "appointmentTime" : appointmentsList[appointmentKey]["Appointment_time"],
                    "Payment" : appointmentsList[appointmentKey]["payment"],
                    "doctorName" : doctors[doctorKey]["first_name"] + " " + doctors[doctorKey]["last_name"],
                    "email" : doctors[doctorKey]["email"],
                }
                console.log(333,appointment)
                appointments.push(appointment)
            }
          });
      });
    console.log(444,appointments)
    console.log(111,appointmentsList)
    console.log(222,doctors)
    
    return (
        <>
            <div className="w-full max-h-[2000px] ">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex">
                    <AppointmentList myList={appointments}/>
                </div>
                <Footer />
            </div>
        </>
    );
}

