import { useState } from "react";
import Calendar from "./Calendar";
import Activities from "./Activities";

export default function ActivitesContainer() {
  const [day, setDay] = useState(new Date());
  function onDateSelect(date) {
    setDay(date);
  }
  return (
    <div className=" hidden lg:flex flex-col items-center gap-2 ">
      <div className="w-full bg-white px-5 py-6 gap-2 rounded-md">
          <Calendar onDateSelect={onDateSelect} />
      </div>
      <Activities day={day}/>
    </div>
  );
}
