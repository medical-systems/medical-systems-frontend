import React from 'react';
import Navbar from '@/components/NavBar';
import LeftNavbar from '@/components/LeftNavbar';
import AppointmentList from "@/components/AppointmentList"
import Footer from '@/components/Footer';
import useAppointment from "@/hooks/useAppointment";
import { useAuth } from '@/contexts/auth';

export default function Appointment () {
    const { user,login,token} = useAuth()
    const { response } = useAppointment()
    console.log(555,user)
    
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

