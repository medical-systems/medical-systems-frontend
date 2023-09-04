import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center ">
          <img
            src="https://www.bing.com/th/id/OGC.86f02ef3fe9731b8608381971fbad9c5?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f08%2f6e%2fd2%2f086ed2d569d8a90795ca431b35ad9446.gif&ehk=qGRwF5zkGhuSxSUFBG1I99nfyEYFpMVdEJWnFYUf3Do%3d"
            alt="Dental Care Logo"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
        <h2 className="text-4xl font-bold mt-6">Welcome to eDental Care</h2>
        <p className="max-w-md text-center mt-4">
          Book appointments for check-ups and special treatments. Experience the
          latest technology in a warm environment for a stress-free dental
          journey
        </p>
      </div>
      <TeamMemberCard />
    </div>
  );
}
