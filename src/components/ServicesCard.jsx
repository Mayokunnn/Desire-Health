import PropTypes from "prop-types";
import { createUser } from "../services/createUsers";

ServicesCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
};

export default function ServicesCard({ title, content, icon }) {
const handleClick = async () => {
  try {
    const user = await createUser({ name: "Adeolu", email: "kkk@gmail.com" });
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

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
    <div onClick={handleClick} className="max-w-[80%]  max-h-[85%] lg:max-h-fit lg:max-w-fit shrink-0 px-5 lg:px-8 py-6 lg:py-8 rounded-md shadow border border-1 space-y-4">
      <div className="grid grid-cols-[auto_1fr] items-center justify-start gap-2">
        <img className="w-10" src={`/assets/logo-${icon}.svg`} alt={title} />
        <h3 className="font-semibold md:text-2xl lg:text-lg">{title}</h3>
      </div>
      <p className="text-sm md:text-xl lg:text-sm lg:leading-9">{boldedContent}</p>
    </div>
  );
}
