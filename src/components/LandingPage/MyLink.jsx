
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

MyLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function MyLink({ to, text, className }) {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
}

