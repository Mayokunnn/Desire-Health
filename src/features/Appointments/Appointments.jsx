import DateSelectorTab from "./DateSelectorTab";
import AppointmentItem from "./AppointmentItem";
import { AppointmentOverview } from "./AppointmentOverview";

export const Appointments = () => {
  const data = [
    { time: "8:00 AM", widget: "Widget 1" },
    { time: "8:00 AM", widget: "Widget 2" },
    { time: "9:00 AM", widget: "Widget 3" },
    { time: "10:00 AM", widget: "Widget 4" },
    { time: "10:00 AM", widget: "Widget 5" },
  ];

  return (
    <>
      <h2 className="font-semibold text-lg lg:hidden">Appointments</h2>
      <div className="lg:grid grid-cols-[70%_30%] gap-6">
        <div className="lg:bg-white p-2 rounded-md">
          <div className="flex items-center justify-center">
            <DateSelectorTab />
          </div>
          <AppointmentItem data={data} />
        </div>
        <AppointmentOverview/>
      </div>
    </>
  );
};
