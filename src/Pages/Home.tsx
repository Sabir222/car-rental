import DefaultAccordion from "../Components/Accordion";
import CarCards from "../Components/CarCards";
import Hero from "../Components/Hero";
import Reservation from "../Components/Reservation";

const Home = () => {
  const cars = [
    {
      name: "Rolls roys",
      picture: "/rolls.png",
      gear: "automatic",
      type: "luxury saloon",
      capacity: 6,
      price: 490,
      litres: 70,
    },
    {
      name: "Duster",
      picture: "/duster.png",
      gear: "manual",
      type: "SUV",
      capacity: 6,
      price: 50,
      litres: 70,
    },
    {
      name: "Mercedes AMG",
      picture: "/amg.png",
      gear: "manual",
      type: "Sport",
      capacity: 4,
      price: 90,
      litres: 90,
    },
    {
      name: "Bently Continental",
      picture: "/bently.png",
      gear: "Automatic",
      type: "Luxury Car",
      capacity: 6,
      price: 350,
      litres: 70,
    },
    {
      name: "Bugatti",
      picture: "/bugatti.png",
      gear: "Automatic",
      type: "Luxury Car",
      capacity: 2,
      price: 750,
      litres: 80,
    },
    {
      name: "Chevy Camaro",
      picture: "/camaro.png",
      gear: "Automatic",
      type: "Sport",
      capacity: 4,
      price: 80,
      litres: 50,
    },
    {
      name: "Ferrari",
      picture: "/ferrari.png",
      gear: "Automatic",
      type: "Sport",
      capacity: 2,
      price: 150,
      litres: 60,
    },
    {
      name: "Ford Mustang",
      picture: "/mustang.png",
      gear: "Automatic",
      type: "Sport",
      capacity: 2,
      price: 80,
      litres: 40,
    },
  ];
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
