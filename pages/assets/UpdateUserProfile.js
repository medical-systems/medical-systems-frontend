import React from 'react';
import UpdateUserProfile from '@/components/UpdateUserProfile';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';



export default function Signup() {
    return (
        <>
            <Navbar />
            <div>
            <UpdateUserProfile />
            </div>
            <Footer/>
        </>
    );

}