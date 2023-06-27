import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js";
import moment from "moment";
import locations from "./resources/locations.json";

export default function CardLineChart() {
  const page = useSelector((state) => state.page);
  const location = locations.find((loc) => loc.page === page);

  useEffect(() => {
    if (location) {
      const labels = [];
      const data = [];

      const currentTime = moment();
      labels.push(currentTime.format("h:mm A"));
      data.push(location.temp);

      for (let i = 1; i < location.precipitation.length; i++) {
        currentTime.add(1, "hour");
        labels.push(currentTime.format("h:mm A"));
        data.push(location.precipitation[i]);
      }

      const label_per = labels.map((label) => label + "%");
      console.log(labels);
      console.log(label_per);

      var config = {
        type: "line",
        data: {
          labels: data,
          datasets: [
            {
              label: "Precipitation",
              backgroundColor: "rgba(92, 156, 229, 0.4)",
              borderColor: "#5c9ce5",
              data: data,
              fill: true,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Time",
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
          tooltips: {
            callbacks: {
              title: function (tooltipItems, data) {
                const index = tooltipItems[0].index;
                return labels[index];
              },
              label: function (tooltipItems) {
                const index = tooltipItems.index;
                return `Precipitation: ${data[index]}`;
              },
            },
          },
        },
      };

      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    }
  }, [location]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">
                Precipitation Chart
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
        <div className="px-4 pb-3">
          <p className="text-xs text-blueGray-400 mb-0">
            Time: <span id="chart-precipitation"></span>
          </p>
          <p className="text-xs text-blueGray-400 mb-0">
            Precipitation: <span id="chart-time"></span>
          </p>
        </div>
      </div>
    </>
  );
}


// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import Chart from "chart.js";
// import moment from "moment";
// import locations from "./resources/locations.json";

// export default function CardLineChart() {
//   const page = useSelector((state) => state.page);
//   const location = locations.find((loc) => loc.page === page);

//   useEffect(() => {
//     if (location) {
//       const labels = [];
//       const data = [];

//       const currentTime = moment();
//       labels.push(currentTime.format("h:mm A"));
//       data.push(location.temp);

//       for (let i = 1; i < location.precipitation.length; i++) {
//         currentTime.add(1, "hour");
//         labels.push(currentTime.format("h:mm A"));
//         data.push(location.precipitation[i]);
//       }

//       var config = {
//         type: "line",
//         data: {
//           labels: labels,
//           datasets: [
//             {
//               label: "Precipitation",
//               backgroundColor: "#5c9ce5",
//               borderColor: "#5c9ce5",
//               data: data,
//               fill: true,
//             },
//           ],
//         },
//         options: {
//           maintainAspectRatio: false,
//           responsive: true,
//           title: {
//             display: false,
//           },
//           legend: {
//             display: false,
//           },
//           scales: {
//             xAxes: [
//               {
//                 display: true,
//                 scaleLabel: {
//                   display: true,
//                   labelString: "Time",
//                 },
//               },
//             ],
//             yAxes: [
//               {
//                 display: true,
//                 scaleLabel: {
//                   display: true,
//                   labelString: "Precipitation Level",
//                 },
//               },
//             ],
//           },
//         },
//       };

//       var ctx = document.getElementById("line-chart").getContext("2d");
//       window.myLine = new Chart(ctx, config);
//     }
//   }, [location]);

//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
//         <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
//                 Overview
//               </h6>
//               <h2 className="text-white text-xl font-semibold">
//                 Precipitation Chart
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex-auto">
//           <div className="relative h-350-px">
//             <canvas id="line-chart"></canvas>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


