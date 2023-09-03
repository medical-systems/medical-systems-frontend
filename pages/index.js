import { Inter } from 'next/font/google'
import Header from "@/components/Header"

import NavBar from '@/components/NavBar';
import AppointmentForm from '@/components/AppointmentForm';
import LeftNavbar from '@/components/LeftNavbar';
import About from '@/components/About';
import HorizontalCard from '@/components/HorizontalCard';
import ABooking from '@/components/ABooking';





export default function Home() {
  return (
    <>
        <NavBar/>
       <Header/>
      <HorizontalCard/> 
       
     
        <div className='flex w-full h-screen '>
        <LeftNavbar/>
        {/* <ABooking/> */}
       
        </div>
      
        {/* <About/> */}
        
    </>

  )
}
