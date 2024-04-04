import Button from "./Button";

export default function HeroContent() {
  return (
    <div className="max-w-2xl pl-16 text-white space-y-5">
      <h2 className="font-semibold text-5xl leading-snug">
        Health Education Platform you can Trust
      </h2>
      <p className="text-base">
        For your routine patient education sessions on Antenatal care,
        Adolescent Reproductive Health and More!
      </p>
      <div>
        <Button type={"primary"} text={"get started"} />
      </div>
    </div>
  );
}
