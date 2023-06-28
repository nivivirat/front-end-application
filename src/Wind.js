import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import locations from "./resources/locations.json";
import wind_img from "./resources/wind.svg";

const Wind = () => {
  const page = useSelector((state) => state.page);
  const location = locations.find((loc) => loc.page === page);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    if (location) {
      setWind(location.wind);
    }
  }, [location]);

  const calculateCircleProgress = () => {
    const circumference = 2 * Math.PI * 25; // Radius is 25
    return 188.5 - (wind / 40) * 188.5; // Adjust the range and values as needed
  };

  return (
    <>
      <div className="flex flex-col bg-white h-[100px] w-[28%] p-0 ml-[3.5%] mt-[2%] rounded-[16px] justify-between relative">
        <div className="flex flex-row">
          <p className="font-custom text-black text-[13px] mt-[7%] ml-[15%] font-bold">
            Wind
          </p>
          <img
            src={wind_img}
            className="h-5 w-5 ml-[48%] mt-[7%]"
            alt="Wind Icon"
          />
        </div>

        <div className="ml-[6%] flex flex-row justify-center items-center mr-[5%] ">
          <svg className="w-full h-full">
            <circle
              cx="35"
              cy="35"
              r="30"
              stroke="#d1d5db"
              strokeWidth="5"
              fill="transparent"
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            <circle
              cx="35"
              cy="65"
              r="30"
              stroke="#5c9ce5"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray="188.5"
              strokeDashoffset={calculateCircleProgress()}
              transform="rotate(-270 50 50)"
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
          </svg>
          <p className="absolute top-[55%] left-[55%] font-custom font-bold text-lg text-black">
            {wind} Km/h
          </p>
        </div>
      </div>
    </>
  );
};

export default Wind;
