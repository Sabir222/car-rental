import CarCards from "./Components/CarCards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Reservation from "./Components/Reservation";
function App() {
  const cars = [
    {
      name: "Rolls roys",
      picture: "/rolls.png",
      gear: "automatic",
      type: "luxury saloon",
      capacity: 6,
      price: 90,
      litres: 70,
    },
    {
      name: "duster",
      picture: "/duster.png",
      gear: "manual",
      type: "SUV",
      capacity: 6,
      price: 50,
      litres: 70,
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Reservation />
      <div className="justify-center sm:flex-wrap sm:flex">
        <CarCards cars={cars} />
      </div>

      <Footer />
    </>
  );
}

export default App;
