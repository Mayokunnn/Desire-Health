import { IoIosArrowForward } from "react-icons/io";
import SectionPreview from "./SectionPreview";



export const DashboardSection = () => {
  return (
    <div>
      <div className="flex justify-between px-3 font-semibold text-lg">
        <h2>Nutrition</h2>
        <p className="text-base hover:text-azure-radiance-700 cursor-pointer flex items-center">
          View All <IoIosArrowForward />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SectionPreview />
        <SectionPreview />
        <SectionPreview />
      </div>
    </div>
  );
}
