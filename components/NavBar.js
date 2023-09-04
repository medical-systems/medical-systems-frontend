import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('login');

  const handleOptionChange = () => {
    setSelectedOption(selectedOption === 'login' ? 'sign up' : 'login');
  };

  const navigation = [
    { name: 'Home', href: '/assets/Home', current: false },
    { name: 'About us', href: '/assets/Aboutus', current: false },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const renderNavigationItems = () => {
    return navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-sky-400 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium'
        )}
      >
        {item.name}
      </a>
    ));
  };

  return (
    <nav className="bg-sky-950 border-sky-950 border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 w-auto" src="logo.png" alt="" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">{renderNavigationItems()}</div>
        </div>
        <label
          className={`${
            selectedOption === 'login'
              ? 'bg-blue-400 text-white'
              : 'bg-gray-200 text-gray-700'
          } cursor-pointer py-1 px-4 rounded-full transition-all`}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={selectedOption === 'sign up'}
            onChange={handleOptionChange}
          />
          {selectedOption === 'login' ? 'Login' : 'Sign Up'}
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
