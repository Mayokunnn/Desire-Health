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
          ? "bg-[#f3f3f3] px-4 py-6 md:px-8 lg:px-32  "
          : "bg-white xl:px-40 px-2 md:px-3 py-8 lg:py-16 m-auto"
      } space-y-8 max-h-[100vh] w-[100vw]  ${type === "about" ? "bg-about-bg bg-cover py-8 lg:py-12 " : ""} ${
        type === "footer" ? "pb-2 lg:pb-6 py-6 lg:pt-12" : ""
      }`}
    >
      {children}
    </div>
  );
}
