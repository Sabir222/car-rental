import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-white w-full sm:h-[70px] h-[300px] shadow-lg">
      <div className="flex  md:items-center justify-between">
        <div className=" p-4  flex gap-8 flex-col sm:flex-row">
          <img src="src/assets/logo.png" className="w-16" alt="logo" />
          <input
            type="text"
            className="border rounded-3xl sm:w-[350px] h-10 px-7 w-[300px]"
            placeholder="Search something here..."
          />
        </div>
        <div className=" p-2 md:flex">
          <button>
            <AiOutlineMenu size={30} className="md:hidden" />
          </button>
          <div className="md:flex gap-6 pr-10 hidden ">
            <ul className="flex gap-7">
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
