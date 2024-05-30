import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";


export const Header = () => {
  const navigate = useNavigate()
  const {user: userData} = useUser()
  const user = userData?.user
  console.log(user)
  return (
    <>
      <div className="flex items-center gap-3 justify-end bg-[#F9FAFC] p-2 lg:p-[0.5rem_2rem]">
        <IoMoonOutline color="#63697A" size={24} />
        <div className="relative">
          <span className="w-1.5 h-1.5 right-1.5 top-1 absolute z-10 rounded bg-[red]"></span>
          <IoIosNotificationsOutline color="#63697A" size={26} />
        </div>
        <div className="flex gap-4 items-center">
          <img
            onClick={() => navigate('/app/profile')}
            className="rounded-full h-10 w-10 contain cursor-pointer"
            src="https://picsum.photos/200"
            alt="avatar"
          />
          <h2 className="text-lg text-[#63697A]">{user?.fullname}</h2>
        </div>
      </div>
    </>
  );
};
