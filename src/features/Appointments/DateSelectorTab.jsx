import PropTypes from "prop-types";
import { useState } from "react";
import { formatDate } from "../../utils/helpers";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DateSelectorTab = ({ initialDate = new Date(), onDateChange, daysShown = 7}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const [startDate, setStartDate] = useState(initialDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    onDateChange(date);
  };

  const handlePrevDay = () => {
    const newStartDate = new Date(startDate);

    newStartDate.setDate(startDate.getDate() - 1);

    setStartDate(newStartDate);
    setSelectedDate(newStartDate)

  };

  const handleNextDay = () => {
    const newStartDate = new Date(startDate);

    newStartDate.setDate(startDate.getDate() + 1);

    setStartDate(newStartDate);
    setSelectedDate(newStartDate)
  };

  return (
    <div>
      <div className="flex items-center w-full gap-2 lg:gap-6">
        <IoIosArrowBack
          className="flex cursor-pointer items-center justify-center"
          size={20}
          onClick={handlePrevDay}
        />

        {[...Array(daysShown)].map((_, i) => {
          const date = new Date(startDate);

          date.setDate(date.getDate() + i);

          const formattedDay = `${date.toLocaleDateString("en-US", {
            weekday: "short",
          })} `;

          const formattedDate = `${date.getDate()}`;

          const isSelected =
            date.toDateString() === selectedDate.toDateString();

          return (
            <div
              key={i}
              className={`${
                isSelected ? "bg-azure-radiance-600 rounded-md text-white" : ""
              } px-1.5 text-sm lg:px-3 py-1 lg:py-1.5 text-center hover:cursor-pointer `}
              onClick={() => handleDateChange(date)}
            >
              {formattedDay}
              
              <p className="font-semibold text-lg">{formattedDate}</p>
            </div>
          );
        })}

        <IoIosArrowForward
          className="flex cursor-pointer items-center justify-center"
          size={20}
          onClick={handleNextDay}
        />
      </div>

      <div className="mt-3 flex text-base lg:text-lg lg:font-semibold items-center justify-center">{formatDate(selectedDate)}</div>
    </div>
  );
};

export default DateSelectorTab;

DateSelectorTab.propTypes = {
  onDateChange: PropTypes.func,
  initialDate: PropTypes.object,
  daysShown: PropTypes.number,
};
