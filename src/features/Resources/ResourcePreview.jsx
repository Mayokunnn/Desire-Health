import { useNavigate } from "react-router-dom";

export default function ResourcePreview() {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate('1')} className="grid grid-rows-[55%_45%] h-[420px] gap-2 p-1 rounded-lg lg:rounded-xl hover:bg-[#E6E9EB] hover:cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
        className="h-full w-full rounded-xl"
        alt="Resource Image"
      />
      <div className="px-2">
        <p className="uppercase text-azure-radiance-500 text-xs tracking-[2px]">Psychology</p>
        <div className="flex justify-between items-center">
            <h3 className="capitalize text-lg font-semibold">Get your appointments in</h3>
            <span className="text-[#63697A] text-xs">3 weeks ago</span>
        </div>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto, quas suscipit totam sit officia ab laborum soluta, molestias optio assumenda non velit quasi excepturi quo, harum ullam illo consequatur!</p>
      </div>
    </div>
  );
}
