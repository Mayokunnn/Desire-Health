import PropTypes from "prop-types";

import Button from "./Button";
import Logo from "./Logo";
import NavList from "./NavList";

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
    <div className="flex items-center justify-between px-6 py-3 lg:px-16 lg:py-6 w-full">
      <Logo color={pageType !== "header" ? "onboarding" : "header"} />
      <NavList
        type={pageType}
        navItems={[
          "Home",
          "About Us",
          "Services",
          "Join Us",
          "Blogs",
          "Forums",
          "Contact Us",
        ]}
      />
      <div className=":flex gap-6 items-center justify-center">
        {pageType === "header" && <Button type="transparent" text="Sign In" />}
        <Button
          type={buttonType}
          text={buttonText}
          pageType={pageType === "header" ? "header" : ""}
        />
      </div>
      <img
        className={`w-6 ${pageType !== "header" ? "hidden" : ""}`}
        src="/assets/menu-icon.svg"
        alt="Menu Icon"
      />
    </div>
  );
}
