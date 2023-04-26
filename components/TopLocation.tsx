import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, ChartOptions } from "chart.js";
import Image from "next/image";

import nigeria from "../public/assets/flags/nigeria.svg";

export type TopLocationData = {
  country: string;
  count: number;
  percent: number;
};
export type TopLocationProps = { topLocation: TopLocationData[] };

type DoughnutChartOptions = ChartOptions<"doughnut">;

const TopLocation = ({ topLocation }: TopLocationProps) => {
  Chart.register(ArcElement);

  const [location, setLocation] = useState(topLocation);

  const data = {
    labels: [
      "Nigeria",
      "Germany",
      "Ghana",
      "Finland",
      "United Kingdom",
      "Others",
    ],
    datasets: [
      {
        data: [34, 19, 25, 20, 2, 24],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8C9EFF",
          "#FF9F40",
          "#BDBDBD",
        ],
      },
    ],
  };

  const options: DoughnutChartOptions = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <section className=" w-2/4 px-6 pb-8 pt-6 shadow-md">
      <div className="mb-8 flex justify-between">
        <h2 className="text-lg font-medium">Top Location</h2>
        <a className="cursor-pointer text-sm text-orange">View full reports</a>
      </div>
      <ul>
        {location.map((item, index) => (
          <li key={index} className="flex gap-2">
            <Image className="" src={nigeria} alt="NGN" />
            <p>{item.country}</p>
            <p>{`${item.percent}%`}</p>
          </li>
        ))}
      </ul>
      <Doughnut data={data} options={options} />
    </section>
  );
};

export default TopLocation;
