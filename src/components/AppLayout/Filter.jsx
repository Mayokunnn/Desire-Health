import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export const Filter = ({filterField, options }) => {
    const [searchParams , setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    const handleClick =(value) => {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    } 
  return (
    <div className="bg-[#E6E9EB] p-1 rounded-sm space-x-2">
      {options.map((opt) => (
        <button
        onClick={() =>handleClick(opt.value)}
          key={opt.value}
          className={`${opt.value === currentFilter ? "bg-azure-radiance-700 rounded-md text-white" : ""} text-base px-2 py-1`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  options: PropTypes.array,
  filterField: PropTypes.string,
};
