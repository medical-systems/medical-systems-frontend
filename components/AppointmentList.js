import Image from 'next/image';
import { doctors } from '@/data';

export default function AppointmentList() {
  return (
    <div>
      <div className="bg-gray-100 text-white py-4 ">
        <div className="container mx-20 flex justify-between items-center px-4">
          <div className="space-x-6 ">
            <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 hover:text-blue-700">
              Upcoming
            </button>
            <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 hover:text-blue-700">
              History
            </button>
          </div>
        </div>
      </div>

      {/* Appointment List */}
      <div className="container mx-auto mt-10 w-4/5">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="mb-4 bg-white p-2 rounded-lg shadow-md flex justify-between border w-[1200px] "
          >
            <div className="flex gap-4 items-center">
              <div className="relative w-14 h-14">
                <img
                  className="rounded-full"
                  src={doctor.avatar}
                  alt={doctor.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{doctor.name}</p>
                <p className="text-gray-600">{doctor.specialized}</p>
                <p className="bg-green-200 rounded-lg p-1 text-sm text-green-900">
                  Date of Appointment
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <button className="w-24 h-8 bg-white border border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent text-xs">
                Cancel
              </button>
              <button className="w-24 h-8 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500 border border-blue-500 text-xs">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}