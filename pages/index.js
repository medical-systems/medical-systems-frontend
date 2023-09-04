import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Aboutus from "../components/About";
import BookingForm from "@/components/BookingForm";
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/contexts/auth";
import Head from "next/head";
import NavBar from "@/components/NavBar"
import LeftNavbar from "@/components/LeftNavbar"
import Header from "@/components/Header";
import HorizontalCard from "@/components/HorizontalCard";
import { useState } from "react";
import useAppointment from "@/hooks/useAppointment";
const axios = require('axios');




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, login, token } = useAuth()
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { response } = useAppointment()
  const baseURL = process.env.NEXT_PUBLIC_URL

  function bookingFormHandler(event) {
    event.preventDefault();
    const appointmentData = {
      doctor: selectedDoctor,
      appointmentDate: event.target.date.value,
      appointmenttime: event.target.time.value,
      treatment: event.target.treatment.value,
      comment: event.target.comment.value,
    }
  }

  return (
    <>
      <Head>
        <title>eDental</title>
      </Head>
      <NavBar />
      <Header />
      <HorizontalCard />
      <Footer />
    </>
  );
}