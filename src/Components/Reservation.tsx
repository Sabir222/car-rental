import { AiFillCar, AiOutlineFieldTime } from "react-icons/ai";
import { FaArrowRightToCity, FaLocationDot } from "react-icons/fa6";
import SelectCar from "./SelectCarMenu";
import SelectCity from "./selectCityMenu";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="p-6 pt-[100px] md:pt-[0]">
      <div className="p-4 mt-2  bg-white rounded-2xl  max-w-[1400px] mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-blue-700">book a car</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-5 md:justify-center">
          <div className="mb-6 md:w-[25%]">
            <div className="flex items-center">
              <AiFillCar className="text-blue-700" />
              <h1 className="px-2 pb-1">
                Select your car 
                <span className="text-blue-700"> &#42;</span>
              </h1>
            </div>

            <SelectCar />
          </div>
          <div className="mb-6 md:w-[25%]">
            <div className="flex items-center">
              <FaLocationDot className="text-blue-700" />
              <h1 className="px-2 pb-1">
                Pick up
                <span className="text-blue-700"> &#42;</span>
              </h1>
            </div>

            <SelectCity />
          </div>
          <div className="mb-6 md:w-[25%]">
            <div className="flex items-center">
              <FaArrowRightToCity className="text-blue-700" />
              <h1 className="px-2 pb-1">
                Drop off
                <span className="text-blue-700"> &#42;</span>
              </h1>
            </div>

            <SelectCity />
          </div>
          <div className="mb-6 md:w-[25%]">
            <div className="flex items-center">
              <AiOutlineFieldTime className="text-blue-700" />
              <h1 className="px-2 pb-1">
                Select Duration
                <span className="text-blue-700"> &#42;</span>
              </h1>
            </div>

            <Datepicker value={selectedDate} onChange={handleDateChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
