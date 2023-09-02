import React, { useState } from 'react';
import disableFridays from "@/public/DateInput"

export default function DateTime() {
    const [selectedTime, setSelectedTime] = useState('');

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
    console.log((day))
    console.log(month)
    console.log(year)
    const formattedMinDate = `${year}-${month}-${day}`;
    const formattedMaxDate = `${year}-${monthMax}-${day}`;
    console.log(formattedMaxDate)
    return (
        <>
            <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <label
                        for="date"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        min={formattedMinDate}
                        max={formattedMaxDate}
                        onFocus={disableFridays}
                    />
                </div>
            </div>
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
                        value={selectedTime}
                        onChange={handleTimeChange}
                    />
                </div>
            </div>
        </>
    );
}