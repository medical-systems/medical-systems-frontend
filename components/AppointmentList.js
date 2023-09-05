import Image from 'next/image';
import { people } from '@/data';

export default function AppointmentList(props) {
  
  return (
    <div>
      <div className="py-4 text-white bg-gray-100 ">
        <div className="container flex items-center justify-between px-4 mx-20">
          <div className="space-x-6 ">
            <button className="px-4 py-2 text-blue-500 bg-white rounded-full hover:bg-blue-100 hover:text-blue-700">
              Upcoming
            </button>
            <button className="px-4 py-2 text-blue-500 bg-white rounded-full hover:bg-blue-100 hover:text-blue-700">
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
                <p className="text-lg font-semibold">{appointments.doctorName}</p>
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
              <button className="w-24 h-8 text-xs text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:border-transparent">
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