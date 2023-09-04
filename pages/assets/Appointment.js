import React from 'react';
import Navbar from '@/components/NavBar';
import LeftNavbar from '@/components/LeftNavbar';
import AppointmentList from "@/components/AppointmentList"
import Footer from '@/components/Footer';

export default function Appointment () {
    return (
        <>
            <div className="w-full max-h-[2000px] ">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex">
                    <LeftNavbar />
                    <AppointmentList />
                </div>
                <Footer />
            </div>
        </>
    );
}

