import React, { useState } from 'react';

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
    <nav className="bg-sky-950 border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="logo2.png"
            alt=""
          />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : item.name === 'Login' ? 'bg-gray-300 text-white hover:bg-sky-300 hover:text-white' : 'text-gray-300 hover:bg-sky-300 hover:text-white',
                  item.name === 'Sign up' ? 'border-white' : 'text-gray-300 hover:bg-sky-300 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;