import { useAuth } from '@/contexts/auth';
import useInfo from "@/hooks/useInfo";
const axios = require('axios');
import { useRouter } from 'next/router';

export default function AppointmentList(props) {
  const { token } = useAuth()
  const { info } = useInfo()
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_URL

  

 function handleHistory(){
 props.setappointmentArr([])
 console.log(3333344444,props.historyArr)

 props.setappointmentArr(props.historyArr)
 
 }
 function handleUpcoming(){
  props.setappointmentArr([])
  
   props.setappointmentArr(props.upcomingArr)
// console.log(3333344444,props.myList)
 }
  function cancelAppointment(appointments) {
    let url = `${baseURL}/api/v1/appointments/${appointments.id}/`
    let statuses = info.appointment_statuses
   
    let statusesId = null
    let headers = {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token.access
      }
    }
    statuses.forEach(element => {
      if (element.status == "Canceled") {
        statusesId = element.id
      }
    });

    console.log("statusesId",statusesId)

    let updatedData = { "Appointment_status": statusesId}
    axios.put(url, updatedData, headers)
      .then(response => {
        // Handle the successful response here
        console.log('PUT request successful:', response.data);
        router.push("/assets/Appointment")
      })
      .catch(error => {
        // Handle any errors that occurred during the PUT request
        console.error('Error making PUT request:', error);
      });


  }

  return (
    <div>
      <div className="py-4 text-white bg-gray-100 ">
        <div className="container flex items-center justify-between px-4 mx-20">
          <div className="space-x-6 ">
            <button onClick={handleUpcoming} className="px-4 py-2 text-blue-500 bg-white rounded-full hover:bg-blue-100 hover:text-blue-700">
              Upcoming
            </button>
            <button onClick={handleHistory} className="px-4 py-2 text-blue-500 bg-white rounded-full hover:bg-blue-100 hover:text-blue-700">
              History
            </button>
          </div>
        </div>
      </div>

      {/* Appointment List */}
      <div className="container w-4/5 mx-auto mt-10">
        {props.myList.map((appointments) => (
          <div
            key={appointments.id}
            className="mb-4 bg-white p-2 rounded-lg shadow-md flex justify-between border w-[1200px] "
          >
            <div className="flex items-center gap-4">
              {/* <div className="relative w-14 h-14">
                <img
                  className="rounded-full"
                  src={appointments.avatar}
                  alt={appointments.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{appointments.name}</p>
                <p className="text-gray-600">{appointments.email}</p>
                <div className='flex'>
                  <p className="p-1 text-sm text-green-900 bg-green-200 rounded-lg">
                    {appointments.appointmentDate}</p>
                  <p className="p-1 text-sm text-green-900 bg-green-200 rounded-lg">
                    {appointments.appointmentTime}</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <button onClick={() => cancelAppointment(appointments)} className="w-24 h-8 text-xs text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:border-transparent">
                Cancel
              </button>
              <button className="w-24 h-8 text-xs text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}