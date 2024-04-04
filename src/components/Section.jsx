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
          ? "bg-[#f3f3f3] px-24 "
          : "bg-white px-48 py-12 min-h-[80vh] m-auto"
      } space-y-6  ${type === "about" ? "bg-about-bg bg-cover py-12" : ""} ${
        type === "footer" ? " pb-6 pt-12" : ""
      }`}
    >
      {children}
    </div>
  );
}
