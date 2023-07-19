const Footer = () => {
  return (
    <div className=" md:bg-white">
      <div className="h-auto  md:px-4 max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between ">
          <div className="p-6">
            <p className="text-[#3563E9] font-bold text-3xl pb-4">
              GearShifters
            </p>
            <p className="text-[#90A3BF]  pb-2">Your Journey,Our Wheels</p>
            <p className="text-[#90A3BF]">
              Our objective is to provide comfort.
            </p>
          </div>
          <div className="flex flex-wrap p-6 text-md">
            <div className="pr-[35px] pb-10 flex flex-col">
              <div className="font-bold pb-4 text-[#1A202C]">
                <a href="/about">About</a>
              </div>
              <div className="pb-2 text-[#90A3BF]">How it works</div>
              <div className="pb-2 text-[#90A3BF]">Featured</div>
              <div className="text-[#90A3BF]">Partnership</div>
            </div>
            <div className="pr-[35px] flex flex-col">
              <div className="font-bold pb-4 text-[#1A202C]">Community</div>
              <div className="pb-2 text-[#90A3BF]">Events</div>
              <div className="pb-2 text-[#90A3BF]">Blogs</div>
              <div className="text-[#90A3BF]">Podcats</div>
            </div>
            <div className="] flex flex-col">
              <div className="font-bold pb-4 text-[#1A202C]">Socials</div>
              <div className="pb-2 text-[#90A3BF]">Discord</div>
              <div className="pb-2 text-[#90A3BF]">Instagram</div>
              <div className="pb-2 text-[#90A3BF]">Twitter</div>
            </div>
          </div>
        </div>
        <hr className="pb-6 border-gray-300 border-t-1 " />

        <div className="flex flex-col p-6 text-sm font-semibold md:flex-row md:justify-between md:px-6">
          <div className="order-2 md:order-1">
            <p>2023 GearShifters . All rights reserved</p>
          </div>
          <div className="flex justify-between order-1 pb-6 md:order-2">
            <p>Policy & Privacy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
