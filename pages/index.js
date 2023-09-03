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
const axios = require('axios');


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, login, token } = useAuth()
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_URL

  async function signupFormHandler(event) {
    event.preventDefault();
    const URL = `${baseURL}/accounts/signup/`;
    const headers = { 'Content-Type': 'application/json' };
    const userData = {
      "username": event.target.username.value,
      "email": event.target.email.value,
      "password": event.target.password.value,
      "confirm_password": event.target.confirmPassword.value,
      "first_name": event.target.firstName.value,
      "last_name": event.target.lastName.value,
      "phone_num": event.target.phoneNumber.value,
      "gender": 1,
      "insurance": 1,
      "date_of_birth": event.target.dateOfBirth.value,
    }
    await axios.post(URL, userData, { headers })
      .then(response => {
        const responseData = response.data;
        console.log(responseData)
      })
      .catch(error => {
        try {
          if ("Passwords do not match." == error.response.data.non_field_errors[0]) {
            alert("Passwords do not match")
          }
        }
        catch (error) {
        }
        try {
          if ("A user with that username already exists." == error.response.data.username[0]) {
            alert("A user with that username already exists.")
          }
        }
        catch (error) {
        }
        console.log('Error', error.response.data);
      });
    console.log(userData)
  }

  function bookingFormHandler(event) {
    event.preventDefault();
    const appointmentData = {
      doctor: selectedDoctor,
      appointmentDate: event.target.date.value,
      appointmenttime: event.target.time.value,
      treatment: event.target.treatment.value,
      comment: event.target.comment.value,
    }
    console.log(appointmentData)
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
      {/* <NavBar/> */}
      {/* <LoginForm handler={loginFormHandler} /> */}
      {/* <SignupForm handler={signupFormHandler} /> */}
      {/* <BookingForm handler={bookingFormHandler} onDataReceived = {setSelectedDoctor}/> */}

    </>
  );
}