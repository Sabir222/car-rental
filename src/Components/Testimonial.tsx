import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonial = () => {
  return (
    <div className="max-w-[1400px] mx-auto mb-10">
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-2 text-xl font-semibold">Reviewed by People</p>
        <p className="mb-2 text-5xl font-bold text-blue-700">Client's Testimonials</p>
        <p className="text-[#90A3BF]">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-6 gap-9">
        <div className="bg-white shadow-lg justify-center rounded-2xl items-center p-4 flex flex-col w-[300px] sm:w-[500px]">
          <div>
            <p className="mb-4 font-semibold text-center ">
              As an international spy, I find myself in need of reliable
              transportation that matches my standards of excellence and ensures
              a smooth and discreet ride. I'm thrilled to say that
              GearShifters's car rental service exceeded all expectations,
              making it my go-to choice for any mission.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <img src="/bond.png" alt="image" className="w-16 rounded-full" />
            </div>
            <div>
              <p className="text-lg font-bold">James Bond</p>
              <p className="text-[#90A3BF]">MI6 agent</p>
            </div>
            <div>
              <BiSolidQuoteAltRight size={40} className="text-blue-700" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg justify-center rounded-2xl items-center p-4 flex flex-col w-[300px] sm:w-[500px]">
          <div>
            <p className="mb-4 font-semibold text-center ">
              When I needed a car that could match my skills and intensity on a
              mission, I turned to GearShifters's Chevy Challenger, and it did
              not disappoint. From the moment I stepped into the driver's seat,
              I felt an instant connection with this powerhouse of a machine.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <img src="/wick.png" alt="image" className="w-16 rounded-full" />
            </div>
            <div>
              <p className="text-lg font-bold">John Wick</p>
              <p className="text-[#90A3BF]">Trained Assasin</p>
            </div>
            <div>
              <BiSolidQuoteAltRight size={40} className="text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
