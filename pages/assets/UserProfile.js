import React from 'react';
import UserProfile from '@/components/UserProfile';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LeftNavbar from '@/components/LeftNavbar';
import { useAuth } from '@/contexts/auth';



export default function Signup() {
    const {user} = useAuth()
    console.log(user)

    return (
        <>
            <Navbar />
            <div>
                <LeftNavbar/>
            <UserProfile />
            </div>
            <Footer/>
        </>
    );

}