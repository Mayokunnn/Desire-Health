import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import Logo from "../Logo";

export const AppLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  

  const onToggle = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <>
      <div className="font-outfit hidden lg:grid h-screen grid-cols-[13.75rem_1fr] grid-rows-[4.5rem_1fr]">
        <Header />
        <SideBar />
        <main className="h-full w-full p-[1rem_2rem] bg-[#F2F4F7] overflow-y-scroll">
          <div className="h-full w-full max-w-[130rem] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <div className="lg:hidden h-screen grid-[auto_1fr]">
        <div className="flex justify-between items-center p-2  bg-[#F9FAFC] border-b border-gray-100 ">
          <HiMenuAlt2 size={22} onClick={onToggle} color="#63697A" />
          {!isVisible && <Logo color={"app"} />}
          <div className="relative">
            <span className="w-1.5 h-1.5 right-1.5 top-1 absolute z- rounded bg-[red]"></span>
            <IoIosNotificationsOutline color="#63697A" size={22} />
          </div>
        </div>
        <SideBar onToggle={onToggle} isVisible={isVisible} />
        <main className="font-outfit h-full p-2 bg-[#F2F4F7] overflow-scroll">
          <div className="max-w-[60rem] lg:max-w-[120rem] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
