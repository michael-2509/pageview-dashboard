import LineGraph from "@/components/LineGraph";
import Header from "@/components/Header";
import SideBar from "@/components/sideBar";

import type { TopLocationProps } from "../components/TopLocation";

export default function Home({ topLocation }: TopLocationProps) {
  return (
    <main className="flex min-h-screen pb-24">
      <SideBar />
      <section className="w-full px-8">
        <Header />
        <LineGraph topLocation={topLocation} />
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

    return { props: { topLocation: data.top_locations } };
  } catch (error) {
    console.log(error);
    return { props: { topLocation: [] } };
  }
}
