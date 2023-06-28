import React from "react";
import add_circle from "./resources/add_circle.svg";
import Pagination from "./Pagination";
import Toggle from "./Toggle";
import Location from "./Location";
import Temp from "./Temp";
import Picture from "./Picture";
import Hero from "./Hero";
import Graph from "./Graph";

const App = () => {
  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center overflow-hidden">
      <div className="flex justify-end rounded-[38px] bg-ternary h-6/6 w-5/6 overflow-hidden">
        <div className="flex flex-col h-6/6 w-2/6">
          {/* Top section */}
          <div className="flex flex-row flex-wrap justify-between align-middle items-center">
            <img src={add_circle} className="h-7 w-7 mt-7 ml-5"></img>
            <Pagination totalPages={3} />
            <Toggle />
          </div>

          {/* Location section */}
          <div>
            <Location />
            <Temp />
            <Picture />
          </div>
        </div>
        <div className="rounded-[38px] bg-secondary h-6/6 w-4/6">
          
          {/* HERO SECTION */}
          <div className="flex flex-col">
            <Hero name={"Isabella"}/>
            <Graph/>
          </div>

          {/* More details */}

          <div>
            <p className="font-custom text-black font-black ml-12">More details of today's weather</p>
          </div>


        </div>
      </div>
    </div>
  );
};
export default App;
