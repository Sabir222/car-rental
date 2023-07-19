import DefaultAccordion from "../Components/Accordion";
import CarCards from "../Components/CarCards";
import Hero from "../Components/Hero";
import Reservation from "../Components/Reservation";
import { cars } from "../cars";
const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <Reservation />

      <CarCards cars={cars} />
      <DefaultAccordion />
    </div>
  );
};

export default Home;
