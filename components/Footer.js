import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
      
      <footer className="bottom-0 left-0 w-full bg-gray-800 " >
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="md:flex md:justify-between">
            <div className="p-5 ">
              <ul>
                <div className="flex flex-col items-center pb-5">
                  <p className="pb-4 text-2xl font-bold text-sky-100">
                    Contact us:
                  </p>
                  <div className="flex gap-6">
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-2xl text-white cursor-pointer hover:text-red-400" />
                    </Link>
                    <Link
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-2xl text-white cursor-pointer hover:text-blue-600" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-blue-600" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-2xl text-white cursor-pointer hover:text-blue-600" />
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
            <div className="p-5">
              
              <p className="flex flex-col items-center justify-center text-center text-white p-5bg-blue-400">
                © 2023 All rights reserved | Build with ❤ by{" "}
                <span className="font-semibold cursor-pointer hover:text-blue-600">
                eDental Clinic Team {" "}
                </span>
              </p>
            </div>

            <div className="p-5">
                <p className="pb-4 text-2xl font-bold text-sky-100">
                  Support:
                </p>
              <ul className="flex flex-row " >
                <li className="pb-2 m-1 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
                  LTUC
                </li>
             
                <li className="pb-2 m-1 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
                  ASAC
                </li>
              </ul>
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
}

export default Footer;