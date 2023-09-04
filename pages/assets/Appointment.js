import React from 'react';
import Navbar from '@/components/NavBar';
import LeftNavbar from '@/components/LeftNavbar';
import AppointmentList from "@/components/AppointmentList"
import Footer from '@/components/Footer';
import useAppointment from "@/hooks/useAppointment";
import useDoctors from '@/hooks/useDoctors';
import { useAuth } from '@/contexts/auth';
import { useEffect } from 'react';

export default function Appointment () {
    const { user,login,token} = useAuth()
    const { appointmentsList } = useAppointment()
    const { doctors } = useDoctors()

    
    console.log(111,appointmentsList)
    console.log(222,doctors)
    
    return (
        <>
            <div className="w-full max-h-[2000px] ">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex">
                    <AppointmentList/>
                </div>
                <Footer />
            </div>
        </>
    );
}

