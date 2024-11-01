import Button from "./Button";

export default function HeroContent() {
  return (
    <div className="md:max-w-2xl pl-6 lg:pl-16 text-white space-y-5">
      <h2 className="font-semibold text-3xl md:text-5xl leading-snug">
        Health Engagement Platform you can Trust
      </h2>
      <p className="text-sm md:text-base">
        For your routine clinic information classes, personalised antenatal care, 
        professional support for pregnancy, birth and even more!
      </p>
      <div>
        <Button type={"primary"} text={"get started"} />
      </div>
    </div>
  );
}
