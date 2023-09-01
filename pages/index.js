import { Inter } from 'next/font/google'
import Header from "@/components/Header"

import NavBar from '@/components/NavBar';
import AppointmentForm from '@/components/AppointmentForm';
import LeftNavbar from '@/components/LeftNavbar';
import About from '@/components/About';
import HorizontalCard from '@/components/HorizontalCard';




export default function Home() {
  return (
    <>
       <NavBar/>
       {/* <Header/> */}
      {/* <HorizontalCard/> */}
       
     
        <div className='flex w-full h-screen '>
        <LeftNavbar/>
        <AppointmentForm/> 
       
        </div>
      
        {/* <About/> */}
        
    </>

  )
}
