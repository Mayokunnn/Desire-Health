import PropTypes from "prop-types";

export default function ActivityItem({ time = "", widget }) {
  return (
    <div className="px-2 py-2 my-2 bg-[#F2F4F7]">
      <div className="border-purple-500 border-l-8 rounded-md px-1 grid grid-cols-[1fr_auto]">
        <h3 className="lg:text-lg">{widget}</h3>
        <span className="text-sm lg:text-lg text-[#63697A]">{time}</span>
      </div>
    </div>
  );
}

ActivityItem.propTypes ={
  time: PropTypes.string,
  widget: PropTypes.string
}