import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

interface DateValue {
  startDate: Date | null;
  endDate: Date | null;
}
const DatePickerComp = () => {
  const [value, setValue] = useState<DateValue>({
    startDate: null,
    endDate: null,
  });
  const handleDateChange = (date: DateValue) => {
    setValue(date);
  };
  // const handleValueChange = (newValue: DateValue) => {
  //   console.log("newValue:", newValue);
  //   setValue(newValue);
  // };
  return (
    <Datepicker
      value={value}
      onChange={(date) => handleDateChange(date as DateValue)}
      showShortcuts={true}
    />
  );
};

export default DatePickerComp;


