import SideBar from "@/components/sideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SideBar />
      <section className="w-full px-8">
        <h1 className="py-5 text-xl font-bold text-black">DashBoard</h1>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[24px] font-bold text-black">
              Good Morning, Blessing
            </h2>
            <p className="text-sm">Check out your dashboard summary.</p>
          </div>
          <p>View Analytics</p>
        </div>
      </section>
    </main>
  );
}
