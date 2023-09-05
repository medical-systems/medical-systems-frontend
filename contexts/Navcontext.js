import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
}

export function NavProvider(props) {
  const [currentNavigation, setCurrentNavigation] = useState( [
    { name: 'Home', href: '/', current: true },
    { name: 'About us', href: "/assets/Aboutus", current: false },
    { name: 'Appointments', href: "/assets/Appointment", current: false },
    { name: 'Booking', href: "/assets/Booking", current: false },
    { name: 'profile', href: "/assets/UserProfile", current: false },
    { name: 'Login', href: "/assets/Login", current: false },
    { name: 'Sign up', href: "/assets/Signup", current: false },
  ]);

  function setNavCurrent(name) {
    // Update the current state based on the name of the navigation item
    setCurrentNavigation((prevState) =>
      prevState.map((item) => ({
        ...item,
        current: item.name === name,
      }))
    );
  }

  const contextValue = {
    currentNavigation,
    setNavCurrent,
  };

  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
}