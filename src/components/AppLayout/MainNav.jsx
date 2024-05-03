import {
  IoCalendarOutline,
  IoRocketOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="text-[#63697A] text-sm lg:text-[1.13rem] flex flex-col items-start justify-center gap-3">
      <NavLink to={"dashboard"}>
        <LuLayoutDashboard color="#63697A" size={22} />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to={"appointments"}>
        <IoCalendarOutline color="#63697A" className="icon" size={22} />
        <span>Appointments</span>
      </NavLink>
      <NavLink to={"resources"}>
        <IoRocketOutline color="#63697A" size={22} />
        <span>Resources</span>
      </NavLink>
      <NavLink to={"profile"}>
        <MdOutlinePersonOutline color="#63697A" size={22} />
        <span>Profile</span>
      </NavLink>
      <NavLink to={"settings"}>
        <IoSettingsOutline color="#63697A" size={22} />
        <span>Settings</span>
      </NavLink>
      <div>
        <TbLogout2 color="red" size={22} />
        <span className="text-[red]">Logout</span>
      </div>
    </nav>
  );
};
