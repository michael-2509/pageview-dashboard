import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, ChartOptions } from "chart.js";
import Image from "next/image";

import nigeria from "../public/assets/flags/nigeria.svg";
import germany from "../public/assets/flags/germany.svg";
import ghana from "../public/assets/flags/ghana.svg";
import finland from "../public/assets/flags/finland.svg";
import uk from "../public/assets/flags/england.svg";

export type TopLocationData = {
  country: string;
  count: number;
  percent: number;
};

export type TopLocationProps = { topLocation: TopLocationData[] };

type DoughnutChartOptions = ChartOptions<"doughnut">;

type CountryImages = {
  [key: string]: string;
  Nigeria: string;
  Germany: string;
  Ghana: string;
  Finland: string;
  "United Kingdom": string;
};

const TopLocation = ({ topLocation }: TopLocationProps) => {
  Chart.register(ArcElement);

  const [location, setLocation] = useState(topLocation);

  const countryImages: CountryImages = {
    Nigeria: nigeria,
    Germany: germany,
    Ghana: ghana,
    Finland: finland,
    "United Kingdom": uk,
  };

  const data = {
    labels: topLocation.map((item) => item.country),
    datasets: [
      {
        data: topLocation.map((item) => item.percent),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFB6F5",
          "#8C9EFF",
          "#FF9F40",
          "#BDBDBD",
        ],
      },
    ],
  };

  const options: DoughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth: 30,
        },
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            const backgroundColor = data.datasets[0].backgroundColor;
            const colorSquare = `<span style="display:inline-block; height:10px; width:10px; background-color:${backgroundColor}; margin-right:10px;"></span>`;
            return `${colorSquare} ${label} (${value}%)`;
          },
        },
      },
    },
  };

  return (
    <section className="w-full  px-6 pb-8 pt-6 shadow-md md:w-2/4">
      <div className="mb-8 flex justify-between">
        <h2 className="text-lg font-medium">Top Location</h2>
        <a className="cursor-pointer text-sm text-orange">View full reports</a>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <ul>
          {location.map((item, index) => (
            <li key={index} className="mb-5 flex items-center gap-2 ">
              <Image src={countryImages[item.country]} alt="NGN" />
              <p>{item.country}</p>
              <p>{`${item.percent}%`}</p>
              <div
                style={{
                  display: "inline-block",
                  height: "10px",
                  width: "10px",
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  marginRight: "10px",
                }}
              ></div>
            </li>
          ))}
        </ul>
        <div style={{ width: "160px", height: "160px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default TopLocation;
