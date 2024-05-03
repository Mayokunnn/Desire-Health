import PropTypes from "prop-types";
import { formatDate } from "../../utils/helpers";

export default function Activities({ day }) {
    
  return (
    <div className="bg-white p-2 w-full space-y-2">
      <h3 className="font-medium">Upcoming Activities</h3>
      <div>{day && <div className="text-sm">{formatDate(day)}</div>}</div>
    </div>
  );
}

Activities.propTypes = {
  day: PropTypes.object,
};
