import { useEffect, useState } from "react";

export default function useCalendar( onDateSelect ) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [previousMonth, setPreviousMonth] = useState(null);

  // Update selected date only when the month changes
  useEffect(() => {
    const currentMonth = currentDate.getMonth();
    if (previousMonth !== null && previousMonth !== currentMonth) {
      setSelectedDate(null); // Reset selectedDate if the month changes
    }
    setPreviousMonth(currentMonth);
  }, [currentDate, previousMonth]);

  const handleClick = (day) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    setSelectedDate(day);
    onDateSelect &&
      onDateSelect(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return {
    handleNextMonth,
    handleClick,
    handlePrevMonth,
    selectedDate,
    currentDate,
  };
}
