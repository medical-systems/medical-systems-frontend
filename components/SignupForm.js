
import { useState } from 'react';
import Image from 'next/image';


export default function SignupForm() {
  const [pageNumber, setPageNumber] = useState(1);

  function nextFormInfo(event) {
    event.preventDefault();
    setPageNumber(pageNumber + 1);
  }
  return (
    <>
      <form className='w-1/3 h-3/4 py-10 px-12 bg-white rounded-3xl ml-10 drop-shadow-[0_35px_35px_rgba(255,255,255,0.8)]'>
        {pageNumber === 1
          ? (
            <>
              <div className="pb-6 border-b border-gray-900/10 ">
                <h2 className="text-2xl font-semibold leading-7 text-center text-gray-900 ">Sign up</h2>
              </div>

              <div className="pb-8 border-b border-gray-900/10 mt-5">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Account Information</h2>
                <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                      Username
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-950 sm:max-w-md">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1  pl-3 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-950 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-950 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full mt-5'>
                <button onClick={nextFormInfo} className="flex w-full pr-4 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-blue-500 hover:text-sky-950 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>

                </button>
              </div>

            </>
          )
          : (
            <>
              <h1>hell</h1>
            </>
          )
        }
      </form>
      <div>
        <Image
          className="absolute top-10 right-10"
          width={200}
          height={200}
          src="/logo2.png"
          alt="logo"
        />
      </div>
    </>
  )
}
