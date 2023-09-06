import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center text-white bg-sky-950 h-[60px] mt-8
      ">
      <div className="flex items-center w-screen justify-between h-1/2">
      <div
          className="w-full p-4 text-center h-1/2"
        >
          © 2023 All rights reserved
          <a className="text-white" href="https://tailwind-elements.com/">
            {"   "} || eDental Clinic{" "}
          </a>
        </div>

        <div className="container px-6 pt-6 h-[60px] ">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://www.linkedin.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            <div className="flex items-center justify-center m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://twitter.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>

            <div className="flex items-center justify-center m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://www.instagram.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            <div className="flex items-center justify-center m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://www.facebook.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="w-full p-4 text-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <p className="text-white">Support:</p>
          <ul className="flex flex-row justify-center">
            <li className="mx-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              LTUC
            </li>
            <li className="mx-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              ASAC
            </li>
          </ul>
        </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;