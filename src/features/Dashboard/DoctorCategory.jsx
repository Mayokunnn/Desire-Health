import { IoIosArrowForward } from 'react-icons/io';
import { RiHeartAddLine } from 'react-icons/ri';

export const DoctorCategory = () => {
  return (
    <div className="flex flex-col h-full p-2 cursor-pointer flex-grow">
      <div className="bg-[#EBF0F5] flex justify-between p-2 items-center rounded-md">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#DFE9F7]">
            <RiHeartAddLine size={20} className="fill-azure-radiance-600 " />
          </div>
          <div className="text-base">
            <h3 className="font-semibold">Health Specialist</h3>
            <p>Lifestyle and Fitness</p>
          </div>
        </div>
        <IoIosArrowForward size={20} />
      </div>
    </div>
  );
}
