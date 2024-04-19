import PropTypes from "prop-types";

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func,

};

export function InputField({ label, id, register, ...rest}) {
  // Common styles
  const inputStyles =
    "text-xs lg:text-xs w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]";
  const labelStyles = "text-gray-600 uppercase font-semibold text-xs";

  return (
    <div>
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      <input id={id} className={inputStyles} {...register(id)} {...rest} />
    </div>
  );
}
