import { AppointmentOverview } from "../Appointments/AppointmentOverview";
import { DashboardSection } from "./DashboardSection";

export const Dashboard = () => {
  return (
    <div className="grid lg:grid-cols-[75%_25%] gap-x-3 ">
      <div className="grid grid-rows-[auto_1fr] gap-y-4 ">
        <h1 className="text-xl">Recommended for you</h1>
        <div className="space-y-4 py-2">
          <DashboardSection />
          <DashboardSection />
          <DashboardSection />
        </div>
      </div>
      <AppointmentOverview />
    </div>
  );
};
