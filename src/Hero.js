import React from "react";
import profilePhoto from "./resources/profile-photo.svg";
import HamburgerMenu from './HamburgerMenu'

const Hero = ({name}) => {
  return (
    <div className="flex items-center justify-between p-4 mt-5">
      <div className="text-left ml-10">
        <h2 className="font-custom text-[20px] font-bold text-black">
          Welcome back {name}!
        </h2>
        <p className="ml-1 font-custom text-[15px] text-black font-semi-bold">
          Check out today's weather information.
        </p>
      </div>
      <div className="overflow-hidden flex flex-row mr-6 justify-center items-center">
        <HamburgerMenu/>
        <img src={profilePhoto} alt="Profile" className="w-18 h-14 rounded-lg object-cover rounded-[15px]" />
      </div>
    </div>
  );
};

export default Hero;
