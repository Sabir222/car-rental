import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-white  w-full sm:h-[70px] h-[300px] shadow-lg">
        <div className="flex max-w-[1300px] mx-auto md:items-center justify-between">
          <div className=" px-10 pt-2  flex gap-8 flex-col sm:flex-row">
            <img src="/logo.png" className="w-16 text-blue-400" alt="logo" />
            <div className="relative">
              <input
                type="text"
                className="border  rounded-3xl sm:w-[350px] h-10 px-12 w-[300px]"
                placeholder="Search something here..."
              />
              <div className="absolute inset-y-0 left-4  flex items-center pointer-events-none">
                <AiOutlineSearch size={20} color="#808080" className="" />
              </div>
            </div>
          </div>
          <div className=" p-2 md:flex">
            <button onClick={handleClick}>
              <AiOutlineMenu size={30} className="md:hidden text-[#3D5278]" />
            </button>
            <div className="md:flex gap-6 pr-10 hidden ">
              <ul className="flex gap-7">
                <li className="text-[#3D5278]">
                  <a className="text-[#3D5278] font-semibold" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-[#3D5278] font-semibold" href="/about">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-[#3D5278] font-semibold" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden z-10 fixed top-0 left-0  bg-white opacity-100 w-full ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <div className="p-2 flex justify-end">
          <button onClick={handleClick}>
            <AiOutlineClose size={30} className="text-[#3D5278]" />
          </button>
        </div>
        <ul className="flex gap-32  flex-col justify-center items-center text-5xl font-semi-bold h-[100vh]">
          <li>
            <a className="text-[#3D5278]" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="text-[#3D5278]" href="/about">
              About us
            </a>
          </li>
          <li>
            <a className="text-[#3D5278]" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
