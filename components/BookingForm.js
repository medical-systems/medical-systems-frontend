import { Fragment, useState } from "react";
import disableFridays from "@/public/DateInput"
import React from 'react';
import Booking from "@/components/FirstSecInBooking"

export default function BookingForm() {
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

  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedTime, setSelectedTime] = useState('');

  const handleProviderChange = (event) => {
    setSelectedProvider(event.target.value);
  };
  const handleTimeChange = (event) => {
    const inputTime = event.target.value;
    const minTime = '08:00';
    const maxTime = '17:00';

    if (inputTime >= minTime && inputTime <= maxTime) {
      setSelectedTime(inputTime);
    } else {
      alert('Please choose a time during working hours (8:00 AM : 17:00 PM)');
      setSelectedTime('');
    }
  };
  const currentDate = new Date();

  let day = currentDate.getDate() + 1;
  if (day < 10) {
    day = `0${day}`;
  }
  let month = currentDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = currentDate.getFullYear();
  let monthMax = currentDate.getMonth() + 2;
  if (monthMax < 10) {
    monthMax = `0${monthMax}`;
  }

  const formattedMinDate = `${year}-${month}-${day}`;
  const formattedMaxDate = `${year}-${monthMax}-${day}`;

  return (
    <div className=" max-w-[1000px] mx-auto bg-gray-100 border border-sky-950">
      <div className="flex justify-center items-center bg-sky-950 text-white font-medium uppercase custom-font w-full h-16 ">
        <p>Book an Appointment</p>
      </div>
      <div className="w-[800px] flex items-center justify-center p-12  mx-auto">
        <div className="w-full">
          <br></br>
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="-mx-3 flex flex-wrap"></div>
            <div className="mb-10">
              <Booking />
            </div>

            {/* Date input */}
            <div className="flex flex-row gap-10 w-full">
              <div className="min-w-[320px] sm:w-1/2">
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
                    required
                    className="w-[320px] rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    min={formattedMinDate}
                    max={formattedMaxDate}
                    onFocus={disableFridays}
                  />
                </div>
              </div>
              <div className="min-w-[320px] sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    required
                    className="w-[320px] rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={selectedTime}
                    onChange={handleTimeChange}
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
                    required
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
                  <span className="ml-2">Other</span>
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
                  required
                  value={selectedProvider}
                  onChange={handleProviderChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">Select an Insurance Provider</option>
                  {insuranceProviders.map((provider, index) => (
                    <option key={index} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>

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
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>


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
    </div>
  );
}