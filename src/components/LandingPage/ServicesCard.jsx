import PropTypes from "prop-types";

ServicesCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
};

export default function ServicesCard({ title, content, icon }) {

  let boldedContent = content;
  if (title === "eANCare") {
    // Bolden the first and second words for the first card
    const words = content.split(" ");
    const firstPhrase = words.slice(0, 3).join(" ");
    if (firstPhrase === "Mothers & mothers-to-be") {
      boldedContent = (
        <span>
          <span className="font-bold">{firstPhrase}</span>{" "}
          {words.slice(3).join(" ")}
        </span>
      );
    }
  } else if (title === "Growing Up") {
    // Bolden only the first word for the second card
    const words = content.split(" ");
    if (words.length >= 1) {
      boldedContent = (
        <span>
          <span className="font-bold">{words[0] + " "}</span>
          {words.slice(1).join(" ")}
        </span>
      );
    }
  }

  return (
    <div  className="w-[18rem] h-[15rem] md:w-[90%] lg:w-[25rem] md:h-[16rem] md:max-h-[18rem] xl:max-h-[15rem] mx-auto px-5 md:px-3 lg:px-8 py-6 lg:py-8 rounded-md shadow border border-1 space-y-3 lg:space-y-4">
      <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
        <img className="w-10 md:w-12" src={`/assets/logo-${icon}.svg`} alt={title} />
        <h3 className="font-semibold md:text-2xl lg:text-lg">{title}</h3>
      </div>
      <p className="text-sm xl:leading-5 px-3">{boldedContent}</p>
    </div>
  );
}
