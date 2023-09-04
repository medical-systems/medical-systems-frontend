import React, { useState } from 'react';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('login');

  const handleOptionChange = () => {
    setSelectedOption(selectedOption === 'login' ? 'sign up' : 'login');
  };

  return (
    <nav className="bg-sky-950 border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </div>

 
        <div className="flex">
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
            Login
          </label>
          <label
            className={`${
              selectedOption === 'sign up'
                ? 'bg-blue-400 text-white'
                : 'bg-gray-200 text-gray-700'
            } cursor-pointer py-1 px-4 rounded-full transition-all ml-1`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={selectedOption === 'login'}
              onChange={handleOptionChange}
            />
            Sign Up
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;