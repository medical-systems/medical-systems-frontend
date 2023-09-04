import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About us', href: "/assets/Aboutus", current: false },
    { name: 'Appointments', href: "/assets/Appointment", current: false },
    { name: 'Booking', href: "/assets/Booking", current: false },
    { name: 'profile', href: "/assets/UserProfile", current: false },
    { name: 'Login', href: "/assets/Login", current: false },
    { name: 'Sign up', href: "/assets/Signup", current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav className="p-4 border-b border-gray-200 bg-sky-950">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            className="w-auto h-8"
            src="logo2.png"
            alt=""
          />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : item.name === 'Login' ? 'bg-gray-300 text-white hover:bg-sky-300 hover:text-white' : 'text-gray-300 hover:bg-sky-300 hover:text-white',
                  item.name === 'Sign up' ? 'border-white' : 'text-gray-300 hover:bg-sky-300 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;