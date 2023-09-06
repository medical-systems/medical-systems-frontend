import React, { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useNav } from '@/contexts/Navcontext';

const Navbar = () => {
  const { currentNavigation, setNavCurrent } = useNav();


  const [activeButton, setActiveButton] = useState(null); // State to keep track of the active button
  const [navigation, setNavigation] = useState( [
    { name: 'Home', href: '/', current: false },
    { name: 'About us', href: "/assets/Aboutus", current: false },
    { name: 'Appointments', href: "/assets/Appointment", current: false },
    { name: 'Booking', href: "/assets/Booking", current: false },
    { name: 'profile', href: "/assets/UserProfile", current: false },
    { name: 'Login', href: "/assets/Login", current: false },
    { name: 'Sign up', href: "/assets/Signup", current: false },
  ]);


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleNavigationClick = (name) => {
    setNavCurrent(name);
    console.log(currentNavigation)
  };


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

            { currentNavigation.map((item) => (
              <div onClick={() => handleNavigationClick(item.name)} key={item.name}>
                
                <Link
                  href={item.href}
                  // Apply active styling if item.current is true
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:underline hover:text-white',
                    item.name === 'Login' ? 'bg-gray-300 text-white hover:border-b-2 hover:text-white' : 'text-gray-300 hover:underline hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
             
             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
             

               {/* Profile dropdown */}
               <Menu as="div" className="relative ml-3">
                 <div>
                   <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                     <span className="absolute -inset-1.5" />
                     <img
                       className="w-8 h-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=" "
                     />
                   </Menu.Button>
                 </div>
             
                   <Menu.Items className="absolute right-0 z-10 w-40 py-1 mt-2 origin-top-right bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    
                     <Menu.Item>
                       {({ active }) => (
                         <a
                           href="/"
                           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                         >
                           Sign out
                         </a>
                       )}
                     </Menu.Item>
                   </Menu.Items>
               </Menu>
               <label >
                 <div className="ml-4">
               Arlene Mccoy'
               </div>

               </label>
             </div>
           </div>      </div>
    </nav>
  );
};

export default Navbar;