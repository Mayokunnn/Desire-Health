import { useNavigate } from "react-router-dom";

export default function SectionPreview() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("1")}
      className="grid grid-rows-[60%_40%] h-[350px] gap-2 p-1 rounded-lg lg:rounded-xl hover:bg-[#E6E9EB] hover:cursor-pointer"
    >
      <img
        src="/assets/nutrition.png"
        className="h-full w-full rounded-xl"
        alt="Resource Image"
      />
      <div className="px-2">
        <h3 className="capitalize text-lg font-semibold">
          Get your appointments in
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto,
          quas suscipit totam sit officia ab laborum soluta, molestias optio
          assumenda non velit quasi excepturi quo, harum ullam illo consequatur!
        </p>
      </div>
    </div>
  );
}
