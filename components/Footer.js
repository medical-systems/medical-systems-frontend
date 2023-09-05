import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-sky-950 text-white flex flex-col items-center">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center">
            <div className="m-1 h-9 w-9 rounded-full border-2 border-white flex items-center justify-center uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://www.linkedin.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            <div className="m-1 h-9 w-9 rounded-full border-2 border-white flex items-center justify-center uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://twitter.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>

            <div className="m-1 h-9 w-9 rounded-full border-2 border-white flex items-center justify-center uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-400 hover:text-white focus:outline-none focus:ring-0">
              <a
                href="https://www.instagram.com/"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            <div className="m-1 h-9 w-9 rounded-full border-2 border-white flex items-center justify-center uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0">
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
            <li className="text-white text-md font-semibold hover:text-blue-600 cursor-pointer mx-2">
              LTUC
            </li>
            <li className="text-white text-md font-semibold hover:text-blue-600 cursor-pointer mx-2">
              ASAC
            </li>
          </ul>
        </div> */}

        <div
          className="w-full p-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 All rights reserved
          <a className="text-white" href="https://tailwind-elements.com/">
            {"   "} || eDental Clinic{" "}
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
