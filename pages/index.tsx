import LineGraph from "@/components/LineGraph";

import SideBar from "@/components/sideBar";

import type { TopLocationProps } from "../components/TopLocation";
import type { TopSourceProps } from "../components/TopSource";

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
  console.log(graphData);
  return (
    <main className="flex min-h-screen pb-24">
      <SideBar />
      <section className="w-full px-8">
        <section className="mb-6">
          {" "}
          <h1 className="py-5 text-xl font-bold text-black">DashBoard</h1>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[24px] font-bold text-black">
                Good Morning, Blessing
              </h2>
              <p className="text-sm">Check out your dashboard summary.</p>
            </div>
            <a className="cursor-pointer text-sm text-orange">View Analytics</a>
          </div>
        </section>
        <LineGraph
          topLocation={topLocation}
          topSource={topSource}
          graphData={graphData}
        />
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
