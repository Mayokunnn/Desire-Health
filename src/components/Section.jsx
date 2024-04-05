import PropTypes from "prop-types";

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
};

export default function Section({ children, color, type = "" }) {
  return (
    <div
      className={`${
        color === "grey"
          ? "bg-[#f3f3f3] px-4 md:px-8 lg:px-32  "
          : "bg-white px-4 lg:px-48 py-8 lg:py-12 m-auto"
      } space-y-8  ${type === "about" ? "bg-about-bg bg-cover py-8" : ""} ${
        type === "footer" ? "pb-2 lg:pb-6 py-6 lg:pt-12" : ""
      }`}
    >
      {children}
    </div>
  );
}
