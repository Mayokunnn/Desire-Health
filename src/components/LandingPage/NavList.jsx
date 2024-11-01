import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
NavList.propTypes = {
  navItems: PropTypes.array,
  type: PropTypes.string,
};

export default function NavList({ navItems, type = "" }) {
  return (
    <ul className="hidden lg:flex space-x-3 text-lg">
      {navItems.map((item, i) => (
        <li key={i}>
          <NavLink
            to={`/${
              item.toLowerCase() === "home"
                ? ""
                : item.toLowerCase().replace(/\s/g, "")
            }`}
            activeclassname='active'
            className={`${
              type === "onboarding"
                ? "text-gray-800 font-medium"
                : "text-white font-normal"
            } `}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
