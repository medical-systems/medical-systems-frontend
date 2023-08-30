import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import Aboutus from "../components/About";
import ABooking from "@/components/AppointmentForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, login, token } = useAuth()

  function loginFormHundeler(event) {
    event.preventDefault();
    const username = event.target.username.value
    const password = event.target.password.value
    console.log(username, password)
    login(username, password)
  }
  return (
    <div>

      <Aboutus />
      {/* <ABooking/> */}
      <Footer />
      
    </div>
  );
}
