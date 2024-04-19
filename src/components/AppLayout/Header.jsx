import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <div className="flex items-center gap-3 justify-end bg-[#F9FAFC] p-2 lg:p-[1.2rem_4.8rem]">
        <IoMoonOutline size={24} />
        <div className="relative">
          <span className="w-1.5 h-1.5 right-1.5 top-1 absolute z-10 rounded bg-[red]"></span>
          <IoIosNotificationsOutline size={26} />
        </div>
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full h-10 w-10 contain"
            src="https://picsum.photos/200"
            alt="avatar"
          />
          <h2 className="text-lg">Olojo Feranmi</h2>
        </div>
      </div>
    </>
  );
};
