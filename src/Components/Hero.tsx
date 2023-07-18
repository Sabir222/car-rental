const Hero = () => {
  return (
    <div>
      <div className="s flex px-6 py-4 gap-4 max-w-[1400px] mx-auto">
        <div className="h-[270px] w-[90%] bg-gradient-to-r from-cyan-500 to-blue-500 absolute md:static top-[150px] left-6 rounded-2xl p-4">
          <div className="pb-2">
            <h1 className="pb-4 text-lg font-medium text-white">
              The Best Platform for Car Rental
            </h1>
            <p className="pb-2 text-sm text-white opacity-80">
              Ease of doing a car rental safely and reliabli.Of course at a low
              price
            </p>
            <button className="px-8 py-4 font-medium text-white bg-blue-600 rounded-lg">
              Rental Car
            </button>
          </div>
          <div className="flex justify-center ">
            <img src="/rolls.png" className="absolute w-[200px] sm:w-[260px]" />
          </div>
        </div>
        <div className="h-[270px] w-[90%] hidden md:block bg-gradient-to-r from-cyan-900 to-blue-300 absolute sm:static top-[150px] left-6 rounded-md p-4">
          <div className="pb-2">
            <h1 className="pb-4 text-lg font-medium text-white">
              Easy way to rent a car a low price
            </h1>
            <p className="pb-2 text-sm text-white opacity-80">
              Provinding cheap car rental services since 1390 BC
            </p>
            <button className="px-8 py-4 font-medium text-white bg-blue-600 rounded-lg">
              Rental Car
            </button>
          </div>
          <div className="flex justify-center ">
            <img src="/bugatti.png" className="absolute w-[260px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
