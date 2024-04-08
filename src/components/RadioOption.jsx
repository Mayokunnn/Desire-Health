import PropTypes from "prop-types";

export function RadioOption({ value, imageSrc, name, register }) {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        name={name}
        value={value}
        {...register(name)}
      />
      <img src={imageSrc} className="w-4 h-4" alt={value} />
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </label>
  );
}

RadioOption.propTypes = {
  value: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  register: PropTypes.func,
  name: PropTypes.string,
};
