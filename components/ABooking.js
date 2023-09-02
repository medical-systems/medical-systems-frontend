import { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import CollapsibleReadMore from '@/components/CollapsibleReadMore';
import {people} from '@/data'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function ABooking() {
  // List of insurance providers
  // List of provider names
  const [selected, setSelected] = useState(...people)

  const insuranceProviders = [
    "Jordan Insurance Company",
    "Arab Orient Insurance Company",
    "Jordan French Insurance Company",
    "Al-Nisr Al-Arabi Insurance Company",
    "Islamic Insurance Company",
    "United Insurance Company",
    "Arabia Insurance Company",
    "Middle East Insurance Company",
    "Al-Manara Insurance Company",
    "National Insurance Company",
    "Arab Jordan Investment Bank Insurance Company",
    "Al-Etihad Insurance Company",
    "Arabia Insurance Cooperative Company",
    "Jordan International Insurance Company",
  ];

  // State for selected provider and date
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Handle provider selection change
  const handleProviderChange = (event) => {
    setSelectedProvider(event.target.value);
  };

  // Handle date selection change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Get the current date
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="flex items-center justify-center p-12 bg-gray-200">
      <div className="mx-auto w-full max-w-[550px]">
        <div className="bg-sky-950 text-white text-center py-1 px-12 font-bold uppercase custom-font">
          Book an Appointment
        </div>{" "}
        <br></br>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="-mx-3 flex flex-wrap"></div>
          <div className='flex justify-start items-start space-x-40 '>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
          {selected && (
        <div className= "ml-20 mt-10">
          <img
            src={selected.avatar}
            alt={`${selected.name}'s Avatar`}
            className="h-30 w-30 mt-2 rounded-full"
          />
          <h2 className="text-lg font-semibold"> Dr. Name: {selected.name}</h2>

          <CollapsibleReadMore doctorInfo={selected.additionalInfo} />
        </div>
      )}
          <div className="flex flex-col items-center justify-center mt-50  ">
            <Listbox.Label className="mb-3 block text-base font-medium text-[#07074D]">ٍSelecte a doctor</Listbox.Label>
            <div className=" inset-0 flex  items-center justify-center mt-2">
              <Listbox.Button className="relative w-60 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.name}
                            </span>
                          
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
          
                              
                            </span>
                            
                          ) : null}
                          
                        </>
                        
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
            </div>
          </>
        )}
      </Listbox>
      
      </div>

          {/* Date input */}

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  min={currentDate} // Set the minimum date
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            {/* Time input */}

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  for="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Treatment options checkboxes */}

          <div className="mb-5">
            <label
              htmlFor="treatment"
              className="block text-base font-medium text-[#07074D] mb-3"
            >
              Treatment Options
            </label>
            <div className="flex flex-col space-y-2 sky-950">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value="cleaning"
                  className="mr-2"
                />
                <span className="ml-2">Cleaning</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value="filling"
                  className="mr-2"
                />
                <span className="ml-2">Filling</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value="extraction"
                  className="mr-2"
                />
                <span className="ml-2">Extraction</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value="braces"
                  className="mr-2"
                />
                <span className="ml-2">Braces</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value="whitening"
                  className="mr-2"
                />
                <span className="ml-2">Whitening</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="treatment"
                  value="other"
                  className="mr-2"
                />
                {/* <span className="ml-2">Other</span> */}
                <input
                  type="text"
                  name="other"
                  id="other"
                  placeholder="Other"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ml-2"
                />
              </label>
            </div>
          </div>

          {/* Insurance provider selection */}

          <div className="mb-5">
            <label
              htmlFor="insuranceProvider"
              className="block text-base font-medium text-[#07074D] mb-3"
            >
              Insurance Provider
            </label>
            <div className="flex flex-col space-y-1">
              <select
                name="insuranceProvider"
                id="insuranceProvider"
                value={selectedProvider}
                onChange={handleProviderChange}
                className="border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">Select an Insurance Provider</option>
                {insuranceProviders.map((provider, index) => (
                  <option key={index} value={provider}>
                    {provider}
                  </option>
                ))}
              </select>
              {/* <p className="text-sm text-[#6B7280]">
                Select your insurance provider from the list.
              </p> */}
            </div>
          </div>

          {/* Comment textarea */}

          <div className="mb-5">
            <label
              htmlFor="medicalHistory"
              className="block text-base font-medium text-[#07074D] mb-3"
            >
              Comment
            </label>
            <textarea
              name="medicalHistory"
              id="medicalHistory"
              rows="4"
              placeholder="Enter your comment here ..."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          {/* <div className="mb-5">
            <label
              htmlFor="emergencyAppointment"
              className="block text-base font-medium text-[#07074D] mb-3"
            >
              Emergency Appointment
            </label>
            <input
              type="checkbox"
              name="emergencyAppointment"
              id="emergencyAppointment"
              className="mr-2"
            />
            <span className="text-[#6B7280]">
              Request an emergency appointment?
            </span>
          </div> */}

          {/* Comment textarea */}
          <div>
            <div className="flex justify-end mt-4">
              {" "}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-sky-950 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}







