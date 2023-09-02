import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {teamMembers} from "@/data";
import Link from "next/link";

export default function About() {
  const [expandedMembers, setExpandedMembers] = useState([]);

  const toggleBio = (index) => {
    setExpandedMembers((prevExpandedMembers) => {
      if (prevExpandedMembers.includes(index)) {
        return prevExpandedMembers.filter((item) => item !== index);
      } else {
        return [...prevExpandedMembers, index];
      }
    });
  };

  const truncateBio = (description) => {
    const maxLines = 3;
    const lines = description.split("\n");
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n");
    }
    return description;
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-900 dark:bg-gray-900">
      {/* Each team member */}
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="w-1/3 mx-4 my-8 bg-gradient-to-b from-white via-transparent to-transparent  rounded-full"
        >
          <div className="top-0 left-0 w-full h-full ">
            <img
              className="w-2/4 mx-auto mt-4 rounded-full"
              src={member.avatar}
              alt={`${member.name}'s Avatar`}
            />
            <div className="px-6 py-4">
              <div className=" w-full font-bold text-xl mb-2 text-gray-800 dark:text-white">
                {member.name}
              </div>
              <p
                className={`text-gray-700 dark:text-gray-300 ${
                  expandedMembers.includes(index) ? "block" : "truncate"
                }`}
              >
                {expandedMembers.includes(index) ||
                member.description.length <= 2
                  ? member.description
                  : truncateBio(member.description)}
              </p>
              {member.description.length > 2 && (
                <button
                  className="mt-2 text-blue-500 hover:underline focus:outline-none"
                  onClick={() => toggleBio(index)}
                >
                  {expandedMembers.includes(index) ? "See Less" : "See More"}
                </button>
              )}
              <div className="flex mt-4 space-x-4 ">
                <Link
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-4xl cursor-pointer text-white" />
                </Link>

                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-4xl cursor-pointer text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
