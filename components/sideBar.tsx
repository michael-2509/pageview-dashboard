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
import ToggleButton from "./ToggleButton";

interface SideBarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
}

const SideBar = ({ activeItem, onItemSelect }: SideBarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  // const [activeItem, setActiveItem] = useState("Dashboard");

  // const onItemSelect = (item: string) => {
  //   setActiveItem(item);
  // };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <ToggleButton onClick={toggleSidebar} />

      <aside
        className={`${
          showSidebar ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed h-full w-60 bg-[#e5e8ea] px-8 shadow-md md:translate-x-0 md:bg-white`}
      >
        <div className="flex justify-between pb-12 pt-8">
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

        <div
          className={`${
            activeItem === "Dashboard" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("Dashboard")}
        >
          <Image className="svgColor" src={dashboard} alt="dashboard" />
          <p>Dashboard</p>
        </div>
        <div
          className={`${
            activeItem === "edit" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("edit")}
        >
          <Image src={edit} alt="Edit" />
          <p>edit</p>
        </div>
        <div
          className={`${
            activeItem === "group" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("group")}
        >
          <Image src={group} alt="Group" />
          <p>group</p>
        </div>
        <div
          className={`${
            activeItem === "time" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("time")}
        >
          <Image src={time} alt="Time" />
          <p>time</p>
        </div>

        <div>
          <p className="mb-5">Others 1</p>
          <div
            className={`${
              activeItem === "Add Photo" ? "hoverstate text-orange" : ""
            }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
            onClick={() => onItemSelect("Add Photo")}
          >
            <Image src={photo} alt="time" />
            <p>Add Photo</p>
          </div>
          <div
            className={`${
              activeItem === "Delete" ? "hoverstate text-orange" : ""
            }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
            onClick={() => onItemSelect("Delete")}
          >
            <Image src={deleteIcon} alt="time" />
            <p>delete</p>
          </div>
        </div>

        <p className="mb-5">Others 2</p>
        <div
          className={`${
            activeItem === "Subscription" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("Subscription")}
        >
          <Image src={subscription} alt="time" />
          <p>Subscription</p>
        </div>
        <div
          className={`${
            activeItem === "file" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("file")}
        >
          <Image src={file} alt="time" />
          <p>File</p>
        </div>
        <div
          className={`${
            activeItem === "alarm" ? "hoverstate text-orange" : ""
          }hover:hoverstate hover:text-orange" mb-6 flex gap-5 hover:cursor-pointer`}
          onClick={() => onItemSelect("alarm")}
        >
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
