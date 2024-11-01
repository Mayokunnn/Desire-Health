import PropTypes from "prop-types";
import MyLink from "./MyLink";

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  pageType: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default function Button({
  type = "primary",
  text = "register",
  pageType = "",
  children,
  onClick = () => {},
}) {
  let buttonContent;
  let linkTo;

  if (type === "primary") {
    if (pageType === "header") {
      buttonContent = "Register";
      linkTo = "/onboarding/register"; // Set the link for Sign  from homepage
    } else if (text === "register") {
      buttonContent = "Sign In";
      linkTo = "/onboarding/login"; // Set the link for Sign In
    } else {
      buttonContent = "Register";
      linkTo = "/onboarding/register"; // Set the link for Register
    }
    return (
      <MyLink
        to={linkTo}
        text={text === "register" || text === "sign in" ? buttonContent : text}
        className={`text-white text-sm md:text-base lg:text-lg capitalize bg-azure-radiance-600 px-4 max-w-3-6 py-2 rounded hover:bg-azure-radiance-700 transition`}
      />
    );
  }
  if (type === "secondary") {
    return (
      <button
        onClick={onClick}
        className="text-white text-sm md:text-base  bg-[#969799] px-4 py-2 max-w-3-6 rounded hover:bg-[#535f76] transition capitalize"
      >
        {text}
      </button>
    );
  }

  if (type === "app") {
    return (
      <button
        onClick={onClick}
        className="text-white text-xs flex items-center gap-1 lg:text-sm  bg-azure-radiance-600 px-2 py-1.5 max-w-3-6 rounded hover:bg-azure-radiance-700 transition capitalize"
      >
        {text}
        <span className="hidden lg:inline-block">{children}</span>
      </button>
    );
  }
  if (type === "transparent") {
    return (
      <MyLink
        to="/onboarding"
        text="Login"
        className="text-white text-sm md:text-base lg:text-lg font-medium capitalize border-white border px-4 py-1.5 rounded-sm hover:bg-white hover:text-gray-950 transition-colors"
      />
    );
  }
  if (type === "form") {
    return (
      <button
        onClick={onClick}
        className="text-white text-sm md:text-base lg:text-sm  bg-azure-radiance-600 flex items-center justify-center w-full py-2 rounded hover:bg-azure-radiance-700 transition capitalize"
      >
        {text}
      </button>
    );
  }

  return null;
}
