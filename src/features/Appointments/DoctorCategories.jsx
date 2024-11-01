import { DoctorCategory } from "../Dashboard/DoctorCategory";

export const DoctorCategories = () => {
  return (
    <div>
      <h1 className="font-medium text-xl">Find a Doctor</h1>
      <div className="flex flex-wrap w-full items-center justify-center">
          <DoctorCategory />
          <DoctorCategory />
          <DoctorCategory />
          <DoctorCategory />
      </div>
    </div>
  );
}
