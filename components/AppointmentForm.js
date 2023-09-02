import { Fragment, useState } from "react";

export default function ABooking() {
  // List of insurance providers
  // List of provider names
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
    <div className="flex items-center justify-center p-12 bg-white-200">
      <div className="mx-auto w-full max-w-[550px]">
        <div className="bg-sky-950 text-white text-center py-1 px-12 font-bold uppercase custom-font">
          Book an Appointment
        </div>{" "}
        <br></br>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="-mx-3 flex flex-wrap"></div>

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
