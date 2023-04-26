import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, ChartOptions } from "chart.js";
import Image from "next/image";

import nigeria from "../public/assets/flags/nigeria.svg";
import germany from "../public/assets/flags/neitherlan.svg";
import ghana from "../public/assets/flags/finland.svg";
import finland from "../public/assets/flags/andora.svg";
import uk from "../public/assets/flags/finland.svg";

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
        data: topLocation.map((item) => item.percent),
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
        position: "top",
      },
    },
  };

  return (
    <section className=" w-2/4 px-6 pb-8 pt-6 shadow-md">
      <div className="mb-8 flex justify-between">
        <h2 className="text-lg font-medium">Top Location</h2>
        <a className="cursor-pointer text-sm text-orange">View full reports</a>
      </div>
      <div className="flex items-center justify-between">
        <ul>
          {location.map((item, index) => (
            <li key={index} className="mb-5 flex gap-2 ">
              <Image src={countryImages[item.country]} alt="NGN" />
              <p>{item.country}</p>
              <p>{`${item.percent}%`}</p>
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
