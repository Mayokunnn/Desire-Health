import Button from "../../components/LandingPage/Button";
import { useUser } from "../../hooks/useUser";
import { InboxList } from "./InboxList";
import { Progress } from "antd";

export const Profile = () => {
  const { user: userData } = useUser();
  const user = userData?.user;
  const fullname = user?.fullname?.split(" ");
  return (
    <div className="h-full grid grid-row-[40%_60%] gap-3 ">
      <div className="h-full lg:grid grid-cols-[60%_39%] gap-3">
        <div className="lg:bg-white  rounded-lg w-full space-y-3 p-5">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full h-[4.8rem] w-[4.8rem] contain cursor-pointer"
              src="https://picsum.photos/200"
              alt="avatar"
            />
            <h2 className="text-xl text-azure-radiance-800 font-medium">
              Hey {fullname?.[0]},
            </h2>
          </div>
          <div className="space-y-1 text-[#63697A]">
            <h2 className="text-lg text-black font-semibold">
              Mentor Information
            </h2>
            {user?.fullname && <p>Name: {user?.fullname}</p>}
            {user?.phone && <p>Phone Number: {user?.phone}</p>}
            {user?.email && <p>Email: {user?.email}</p>}
          </div>
          <Button type="secondary" text="edit profile" />
        </div>
        <div className="lg:bg-white flex h-full flex-col rounded-lg w-full p-5 gap-3">
          <div className="flex flex-col gap-3 lg:flex-row items-start lg:justify-between lg:items-center">
            <h2 className="text-sm uppercase text-[#63697A] font-medium">
              Profile
            </h2>
            <div className="lg:hidden w-full">
              <Progress size={'small'} />
              <div className="flex text-sm justify-between  text-[#63697A] ">
                <span>You are almost there keep going!</span>
                <span>65% complete</span>
              </div>
            </div>
            <div>
              <Button type="app" text="complete profile" />
            </div>
          </div>
          <div className="hidden lg:block space-y-3 px-10 text-[#63697A]">
            <Progress percent={30} size='big'  status="active" strokeColor={'green'}/>
            <Progress percent={50} size="big" status="active" strokeColor={'green'}/>
            <div className="flex flex-col justify-center items-center px-10 space-y-3">
              <p className="text-center">You are almost there, keep going!</p>
              <Progress type="circle" percent={75} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full lg:bg-white max-w-full  overflow-y-scroll px-5 pb-3 rounded-lg">
        <InboxList />
      </div>
    </div>
  );
};
