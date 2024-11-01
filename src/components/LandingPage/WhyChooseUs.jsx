import { whyChooseUs } from "../../utils/helpers";
import Button from "./Button";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col items-center justify-center lg:grid grid-cols-2 shadow-round rounded-xl">
      <div className="px-8 py-10 w-full space-y-5 order-1  ">
        <h4 className="font-semibold text-xl md:text-3xl leading-relaxed">
          Personalize your experience
        </h4>
        <ul className="list-disc ml-6">
          {whyChooseUs.map((rsns, i) => (
            <li key={i} className="text-base md:text-lg capitalize text-[#6d6d6d]">
              {rsns}
            </li>
          ))}
        </ul>
        <div className="ml-5 ">
          <Button text={"sign in"} type={"primary"} />
        </div>
      </div>
      <img
        className="hidden lg:block w-full lg:order-2"
        src="/assets/pregnant.png"
      />
      <img className="lg:hidden w-full lg:order-2" src="/assets/pregnant-tab.png" />
    </div>
  );
}
