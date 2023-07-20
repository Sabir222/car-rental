import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GiGearStick } from "react-icons/gi";
import { BiGasPump } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { Car } from "../cars";
import { useState } from "react";
interface CarCardsProps {
  cars: Car[];
}
const CarCards: React.FC<CarCardsProps> = (props) => {
  const [cars, setCars] = useState<Car[]>(props.cars.slice(1));
  const toggleHeart = (carId: number) => {
    const heartedcar = cars.map((car) => {
      return car.id === carId ? { ...car, liked: !car.liked } : car;
    });
    setCars(heartedcar);
  };
  return (
    <div className="justify-center sm:flex-wrap sm:flex ">
      {cars.map((car, index) => {
        return (
          <div className="px-6 pb-10 " key={index}>
            <div className="p-4 bg-white  sm:flex sm:flex-col sm:justify-between shadow-sm rounded-2xl sm:w-[250px] sm:h-[300px]">
              <div className="flex justify-between pb-4">
                <div>
                  <p className="text-lg font-bold">{car.name}</p>
                  <p className="text-gray-600">{car.type}</p>
                </div>
                <div>
                  <button onClick={() => toggleHeart(car.id)}>
                    {car.liked ? (
                      <AiFillHeart className="text-red-700" />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pb-4 sm:flex-col">
                <div className="relative">
                  <img
                    src={car.picture}
                    alt="car"
                    className=" w-[200px] object-cover h-[90px]"
                  />
                  <div className="absolute inset-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                <ul className="flex flex-col  sm:gap-6 sm:flex-row  justify-center text-[#90A3BF]">
                  <li className="flex items-center gap-1">
                    <BiGasPump /> {car.litres}
                  </li>
                  <li className="flex items-center gap-1">
                    <GiGearStick /> {car.gear}
                  </li>
                  <li className="flex items-center gap-1">
                    <BsFillPeopleFill /> {car.capacity}
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p>
                    ${car.price}/
                    <span className="text-[#90A3BF] text-sm">day</span>
                  </p>
                </div>
                <div>
                  <button className="px-5 py-3 font-medium text-white bg-blue-600 rounded-lg">
                    Rental Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarCards;
