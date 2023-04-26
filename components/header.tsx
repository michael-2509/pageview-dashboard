const Header = () => {
  return (
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
  );
};

export default Header;
