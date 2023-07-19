import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-white  w-full md:h-[70px] h-[300px] shadow-lg">
        <div className="flex max-w-[1300px] mx-auto md:items-center justify-between">
          <div className="flex flex-col gap-8 px-10 pt-2 sm:flex-row">
            <Link to="/">
              {" "}
              <img src="/logo.png" className="w-16 text-blue-400" alt="logo" />
            </Link>
            <div className="relative">
              <input
                type="text"
                className="border  rounded-3xl sm:w-[300px] h-10 px-12 w-[90%]"
                placeholder="Search something here..."
              />
              <div className="absolute inset-y-0 flex items-center pointer-events-none left-4">
                <AiOutlineSearch size={20} color="#808080" className="" />
              </div>
            </div>
          </div>
          <div className="p-0 md:flex">
            <button onClick={handleClick}>
              <AiOutlineMenu size={30} className="md:hidden text-[#3D5278]" />
            </button>
            <div className="hidden gap-6 pr-10 md:flex ">
              <ul className="flex gap-7">
                <li className="text-[#3D5278]">
                  <Link className="text-[#3D5278] font-semibold" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-[#3D5278] font-semibold" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="text-[#3D5278] font-semibold" to="/contact">
                    Contact
                  </Link>
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
        <div className="flex justify-end p-2">
          <button onClick={handleClick}>
            <AiOutlineClose size={30} className="text-[#3D5278]" />
          </button>
        </div>
        <ul className="flex gap-32  flex-col justify-center items-center text-5xl font-semi-bold h-[100vh]">
          <li>
            <Link className="text-[#3D5278]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-[#3D5278]" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="text-[#3D5278]" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
