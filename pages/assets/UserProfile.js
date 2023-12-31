import React from 'react';
import UserProfile from '@/components/UserProfile';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';



export default function Signup() {
    return (
        <>
            <Navbar />
            <div>
            <UserProfile />
            </div>
            <Footer/>
        </>
    );

}