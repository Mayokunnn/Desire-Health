import { DoctorCategory } from "./DoctorCategory";

export const DoctorCategories = () => {
  return (
    <div>
      <h1 className="font-medium">Find a Doctor</h1>
      <div>
          <DoctorCategory />
          <DoctorCategory />
          <DoctorCategory />
          <DoctorCategory />
      </div>
    </div>
  );
}
