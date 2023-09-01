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

      <div className="flex -space-x-2 overflow-hidden">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
