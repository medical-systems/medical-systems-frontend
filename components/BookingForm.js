import { Fragment, useState } from "react";
import disableFridays from "@/public/DateInput"
import React from 'react';
import Booking from "@/components/FirstSecInBooking"
import { insuranceProviders, treatments} from "@/data"

export default function BookingForm(props) {
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
      <div className="flex items-center justify-center w-full h-16 font-medium text-white uppercase bg-sky-950 custom-font ">
        <p>Book an Appointment</p>
      </div>
      <div className="flex items-center justify-center p-12  mx-auto">
        <div className="w-full">

          <form onSubmit={props.handler} className="w-full">
            <div className="flex flex-wrap -mx-3"></div>
            <div className="mb-10">
              <Booking onDataReceived = {props.onDataReceived}/>
            </div>

            {/* Date input */}
            <div className="flex flex-row w-full gap-10">
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
              <div className="grid grid-cols-4 grid-rows-3 gap-4 sky-950 ">
                {treatments.map((treatment, index) => (
                    <label className="flex items-center">
                    <input
                      type="radio"
                      name="treatment"
                      value={treatment}
                      className="mr-2"
                      required
                    />
                    <span className="ml-2">{treatment}</span>
                  </label>
                  ))}
              </div>
            </div>


            {/* Comment textarea */}

            <div className="mb-5">
              <label
                htmlFor="comment"
                className="block text-base font-medium text-[#07074D] mb-3"
              >
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                rows="3"
                placeholder="Enter your comment here ..."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>


            {/* Comment textarea */}
            <div>
              <div className="flex justify-end mt-4">
                {" "}
                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-sky-950 focus:outline-none focus:shadow-outline"
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