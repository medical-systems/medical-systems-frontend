import React from 'react';
import Navbar from '@/components/NavBar';
import AppointmentList from "@/components/AppointmentList"
import Footer from '@/components/Footer';
import useAppointment from "@/hooks/useAppointment";
import useDoctors from '@/hooks/useDoctors';
import { useAuth } from '@/contexts/auth';
import { useEffect, useState } from 'react';
const axios = require('axios');

export default function Appointment() {
    const baseURL = process.env.NEXT_PUBLIC_URL;
    const { user, login, token } = useAuth()
    const { appointmentsList } = useAppointment()
    const { doctors } = useDoctors()
    const [patient,setPatient] = useState([])
    const [appointmentArr,setappointmentArr]= useState([])
    const [historyArr , setHistoryArr]= useState([])
    useEffect(()=>{
       
        fetchPatients()
        appointmentsArray()
    },[])
    async function fetchPatients() {
        let url = `${baseURL}/accounts/patients/`
        if (!token) {
            return null
        }
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + token.access
                }

              });
            const responseData = response.data;
            setPatient(responseData);
            console.log(222233333,responseData);
        } catch (error) {
            console.log(error);
        }
    }
   function appointmentsArray() {
    const appointments = []
    const historyArray= []
    
    if (user.role == "Patient") {
        console.log('hello world')
        Object.keys(appointmentsList).forEach((appointmentKey) => {
            Object.keys(doctors).forEach((doctorKey) => {

                if (appointmentsList[appointmentKey]["doctor"] == doctors[doctorKey]["id"] && appointmentsList[appointmentKey]["Appointment_status"]==1) {
                    let appointment = {
                        "id":appointmentsList[appointmentKey]["id"],
                        "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
                        "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
                        "Payment": appointmentsList[appointmentKey]["payment"],
                        "name": doctors[doctorKey]["first_name"] + " " + doctors[doctorKey]["last_name"],
                        "email": doctors[doctorKey]["email"],
                    }
                    appointments.push(appointment)
                     console.log(7777,appointmentsList[appointmentKey])

                }
                if (appointmentsList[appointmentKey]["doctor"] == doctors[doctorKey]["id"] && appointmentsList[appointmentKey]["Appointment_status"]==2 ||appointmentsList[appointmentKey]["Appointment_status"]==3) {
                    let appointment = {
                        "id":appointmentsList[appointmentKey]["id"],
                        "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
                        "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
                        "Payment": appointmentsList[appointmentKey]["payment"],
                        "name": doctors[doctorKey]["first_name"] + " " + doctors[doctorKey]["last_name"],
                        "email": doctors[doctorKey]["email"],
                    }
                 historyArray.push(appointment)
                    
                }
            });
        });
       
    }
    
    else {
       
        Object.keys(appointmentsList).forEach((appointmentKey) => {
            Object.keys(patient).forEach((patientKey) => {
                
                if (appointmentsList[appointmentKey]["patient"] == patient[patientKey]["id"]) {
                    let appointment = {
                        "id":appointmentsList[appointmentKey]["id"],
                        "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
                        "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
                        "Payment": appointmentsList[appointmentKey]["payment"],
                        "name": patient[patientKey]["first_name"] + " " + patient[patientKey]["last_name"],
                        "email": patient[patientKey]["email"],
                    }
                    appointments.push(appointment)

                }
                if (appointmentsList[appointmentKey]["patient"] == patient[patientKey]["id"] && appointmentsList[appointmentKey]["Appointment_status"]==2 ||appointmentsList[appointmentKey]["Appointment_status"]==3) {
                    let appointment = {
                        "id":appointmentsList[appointmentKey]["id"],
                        "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
                        "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
                        "Payment": appointmentsList[appointmentKey]["payment"],
                        "name": patient[patientKey]["first_name"] + " " + patient[patientKey]["last_name"],
                        "email": patient[patientKey]["email"],
                    }
                    historyArray.push(appointment)
                }
            });
        });

    }
    console.log(44445555,appointmentsList)
    console.log(66666,historyArray)
    setHistoryArr(historyArray)
    setappointmentArr(appointments)
   }
//     const appointments = []
//     if (user.role == "Patient") {
//         Object.keys(appointmentsList).forEach((appointmentKey) => {
//             Object.keys(doctors).forEach((doctorKey) => {
//                 if (appointmentsList[appointmentKey]["doctor"] == doctors[doctorKey]["id"] && appointmentsList[appointmentKey]["Appointment_status"]==1) {
//                     let appointment = {
//                         "id":appointmentsList[appointmentKey]["id"],
//                         "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
//                         "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
//                         "Payment": appointmentsList[appointmentKey]["payment"],
//                         "name": doctors[doctorKey]["first_name"] + " " + doctors[doctorKey]["last_name"],
//                         "email": doctors[doctorKey]["email"],
//                     }
//                     appointments.push(appointment)
//                 }
//             });
//         });
//     }
//     else {
//         Object.keys(appointmentsList).forEach((appointmentKey) => {
//             Object.keys(patient).forEach((patientKey) => {
                
//                 if (appointmentsList[appointmentKey]["patient"] == patient[patientKey]["id"]) {
//                     let appointment = {
//                         "id":appointmentsList[appointmentKey]["id"],
//                         "appointmentDate": appointmentsList[appointmentKey]["Appointment_date"],
//                         "appointmentTime": appointmentsList[appointmentKey]["Appointment_time"],
//                         "Payment": appointmentsList[appointmentKey]["payment"],
//                         "name": patient[patientKey]["first_name"] + " " + patient[patientKey]["last_name"],
//                         "email": patient[patientKey]["email"],
//                     }
//                     appointments.push(appointment)
//                 }
//             });
//         });
// console.log(7777788888,appointments)
//     }

    function updateAppointmentHandler(event) {
        event.preventDefault();
        const appointmentData = {
            "doctor": selectedDoctor.id,
            "Appointment_date": event.target.date.value,
            "Appointment_time": event.target.time.value,
            "treatment": parseInt(event.target.treatment.value),
            "notes": event.target.comment.value,
        }
        createAppointments(appointmentData)
    }

    return (
        <>
            <div className=" max-h-[2000px] ">
                {/* Your home screen components */}
                <Navbar />
                <div className="flex min-h-screen ">
                    <AppointmentList myList={appointmentArr} setappointmentArr={setappointmentArr} historyArr={historyArr}/>
                </div>
                <Footer />
            </div>
        </>
    );
}

