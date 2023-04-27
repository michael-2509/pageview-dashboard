import LineGraph from "@/components/LineGraph";

import SideBar from "@/components/sideBar";

import sunrise from "../public/assets/sun-behind-large-cloud-svgrepo-com.svg";

import type { TopLocationProps } from "../components/TopLocation";
import type { TopSourceProps } from "../components/TopSource";
import { useState } from "react";
import Image from "next/image";

interface GraphDataProps {
  graphData: {
    views: {
      [date: string]: number;
    };
  };
}

interface MyComponentProps
  extends TopLocationProps,
    TopSourceProps,
    GraphDataProps {}

export default function Home({
  topLocation,
  topSource,
  graphData,
}: TopLocationProps & TopSourceProps & GraphDataProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 1 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 16) {
      return "afternoon";
    } else {
      return "evening";
    }
  };
  return (
    <main className="flex min-h-screen">
      <SideBar activeItem={activeItem} onItemSelect={handleItemClick} />
      <section className="w-full px-8 md:ml-60">
        <section className="mb-6">
          {" "}
          <h1 className="py-5 text-xl font-bold text-black">DashBoard</h1>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                {" "}
                <h2 className="text-[24px] font-bold text-black">
                  Good {getTimeOfDay()}, Blessing
                </h2>
                <Image src={sunrise} alt="sunrise" />
              </div>

              <p className="text-sm">Check out your dashboard summary.</p>
            </div>
            <a className="cursor-pointer text-sm text-orange">View Analytics</a>
          </div>
        </section>
        {activeItem === "Dashboard" ? (
          <LineGraph
            topLocation={topLocation}
            topSource={topSource}
            graphData={graphData}
          />
        ) : (
          <p>No Data Available</p>
        )}
      </section>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://fe-task-api.mainstack.io/");

    if (!response.ok) {
      throw new Error("No Data");
    }

    const data = await response.json();

    if (!data.top_locations || !Array.isArray(data.top_locations)) {
      throw new Error("Invalid Data");
    }

    return {
      props: {
        topLocation: data.top_locations,
        topSource: data.top_sources,
        graphData: data.graph_data,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: { topLocation: [], topSource: [] } };
  }
}
