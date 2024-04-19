import Button from "./Button";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row md:items-center gap-8 lg:gap-12 w-full py-8 lg:p-12">
      <img
        className="w-full md:w-8/10 lg:w-1/2 lg:h-2/5 "
        src="/assets/pic-1.png"
      />
      <div className="w-full lg:w-1/2 md:px-6 lg:px-1 flex flex-col items-center justify-center gap-4">
        <p className="text-sm md:text-lg leading-normal ">
          We supports adolescents and pregnant women with timely reproductive
          health and antenatal care information alongside Professional care &
          support for improved health behavior and outcome. <br />A digital
          platform for patient engagement in antenatal care and Adolescent
          Reproductive health
        </p>
        <Button type={"primary"} text={"Learn more"} />
      </div>
    </div>
  );
}
