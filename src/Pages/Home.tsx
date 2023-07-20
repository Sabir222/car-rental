import { Link } from "react-router-dom";
import DefaultAccordion from "../Components/Accordion";
import CarCards from "../Components/CarCards";
import Hero from "../Components/Hero";
import Reservation from "../Components/Reservation";
import { cars } from "../cars";
import Testimonial from "../Components/Testimonial";
const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <Reservation />
      <div className="max-w-[1400px] mx-auto mt-[50px]">
        <div className="flex flex-col">
          <div className="px-10 pb-6 text-[#90A3BF] mb-4">Most Popular</div>
          <CarCards cars={cars} />
          <div className="px-10 pb-6">
            <Link to="/cars">
              <button className="w-[120px] mt-4  h-[40px] font-medium text-white bg-blue-600 rounded-lg">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <DefaultAccordion />
      <Testimonial />
    </div>
  );
};

export default Home;
