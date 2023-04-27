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
import TopSource, { TopSourceProps } from "./TopSource";

interface GraphDataProps {
  graphData: {
    views: {
      [date: string]: number;
    };
  };
}

const LineGraph = ({
  topLocation,
  topSource,
  graphData,
}: TopLocationProps & TopSourceProps & GraphDataProps) => {
  console.log(graphData);
  const [interval, setInterval] = useState("7 Days");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const chartRef = useRef<Chart | null>(null);

  // Format the dates as "day month" format
  // const formatedDate = { day: "numeric", month: "string" };
  // const labels = Object.keys(graphData.views).map((dateString) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString("en-US", formatedDate);
  // });

  const getDataForInterval = (interval: string) => {
    // TODO: Implement logic to get data for the selected interval
    return {
      labels: Object.keys(graphData.views),
      datasets: [
        {
          label: "My Dataset",
          data: Object.values(graphData.views),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const handleIntervalChange = (
    interval: "1 Day" | "3 Days" | "7 Days" | "30 Days" | "All Time"
  ) => {
    setInterval(interval);
  };

  return (
    <section>
      <div>
        <button
          onClick={() => handleIntervalChange("1 Day")}
          className={`mr-3 cursor-pointer rounded-3xl border border-white-border 
          px-4 py-2 text-sm font-medium hover:border-orange 
          hover:bg-light-orange hover:text-orange 
          ${
            interval === "1 Day"
              ? "border-orange bg-light-orange text-orange "
              : ""
          }`}
        >
          1 Day
        </button>
        <button
          onClick={() => handleIntervalChange("3 Days")}
          className={`mr-3 cursor-pointer rounded-3xl border border-white-border 
          px-4 py-2 text-sm font-medium hover:border-orange 
          hover:bg-light-orange hover:text-orange 
          ${
            interval === "3 Days"
              ? "border-orange bg-light-orange text-orange "
              : ""
          }`}
        >
          3 Days
        </button>
        <button
          onClick={() => handleIntervalChange("7 Days")}
          className={`mr-3 cursor-pointer rounded-3xl border border-white-border 
          px-4 py-2 text-sm font-medium hover:border-orange 
          hover:bg-light-orange hover:text-orange 
          ${
            interval === "7 Days"
              ? "border-orange bg-light-orange text-orange "
              : ""
          }`}
        >
          7 Days
        </button>
        <button
          onClick={() => handleIntervalChange("30 Days")}
          className={`mr-3 cursor-pointer rounded-3xl border border-white-border 
          px-4 py-2 text-sm font-medium hover:border-orange 
          hover:bg-light-orange hover:text-orange 
          ${
            interval === "30 Days"
              ? "border-orange bg-light-orange text-orange "
              : ""
          }`}
        >
          30 Days
        </button>
        <button
          onClick={() => handleIntervalChange("All Time")}
          className={`mr-3 cursor-pointer rounded-3xl border border-white-border 
          px-4 py-2 text-sm font-medium hover:border-orange 
          hover:bg-light-orange hover:text-orange 
          ${
            interval === "ALL Time"
              ? "border-orange bg-light-orange text-orange "
              : ""
          }`}
        >
          All Time
        </button>
      </div>
      <div className="mt-8 px-6 py-8 shadow-md">
        {" "}
        <h2 className="font-bold">Page Views</h2>
        <p className="mt-2 text-sm text-gray">{interval}</p>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        {" "}
        <TopLocation topLocation={topLocation} />
        <TopSource topSource={topSource} />
      </div>
    </section>
  );
};

export default LineGraph;
