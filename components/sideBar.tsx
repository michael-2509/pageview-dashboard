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

const SideBar = () => {
  return (
    <>
      <aside className="w-80 pl-16 shadow-md">
        <div className="pb-12 pt-8 ">
          {" "}
          <Image src={logo} alt="Mainstack" />
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
          <Image className="relative left-10" src={more} alt="more" />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
