import Button from "./Button";

export default function HeroContent() {
  return (
    <div className="lg:max-w-2xl pl-6 lg:pl-16 text-white space-y-5">
      <h2 className="font-semibold text-3xl lg:text-5xl leading-snug">
        Health Education Platform you can Trust
      </h2>
      <p className="text-sm lg:text-base">
        For your routine patient education sessions on Antenatal care,
        Adolescent Reproductive Health and More!
      </p>
      <div>
        <Button type={"primary"} text={"get started"} />
      </div>
    </div>
  );
}
