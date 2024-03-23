import { whyChooseUs } from "../utils/helpers";
import Button from "./Button";


export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-2 shadow-round rounded-xl">
      <div className="px-8 py-10 w-full space-y-5 ">
        <h4 className="font-semibold text-xl leading-relaxed">Personalize your experience</h4>
        <ul className="list-disc ml-6">
          {whyChooseUs.map((rsns, i) => <li key={i} className="text-base text-[#6d6d6d]">{rsns}</li>)}
        </ul>
        <Button text={'register'} type={'small'}/>
      </div>
      <img className="w-full" src="/assets/pregnant.png"/>
    </div>
  )
}
