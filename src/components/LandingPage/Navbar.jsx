import PropTypes from "prop-types";

import Button from "./Button";
import Logo from "../Logo";

Navbar.propTypes = {
  type: PropTypes.string,
  pageType: PropTypes.string,
};

export default function Navbar({ type = "", pageType = "" }) {
  let buttonText;
  let buttonType;

  if (type === "onboarding") {
    buttonText = "sign in";
    buttonType = "primary";
  } else {
    buttonText = "register";
    buttonType = "primary";
  }

  return (
    <div className="flex items-center justify-between px-6 py-3 lg:px-16 lg:py-6 w-full z-50">
      <Logo color={pageType !== "header" ? "onboarding" : "header"} />

      <div className="hidden lg:flex gap-6 items-center justify-center">
        {pageType === "header" && <Button type="transparent" text="Sign In" />}
        <Button
          type={buttonType}
          text={buttonText}
          pageType={pageType === "header" ? "header" : ""}
        />
      </div>
      <img
        className="lg:hidden w-6"
        src={`${
          pageType === "header"
            ? "/assets/menu-icon.svg"
            : "/assets/menu-icon-black.svg"
        }`}
        alt="Menu Icon"
      />
    </div>
  );
}
