import "./linechart.css"
import React, { useEffect, useRef, useState } from 'react';
import loadScript from 'load-script'; // Import load-script
import { CHART_COLORS, numbers, transparentize } from "../Utils/Utils";



export default function LineChart(){

let smooth = false;
const chartRef = useRef(null); // Reference for the canvas element
const chartInstanceRef = useRef(null); // Ref to store chart instance

const inputs = {
    min: -100,
    max: 100,
    count: 8,
    decimals: 2,
    continuity: 1
  };
  
  const generateLabels = () => {
    //return Utils.months({count: inputs.count});
    return ["January", "February", "March", "April", "May"]
  };
  
  const generateData = () => (numbers(inputs));

  const [chartActions] = useState([
    {
        name: 'Fill: false (default)',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = false;
          });
          chart.update();
        }
      },
      {
        name: 'Fill: origin',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = 'origin';
          });
          chart.update();
        }
      },
      {
        name: 'Fill: start',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = 'start';
          });
          chart.update();
        }
      },
      {
        name: 'Fill: end',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = 'end';
          });
          chart.update();
        }
      },
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data = generateData();
          });
          chart.update();
        }
      },
      {
        name: 'Smooth',
        handler(chart) {
          smooth = !smooth;
          chart.options.elements.line.tension = smooth ? 0.4 : 0;
          chart.update();
        }
      }
  ]);


  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Dataset',
        data: generateData(),
        borderColor: CHART_COLORS.red,
        backgroundColor: transparentize(CHART_COLORS.red),
        fill: false
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
        }
      },
      interaction: {
        intersect: false,
      }
    },
  };



  useEffect(() => {
     // Ensure Chart.js is available globally (loaded in App component)
     if (window.Chart) {
       const ctx = chartRef.current.getContext('2d');
 
       // Destroy the existing chart if it exists
       if (chartInstanceRef.current) {
         chartInstanceRef.current.destroy();
       }
 
       // Create the new chart instance
       chartInstanceRef.current = new window.Chart(ctx, config);
     }
 
     // Cleanup function to destroy the chart instance when component unmounts
     return () => {
       if (chartInstanceRef.current) {
         chartInstanceRef.current.destroy();
       }
     };
   }, []); // Empty dependency array, so this runs only once on mount
 

  return (
    <div className="linebody">
      <div className="linecard">
      <canvas ref={chartRef}></canvas> {/* Canvas element to render the chart */}
      </div>
    </div>
  );
}