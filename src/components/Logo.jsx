import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

Logo.propTypes = {
  color: PropTypes.string,
};

export default function Logo({ color }) {
  const navigate = useNavigate();
  const colorHeader =
    color === "header"
      ? "text-white text-lg lg:text-3xl"
      : color === "footer"
      ? "text-azure-radiance-600 text-2xl"
      : color === "onboarding"
      ? "text-azure-radiance-600 text-lg lg:text-2xl"
      : "text-black";

  if (color === "app")
    return (
      <h2
        onClick={() => navigate("/app")}
        className={`capitalize cursor-pointer text-azure-radiance-800 open-sans font-bold break-all leading-none text-base lg:text-xl`}
      >
        DESIREhealth
      </h2>
    );

  return (
    <h2
      onClick={() => navigate("/")}
      className={`capitalize cursor-pointer open-sans font-bold break-all leading-none ${colorHeader}`}
    >
      DESIREhealth
    </h2>
  );
}
