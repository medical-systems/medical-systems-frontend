import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import Aboutus from "../components/About";
import ABooking from "@/components/AppointmentForm";
import AppointmentList from "@/components/AppointmentList";
import UserProfile from "@/components/UserProfile";
import Navbar from "@/components/NavBar";
import LeftNavbar from "@/components/LeftNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>

      {/* <Aboutus /> */}
      {/* <ABooking/> */}
       <Navbar />
       {/* <LeftNavbar/> */}

      <AppointmentList/>

      <Footer />
      
    </div>
  );
}
