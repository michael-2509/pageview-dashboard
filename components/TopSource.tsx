import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, ChartOptions } from "chart.js";
import Image from "next/image";

import facebook from "../public/assets/social/facebook.svg";
import google from "../public/assets/social/twitter.svg";
import instagram from "../public/assets/social/Instagram.svg";
import linkedin from "../public/assets/social/linkedIn.svg";

export type TopSourceData = {
  source: string;
  count: number;
  percent: number;
};
export type TopSourceProps = { topSource: TopSourceData[] };

type DoughnutChartOptions = ChartOptions<"doughnut">;

type SocialImages = {
  [key: string]: string;
  google: string;
  instagram: string;
  facebook: string;
  linkedin: string;
};

const TopSource = ({ topSource }: TopSourceProps) => {
  Chart.register(ArcElement);

  const socialImages: SocialImages = {
    google: google,
    instagram: instagram,
    facebook: facebook,
    linkedin: linkedin,
  };

  const [Source, setSource] = useState(topSource);

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
        data: topSource.map((item) => item.percent),
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
        <h2 className="text-lg font-medium">Top Source</h2>
        <a className="cursor-pointer text-sm text-orange">View full reports</a>
      </div>
      <div className="flex justify-between">
        <ul>
          {Source.map((item, index) => (
            <li key={index} className="flex gap-2">
              <Image src={socialImages[item.source]} alt="NGN" />
              <p>{item.source}</p>
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

export default TopSource;
