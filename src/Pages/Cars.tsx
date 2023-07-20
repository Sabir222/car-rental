import CarCards from "../Components/CarCards";
import Hero from "../Components/Hero";
import { cars } from "../cars";

const Cars = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto mt-[50px]">
        <div className="flex flex-col">
          <div className="px-10 pb-6 text-[#90A3BF] mb-4">All cars</div>
          <CarCards cars={cars} />
          <div className="px-10 pb-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
