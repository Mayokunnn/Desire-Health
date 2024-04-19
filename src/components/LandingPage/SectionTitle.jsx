import PropTypes from "prop-types";

SectionTitle.propTypes = {
  side: PropTypes.string,
  title: PropTypes.string,
};
export default function SectionTitle({ side, title }) {
  const position = side === "left" ? "title--left" : "title--right";
  console;
  return (
    <h3
      className={`${position} mx-4 inline-block capitalize text-grey-800 text-xl md:text-2xl lg:text-3xl font-medium`}
    >
      {title}
    </h3>
  );
}
