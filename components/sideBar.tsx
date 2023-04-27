import Image from "next/image";

import alarm from "../public/assets/alarm.svg";
import dashboard from "../public/assets/dashboard.svg";
import deleteIcon from "../public/assets/delete.svg";
import edit from "../public/assets/edit.svg";
import file from "../public/assets/file_present.svg";
import group from "../public/assets/group.svg";
import logo from "../public/assets/mainstack-logo.svg";
import more from "../public/assets/more_horiz.svg";
import photo from "../public/assets/add_a_photo.svg";
import profile from "../public/assets/unsplash_F16KPYxfm6s.svg";
import time from "../public/assets/hourglass_empty.svg";
import subscription from "../public/assets/subscriptions.svg";
import { useState } from "react";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="shadow-md md:hidden">
        <button
          onClick={toggleSidebar}
          type="button"
          className="text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${showSidebar ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${showSidebar ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <aside
        className={`${
          showSidebar ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed h-full w-60 bg-[#e5e8ea] px-8 shadow-md md:static   md:h-auto md:translate-x-0`}
      >
        <div className="pb-12 pt-8 ">
          {" "}
          <Image src={logo} alt="Mainstack" />
          <button
            onClick={toggleSidebar}
            type="button"
            className="text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${showSidebar ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${showSidebar ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="hover:hoverstate mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image className="svgColor" src={dashboard} alt="dashboard" />
          <p>Dashboard</p>
        </div>
        <div className="hover:hoverstate mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image src={edit} alt="edit" />
          <p>edit</p>
        </div>
        <div className="hover:hoverstate mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image src={group} alt="group" />
          <p>group</p>
        </div>
        <div className="hover:hoverstate mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image src={time} alt="time" />
          <p>time</p>
        </div>

        <div>
          <p className="mb-5">Others 1</p>
          <div className="hover:hoverstate mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
            <Image src={photo} alt="time" />
            <p>Add Photo</p>
          </div>
          <div className="hover:hoverstate mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
            <Image src={deleteIcon} alt="time" />
            <p>delete</p>
          </div>
        </div>

        <p className="mb-5">Others 2</p>
        <div className="hover:hoverstate  mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image src={subscription} alt="time" />
          <p>Subscription</p>
        </div>
        <div className="hover:hoverstate  mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image src={file} alt="time" />
          <p>File</p>
        </div>
        <div className="hover:hoverstate  mb-6 flex gap-5 hover:cursor-pointer hover:text-orange">
          <Image src={alarm} alt="time" />
          <p>Alarm</p>
        </div>
        <div className="absolute bottom-5 flex">
          <Image className="rounded-full" src={profile} alt="profile" />
          <p className="ml-2">Blessing Daniels</p>
          <Image className="relative left-5" src={more} alt="more" />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
