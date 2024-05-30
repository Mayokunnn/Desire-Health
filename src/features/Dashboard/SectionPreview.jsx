import { useNavigate } from "react-router-dom";

export default function SectionPreview() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("1")}
      className="grid grid-rows-[55%_45%]  xl:min-h-[22rem]  gap-2 p-1 rounded-lg lg:rounded-xl hover:bg-[#E6E9EB] hover:cursor-pointer overflow-hidden text-ellipsis"
    >
      <img
        src="/assets/nutrition.png"
        className="h-full rounded-xl overflow"
        alt="Resource Image"
      />
      <div className="p-2 text-lg">
        <h3 className="capitalize font-semibold">
          Get your appointments in
        </h3>
        <p className="text-xs lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto,
          quas suscipit totam sit officia ab laborum soluta, molestias optio
          assumenda non velit quasi excepturi quo, harum ullam illo consequatur!
        </p>
      </div>
    </div>
  );
}
