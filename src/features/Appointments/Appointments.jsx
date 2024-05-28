import DateSelectorTab from "./DateSelectorTab";
import ActivitesContainer from "./ActivitesContainer";
import AppointmentItem from "./AppointmentItem";

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
      <div className="gap-5">
        <div className="lg:bg-white p-2 rounded-md">
          <div className="flex items-center justify-center">
            <DateSelectorTab />
          </div>
          <AppointmentItem data={data} />
        </div>
        <ActivitesContainer/>
      </div>
    </>
  );
};
