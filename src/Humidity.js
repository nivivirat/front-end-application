import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import locations from "./resources/locations.json";
import humidity_img from "./resources/humidity.svg";

const Humidity = () => {
  const page = useSelector((state) => state.page);
  const location = locations.find((loc) => loc.page === page);
  const [humidity, setHumidity] = useState(0);
  const [humidityText, setHumidityText] = useState("");

  useEffect(() => {
    if (location) {
      setHumidity(location.humidity);
      setHumidityText(getHumidityText(location.humidity));
    }
  }, [location]);

  const getHumidityText = (humidityValue) => {
    if (humidityValue > 80) {
      return "bad";
    } else if (humidityValue > 50) {
      return "normal";
    } else {
      return "good";
    }
  };

  return (
    <>
      <div className="bg-white h-[100px] w-[25%] p-0 ml-[5%] mt-[2%] rounded-[16px] justify-between">
        <div className="flex flex-row">
          <p className="font-custom text-black text-[13px] mt-[7%] ml-[15%] font-bold">
            Humidity
          </p>
          <img
            src={humidity_img}
            className="h-5 w-5 ml-[40%] mt-[7%]"
            alt="Humidity Icon"
          ></img>
        </div>

        <div className="flex flex-row justify-center mr-[5%]">
          <p className="font-custom text-[18px] font-black text-black mt-[3%]">
            {humidity}%
          </p>
          <p
            className={`font-custom text-[15px] ml-[4%] mt-[4.5%] font-bold text-black m`}
          >
            {humidityText}
          </p>
        </div>

        <div className="flex flex-row text-[10px]">
            <p className=" ml-[10%]">good</p>
            <p className=" ml-[18%]">normal</p>
            <p className=" ml-[11%]">bad</p>
        </div>

        <div className="w-[80%] mx-auto">
          <div className="relative h-2 bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#5c9ce5] rounded-full"
              style={{
                width: `${humidity}%`,
                transition: "width 0.5s ease-in-out", // Add transition property
              }}
            ></div>
            
            <div className="absolute top-0 left-[33.33%] h-full bg-white w-2"></div>
            <div className="absolute top-0 left-[66.66%] h-full bg-white w-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Humidity;
