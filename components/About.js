import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function AboutUs() {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center justify-center w-64 h-64 bg-white rounded-full ">
          <img
            src="https://www.bing.com/th/id/OGC.86f02ef3fe9731b8608381971fbad9c5?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f08%2f6e%2fd2%2f086ed2d569d8a90795ca431b35ad9446.gif&ehk=qGRwF5zkGhuSxSUFBG1I99nfyEYFpMVdEJWnFYUf3Do%3d"
            alt="Dental Care Logo"
            className="object-cover w-48 h-48 rounded-full"
          />
        </div>
        <h2 className="mt-6 text-4xl font-bold">Welcome to eDental Care</h2>
        <p className="max-w-md mt-4 text-center">
          Book appointments for check-ups and special treatments. Experience the
          latest technology in a warm environment for a stress-free dental
          journey
        </p>
      </div>
      <TeamMemberCard />
    </div>
  );
}