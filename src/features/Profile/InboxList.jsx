import { FaRegPaperPlane } from "react-icons/fa";
import Button from "../../components/LandingPage/Button";
import { InboxItem } from "./InboxItem";

export const InboxList = () => {
  return (
    <div className="w-full grid grid-row-[auto_1fr] gap-2 lg:gap-6">
      <div className="flex sticky top-0 lg:bg-white z-10 py-3 items-center justify-between">
        <h2 className="capitalize text-black font-semibold ">Inbox</h2>
        <Button text="New Message" type="app">
          <FaRegPaperPlane size={10} />
        </Button>
      </div>
      <ul className="rounded-lg divide-y-2 overflow-hidden bg-[#FAFEFF] lg:bg-white border">
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
      </ul>
    </div>
  );
};
