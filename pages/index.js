import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/auth";
import Head from "next/head";
import NavBar from "@/components/NavBar"
import Header from "@/components/Header";
import HorizontalCard from "@/components/HorizontalCard";
import { useState } from "react";
import useAppointment from "@/hooks/useAppointment";
const axios = require('axios');
import useDoctors from '@/hooks/useDoctors';
import useInfo from "@/hooks/useInfo";
import ListOfDoctors from "@/components/ListOfDoctors"




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, login, token } = useAuth()
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { response } = useAppointment()
  const { doctors } = useDoctors()
  const { info } = useInfo()

  return (
    <>
      <Head>
        <title>eDental</title>
      </Head>
      <NavBar/>
      {/* <Testnav/> */}
      <Header />
      <ListOfDoctors/>
      <HorizontalCard />
      <Footer />
    </>
  );
}