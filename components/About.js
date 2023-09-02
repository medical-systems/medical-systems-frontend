import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function Aboutus() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen relative">
        <div className="flex justify-center h-full">
          <div className="flex items-center justify-center w-full bg-gray-200"> {/* Change this line */}
            <img
              src="https://www.bing.com/th/id/OGC.86f02ef3fe9731b8608381971fbad9c5?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f08%2f6e%2fd2%2f086ed2d569d8a90795ca431b35ad9446.gif&ehk=qGRwF5zkGhuSxSUFBG1I99nfyEYFpMVdEJWnFYUf3Do%3d"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex justify-center items-center w-full h-full px-20 absolute top-0 left-0 ">
            <div className="bg-black bg-opacity-60 px-20">
              <h2 className="text-center text-6xl font-bold text-white sm:text-5xl mt-5">
                eDental Care
              </h2>

              <p className="max-w-xl mt-6 text-white text-3xl mb-4">
                Where taking care of your smile is made
                easy. Our friendly team of dental experts is here to help you
                book appointments for all your dental needs – whether it's a
                regular check-up or special treatment. We believe in making your
                dental journey comfortable and stress-free. With the latest
                technology and a warm environment, we're excited to guide you
                toward a healthier, happier smile. Let's work together to keep
                your teeth shining and your dental care journey a breeze.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TeamMemberCard />
    </>
  );
}