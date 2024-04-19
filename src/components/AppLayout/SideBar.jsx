import { LiaTimesSolid } from "react-icons/lia";
import { PropTypes } from "prop-types";
import Logo from "../Logo";
import { MainNav } from "./MainNav";


export const SideBar = ({ onToggle, isVisible }) => {
  return (
    <>
      <div className="hidden transition-all duration-300 lg:relative lg:w-full bg-[#F9FAFC] border-r border-gray-100 row-span-full lg:flex items-center flex-col gap-[3.2rem]">
        <div className="border border-gray-100 p-[1.9rem_2.4rem] w-full">
          <Logo color={"app"} />
        </div>
        <MainNav />
      </div>

      {isVisible && (
        <div className="lg:hidden py-4 px-8 h-screen transition-all duration-300 w-[300px] bg-[#F9FAFC] z-10 absolute left-0 top-0 row-span-full flex items-start flex-col gap-[3.2rem]">
          <div className="w-full text-center">
            <Logo color={"app"} />
          </div>
          <div className="absolute  z-11">
            <LiaTimesSolid color="#63697A" onClick={onToggle} />
          </div>
          <MainNav />
        </div>
      )}
    </>
  );
};

SideBar.propTypes = {
  onToggle: PropTypes.func,
  isVisible: PropTypes.bool,
};