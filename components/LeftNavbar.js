import { useState } from 'react';
import Link from 'next/link';

const LeftNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-[100px] bg-sky-950 text-white p-4">
      <div className="relative flex flex-col mt-12">
        <div
          onClick={toggleDropdown}
          className="cursor-pointer p-2"
        >
          <div className="bg-white h-1 w-6 my-1 rounded-full"></div>
          <div className="bg-white h-1 w-6 my-1 rounded-full"></div>
          <div className="bg-white h-1 w-6 my-1 rounded-full"></div>
        </div>
        <div className={`mt-6 ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <Link href="/LoginForm">
            <button className="btn btn-spacing w-full hover:bg-white hover:bg-opacity-20 transition-colors mb-2">
              Appointment
            </button>
          </Link>
          <Link href="/LoginForm">
            <button className="btn btn-spacing w-full hover:bg-white hover:bg-opacity-20 transition-colors mb-2">
              Booking
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavbar;
