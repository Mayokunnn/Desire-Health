import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useCalendar from "../../hooks/useCalendar";

const Calendar = ({ onDateSelect }) => {
const {handleNextMonth, handleClick, handlePrevMonth, selectedDate, currentDate} = useCalendar(onDateSelect)
  const renderCalendar = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const today = new Date();
    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    // Calculate the day numbers for the entire month, including days from the previous and next months
    const daysArray = Array.from({ length: 35 }, (_, index) => {
      const dayOffset = index - startDay + 1;
      if (dayOffset <= 0) {
        return (
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
          ).getDate() + dayOffset
        );
      } else if (dayOffset > daysInMonth) {
        return dayOffset - daysInMonth;
      } else {
        return dayOffset;
      }
    });

    return daysArray.map((day, index) => {
      const isCurrentMonth =
        index >= startDay && index < startDay + daysInMonth;
      const isToday =
        isCurrentMonth &&
        day === today.getDate() &&
        currentDate.getMonth() === today.getMonth() && // Check if the month is the current month
        currentDate.getFullYear() === today.getFullYear(); // Check if the year is the current year
      const isSelected = selectedDate === day;
      const dayClass = isCurrentMonth ? "font-semibold" : "font-extralight";

      return (
        <div
          key={index}
          className={`${dayClass} ${
            isToday &&
            "border-b-4 border-azure-radiance-600 text-azure-radiance-600 rounded-sm"
          } ${
            isSelected && "text-azure-radiance-600"
          } text-center cursor-pointer hover:text-azure-radiance-600`}
          onClick={isCurrentMonth ? () => handleClick(day) : null}
        >
          {day}
        </div>
      );
    });
  };

  return (
    <div className="grid grid-rows-[auto_1fr0] text-lg gap-5">
      <div className="flex justify-between items-center">
        <IoIosArrowBack
          className="flex cursor-pointer items-center justify-center "
          size={20}
          onClick={handlePrevMonth}
        />
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <IoIosArrowForward
          className="flex cursor-pointer items-center justify-center"
          size={20}
          onClick={handleNextMonth}
        />
      </div>
      <div className="grid grid-cols-7 gap-6 w-full">
        <div className="font-normal">S</div>
        <div className="font-normal">M</div>
        <div className="font-normal">T</div>
        <div className="font-normal">W</div>
        <div className="font-normal">T</div>
        <div className="font-normal">F</div>
        <div className="font-normal">S</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  onDateSelect: PropTypes.func,
};

export default Calendar;
