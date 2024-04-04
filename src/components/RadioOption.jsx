import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function RadioOption({ value, imageSrc, onChange }) {
  const navigate = useNavigate();
  const handleChange = (event) => {
       onChange(event); 
       navigate(event.target.value);
  }

  return (
    <label className="custom-radio">
      <input
        type="radio"
        name="radio"
        value={value}
        onChange={(e) => {
         handleChange(e);
         console.log(e.target.value);
        }}
      />
      <img src={imageSrc} className="w-4 h-4" alt={value} />
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </label>
  );
}


RadioOption.propTypes = {
  value: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
