import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);
import { useEffect, useRef, useState } from "react";
import TopLocation, { TopLocationProps } from "./TopLocation";

const LineGraph = ({ topLocation }: TopLocationProps) => {
  const [interval, setInterval] = useState("1D");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const chartRef = useRef<Chart | null>(null);

  const getDataForInterval = (interval: string) => {
    // TODO: Implement logic to get data for the selected interval
    return {
      labels: [
        "18 Dec",
        "19 Dec",
        "20 Dec",
        "21 Dec",
        "22 Dec",
        "23 Dec",
        "24 Dec",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [850, 950, 620, 980, 180, 220],
          fill: true,

          borderColor: "#FF5403",
          tension: 0.1,
        },
      ],
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const data = getDataForInterval(interval);
    const chart = new Chart(canvas, {
      type: "line",
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "All Time",
          },
        },
      },
    });

    chartRef.current = chart;

    return () => {
      chart.destroy();
      chartRef.current = null;
    };
  }, [interval]);

  const handleIntervalChange = (
    interval: "1d" | "3d" | "7d" | "30d" | "all"
  ) => {
    console.log(interval);
  };

  return (
    <section>
      <div className="shadow-md">
        {" "}
        <div>
          <button
            onClick={() => handleIntervalChange("1d")}
            className="mr-3 cursor-pointer rounded-3xl border border-white-border 
                     px-4 py-2 text-sm font-medium hover:border-orange 
                     hover:bg-light-orange hover:text-orange"
          >
            1 Day
          </button>
          <button
            onClick={() => handleIntervalChange("3d")}
            className="mr-3 cursor-pointer rounded-3xl border border-white-border 
                     px-4 py-2 text-sm font-medium hover:border-orange 
                     hover:bg-light-orange hover:text-orange"
          >
            3 Days
          </button>
          <button
            onClick={() => handleIntervalChange("7d")}
            className="mr-3 cursor-pointer rounded-3xl border border-white-border 
                     px-4 py-2 text-sm font-medium hover:border-orange 
                     hover:bg-light-orange hover:text-orange"
          >
            7 Days
          </button>
          <button
            onClick={() => handleIntervalChange("30d")}
            className="mr-3 cursor-pointer rounded-3xl border border-white-border 
                     px-4 py-2 text-sm font-medium hover:border-orange 
                     hover:bg-light-orange hover:text-orange"
          >
            30 Days
          </button>
          <button
            onClick={() => handleIntervalChange("all")}
            className="mr-3 cursor-pointer rounded-3xl border border-white-border 
                     px-4 py-2 text-sm font-medium hover:border-orange 
                     hover:bg-light-orange hover:text-orange"
          >
            All Time
          </button>
        </div>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="mt-6 flex gap-4">
        {" "}
        <TopLocation topLocation={topLocation} />
        <TopLocation topLocation={topLocation} />
      </div>
    </section>
  );
};

export default LineGraph;
