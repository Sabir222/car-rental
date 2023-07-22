import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

interface DateValue {
  startDate: Date | null;
  endDate: Date | null;
}
interface ReservationDataProps {
  DateData: (data: DateValue[]) => void;
}

const DatePickerComp = ({ DateData }: ReservationDataProps) => {
  const [value, setValue] = useState<DateValue>({
    startDate: null,
    endDate: null,
  });
  const handleDateChange = (date: DateValue) => {
    setValue(date);
    DateData([date]);
  };

  return (
    <Datepicker
      value={value}
      onChange={(date) => handleDateChange(date as DateValue)}
      showShortcuts={true}
    />
  );
};

export default DatePickerComp;
