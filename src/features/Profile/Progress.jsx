export const Progress = ({ type }) => {

  if (type === "ring")
    return (
      <div className="progress-ring relative">
        <div
          className="progress-ring__circle"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "4px solid blue",
            borderLeftColor: "transparent",
            borderTopColor: "transparent",
            transform: `rotate(${(30 / 100) * 360}deg)`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-blue-500">
          <span className="text-2xl">{10}%</span>
        </div>
      </div>
    );
  return (
    <div>
      <p className="flex items-center gap-2">
        <span>Socio-Demographic</span>{" "}
        <div className=" h-1 w-1 rounded bg-[#63697A]"></div>{" "}
        <span>6 left</span>
      </p>

      <div className="h-1.5 w-full rounded bg-[#e5e5e5]">
        <div className={`h-full w-[70%] bg-azure-radiance-600 rounded`}></div>
      </div>
    </div>
  );
};
