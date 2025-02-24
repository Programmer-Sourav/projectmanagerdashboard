import "./piechart.css"
import React, { useEffect, useRef, useState } from 'react';
import loadScript from 'load-script'; // Import load-script



export default function PieChart(){


const chartRef = useRef(null); // Reference for the canvas element
const chartInstanceRef = useRef(null); // Ref to store chart instance

  const [chartActions] = useState([
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({ count: chart.data.labels.length, min: 0, max: 100 });
        });
        chart.update();
      }
    },
    {
      name: 'Add Dataset',
      handler(chart) {
        const data = chart.data;
        const newDataset = {
          label: 'Dataset ' + (data.datasets.length + 1),
          backgroundColor: [],
          data: [],
        };

        for (let i = 0; i < data.labels.length; i++) {
          newDataset.data.push(Utils.numbers({ count: 1, min: 0, max: 100 }));

          const colorIndex = i % Object.keys(Utils.CHART_COLORS).length;
          newDataset.backgroundColor.push(Object.values(Utils.CHART_COLORS)[colorIndex]);
        }

        chart.data.datasets.push(newDataset);
        chart.update();
      }
    },
    {
      name: 'Add Data',
      handler(chart) {
        const data = chart.data;
        if (data.datasets.length > 0) {
          data.labels.push('data #' + (data.labels.length + 1));

          for (let index = 0; index < data.datasets.length; ++index) {
            data.datasets[index].data.push(Utils.rand(0, 100));
          }

          chart.update();
        }
      }
    },
    {
      name: 'Remove Dataset',
      handler(chart) {
        chart.data.datasets.pop();
        chart.update();
      }
    },
    {
      name: 'Remove Data',
      handler(chart) {
        chart.data.labels.splice(-1, 1); // remove the label first
        chart.data.datasets.forEach(dataset => {
          dataset.data.pop();
        });
        chart.update();
      }
    }
  ]);

  const data = {
    labels: ['Over Budget', 'On Budget',  'Under Budget'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3], // Example data
        backgroundColor: ['red', 'turquoise',  'purple'],
      }
    ]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Budget vs Profitibility'
        }
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
    <div className="piebody">
      {/* <div>
        {chartActions.map((action, index) => (
          <button key={index} onClick={() => action.handler(chartInstance)}>
            {action.name}
          </button>
        ))}
      </div> */}
      <div className="piecard">
      <canvas ref={chartRef}></canvas> {/* Canvas element to render the chart */}
      </div>
    </div>
  );
}