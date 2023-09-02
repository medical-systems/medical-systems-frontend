import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import Aboutus from "../components/About";
import ABooking from "@/components/AppointmentForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>

      <Aboutus />
      {/* <ABooking/> */}
      <Footer />
      
    </div>
  );
}
