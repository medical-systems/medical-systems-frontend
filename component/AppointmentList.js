import Image from 'next/image';
export default function AppointmentList() {
    return (
      <>
      <div className=' ml-16 mt-16'>
        <div className='flex justify-between  border border-blue-500 p-4 w-9/12 rounded-lg' >
          <div className='flex gap-6'>
            <div>
              <Image className='rounded-full pl-2' src="/Rectangle.png" width={100} height={100} />
            </div>
  
            <div className='flex flex-col items-start justify-between '>
              <p className="">Dr.Name</p>
              <p className="">Dr.Specialized</p>
              <p className="bg-green-200 rounded-lg">Date of Appointmen</p>
            </div>
          </div>
  
  
          <div className="flex items-start gap-4">
            <button className="w-40 h-10 bg-white border border-blue-500 rounded-md text-black-500">
              Cancel Appointmen
            </button>
            <button className="w-32 h-10 bg-blue-500 border border-blue-500 rounded-md text-white">
              Reschedule
            </button>
          </div>
  
        </div>
        </div>
      </>
  
    );
  }