import PropTypes from "prop-types";
import { formatDate } from "../../utils/helpers";
import ActivityItem from "./ActivityItem";

export default function Activities({
  day,
  className = "bg-white p-2 w-full space-y-2 overflow-auto",
}) {
  return (
    <div className={className}>
      <h3 className="font-medium">Upcoming Activities</h3>
      {day && <div className="text-sm">{formatDate(day)}</div>}
      <div className="space-y-2 overflow-y-auto">
        <ActivityItem
          widget={"EduQu Guest Speaker: Mrs. Hilda Bassey"}
          time={"8:00"}
        />
        <ActivityItem
          widget={"EduQu Guest Speaker: Mrs. Hilda Bassey"}
          time={"8:00"}
        />
        <ActivityItem
          widget={"EduQu Guest Speaker: Mrs. Hilda Bassey"}
          time={"8:00"}
        />
      </div>
    </div>
  );
}

Activities.propTypes = {
  day: PropTypes.object,
  className: PropTypes.string,
};
