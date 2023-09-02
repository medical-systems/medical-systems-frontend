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


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, login, token } = useAuth()

  function loginFormHandler(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    login(username, password)
  }

  return (
    <>
      <NavBar />
      <Header/>
      <HorizontalCard/> 


      {/* <div className='flex w-full h-screen '>
        <LeftNavbar />

      </div> */}
    </>
  );
}