import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  pageType: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Button({
  type = "primary",
  text = "register",
  pageType = "",
  onClick = function(){}
}) {
  let buttonContent;
  let linkTo;

  if (type === "primary") {
    if (pageType === "header") {
      buttonContent = "Register";
      linkTo = "/onboarding/register"; // Set the link for Sign Up
    } else if (text === "register") {
      buttonContent = "Sign In";
      linkTo = "/onboarding/login"; // Set the link for Sign In
    } else {
      buttonContent = "Register";
      linkTo = "/onboarding/register"; // Set the link for Register
    }
    return (
      <Link
        to={linkTo}
        className={`text-white text-sm lg:text-lg capitalize bg-azure-radiance-600 px-4 max-w-3-6 py-2 rounded hover:bg-azure-radiance-700 transition`}
      >
        {text === "register" || text === "sign in" ? buttonContent : text}
      </Link>
    );
  }
  if (type === "secondary") {
    return (
      <button className="text-white bg-[#66748c] text-xs px-4 py-2 max-w-3-6 rounded hover:bg-[#535f76] transition capitalize">
        {text}
      </button>
    );
  }
  // if (type === "small") {
  //   return (
  //     <button className="text-white text-xs bg-azure-radiance-600 ml-3 px-3 max-w-3-6 py-1.5 rounded hover:bg-azure-radiance-700 transition capitalize">
  //       {text}
  //     </button>
  //   );
  // }
  if (type === "transparent") {
    return (
      <Link
        to="/onboarding"
        className=" text-white text-lg font-medium capitalize border-white border px-4 py-1.5 rounded-sm hover:bg-white hover:text-gray-950 transition-colors"
      >
        Login
      </Link>
    );
  }
  if (type === "form") {
    return (
      <button onClick={onClick} className="text-white text-xs bg-azure-radiance-600 flex items-center justify-center w-full py-2 rounded hover:bg-azure-radiance-700 transition capitalize">
        {text}
      </button>
    );
  }

  return null;
}
