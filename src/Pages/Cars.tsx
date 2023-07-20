import CarCards from "../Components/CarCards";
import Hero from "../Components/Hero";
import { cars } from "../cars";

const Cars = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto ">
        <CarCards cars={cars} />
      </div>
    </div>
  );
};

export default Cars;
