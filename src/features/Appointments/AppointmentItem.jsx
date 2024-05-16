import ActivityItem from "./ActivityItem";
import PropTypes from "prop-types";


export default function AppointmentItem({data}) {
    const groupedWidgets = data.reduce((acc, { time, widget }) => {
        if (!acc[time]) {
          acc[time] = [];
        }
        acc[time].push(widget);
        return acc;
      }, {});

    
      return (
        <div>
          {Object.entries(groupedWidgets).map(([time, widgets], index) => (
            <div className="text-lg" key={index}> 
                <h2 className="text-lg font-semibold">{time}</h2>
                {widgets.map((content, index) => <ActivityItem key={index}  widget={content} />)}
            </div>
          ))}
        </div>
      );
}

AppointmentItem.propTypes = {
    data : PropTypes.array
}
