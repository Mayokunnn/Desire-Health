import PropTypes from "prop-types";

export function RadioOption({ value, imageSrc, onChange }) {
  const handleChange = (event) => {
       onChange(event); 
  }

  return (
    <label className="custom-radio">
      <input
        type="radio"
        name="radio"
        value={value}
        onChange={(e) => {
         handleChange(e);
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
