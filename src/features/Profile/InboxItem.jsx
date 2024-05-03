export const InboxItem = () => {
  return (
    <li className="max-h-20 px-3 py-1.5 max-w-full flex gap-2">
      <img
        className="rounded-full h-12 w-12 contain "
        src="https://picsum.photos/200"
        alt="avatar"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="capitalize text-sm lg:text-lg font-semibold">
            Welcome to Desire Health
          </h3>
          <p className="text-[#63697A]">9:00 am</p>
        </div>
        <div className="w-full">
          <p className="truncate w-[90%] text-xs lg:text-base  text-[#63697A] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, harum null
          </p>
        </div>
      </div>
    </li>
  );
};
