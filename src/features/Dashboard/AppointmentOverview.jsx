import Activities from "../Appointments/Activities";
import { DoctorCategories } from "./DoctorCategories";

export const AppointmentOverview = () => {
  return (
    <div className="h-screen">
      <DoctorCategories />
      <Activities className="bg-transparent p-2 w-full space-y-2 overflow-auto" />
    </div>
  );
};
