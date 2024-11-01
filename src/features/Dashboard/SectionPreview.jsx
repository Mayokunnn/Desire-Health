import { useNavigate } from "react-router-dom";

export default function SectionPreview() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("1")}
      className="grid grid-rows-auto max-h-[20rem] gap-2 p-1 rounded-lg lg:rounded-xl hover:bg-[#E6E9EB] hover:cursor-pointer overflow-hidden text-ellipsis"
    >
      <div className="w-full overflow-hidden">
        <img
          src="/assets/nutrition.png"
          className="object-contain w-full rounded-xl"
          alt="Resource Image"
        />
      </div>
      <div className="text-lg p-1">
        <h3 className="capitalize font-semibold">Get your appointments in</h3>
        <p className="text-xs lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto,
          quas suscipit totam sit officia ab laborum soluta, molestias optio
          assumenda non velit quasi excepturi quo, harum ullam illo consequatur!
        </p>
      </div>
    </div>
  );
}
