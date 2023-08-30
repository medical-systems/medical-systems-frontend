import { Fragment, useState } from "react";

export default function ABooking() {
  return (
    <div className="flex items-center justify-center p-12 bg-gray-200">
      <div className="mx-auto w-full max-w-[550px]">
        <div className="bg-gray-800 text-white text-center py-1 px-12 font-bold uppercase">
          Book an Appointment
        </div>{" "}
        <br></br>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="date"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="time"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div className="mb-5">
              <label
                htmlFor="treatment"
                className="block text-base font-medium text-[#07074D] mb-3"
              >
                Treatment Options
              </label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" name="treatment" value="cleaning" />{" "}
                  Cleaning
                </label>
                <label>
                  <input type="checkbox" name="treatment" value="filling" />{" "}
                  Filling
                </label>
                <label>
                  <input type="checkbox" name="treatment" value="extraction" />{" "}
                  Extraction
                </label>
                <label>
                  <input type="checkbox" name="treatment" value="braces" />{" "}
                  Braces
                </label>
                <label>
                  <input type="checkbox" name="treatment" value="whitening" />{" "}
                  Whitening
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="insuranceDocument"
              className="block text-base font-medium text-[#07074D] mb-3"
            >
              Insurance Provider Document
            </label>
            <div className="flex flex-col space-y-1">
              <input
                type="file"
                name="insuranceDocument"
                id="insuranceDocument"
                accept=".pdf,.doc,.docx"
                className="border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p className="text-sm text-[#6B7280]">
                Please provide a PDF or Word document regarding your insurance
                provider. Accepted formats: .pdf, .doc, .docx.
              </p>
            </div>
          </div>

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

          <div>
            <button
              class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
