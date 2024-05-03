import DateSelectorTab from "./DateSelectorTab";
import ActivitesContainer from "./ActivitesContainer";

export const Appointments = () => {
  
  return (
    <>
      <h2 className="font-semibold text-lg lg:hidden">Appointments</h2>
      <div className="lg:grid grid-cols-[70%_30%] gap-5">
        <div className="lg:bg-white p-2 rounded-md">
          <div className="flex items-center justify-center">
            <DateSelectorTab />
          </div>
        </div>
        <ActivitesContainer/>
      </div>
    </>
  );
};
