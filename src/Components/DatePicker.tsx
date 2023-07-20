import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const DatePickerComp = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
    />
  );
};

export default DatePickerComp;

// interface DateRange {
//   startDate: Date | null;
//   endDate: Date | null; // Fix 1: Correct the type to Date
// }

// const DatePicker: React.FC = () => {
//   const [value, setValue] = useState<DateRange>({
//     startDate: new Date(),
//     endDate: new Date(new Date().setMonth(new Date().getMonth() + 11)), // Fix 2: Create a new Date object with the adjusted month
//   });

//   const handleValueChange = (newValue: DateRange) => {
//     console.log("newValue:", newValue);
//     setValue(newValue);
//   };

//   return <Datepicker value={value} onChange={() => handleValueChange} />;
// };

// export default DatePicker;
