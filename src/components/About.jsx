import Button from "./Button";

export default function About() {
  return (
    <div className="flex items-center gap-12 w-full p-6">
        <img className="w-1/2 h-2/5 " src="/assets/pic-1.png" />
        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
            <p className="text-xs leading-normal">We supports adolescents and pregnant women with timely reproductive health and antenatal care information alongside Professional care & support for improved health behavior and outcome. <br/>
A digital platform for patient engagement in antenatal care and Adolescent Reproductive health</p>
            <Button type={'secondary'} text={'Learn more'}/>
        </div>
    </div>
  )
}
