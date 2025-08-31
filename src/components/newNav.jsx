import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/OlderCommuLOGO.png";

export default function newNav() {
  //MenuHamburger บนขวา
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //ไว้สลับค่า True กับ False
  };
  const menuOpen = isMenuOpen ? "bx-x" : "";
  const navOpen = isMenuOpen ? "open" : "";

  return (
    <div className="p-0 m-0 box-border list-none no-underline">
      <header className="fixed w-full top-0 right-0 z-1000 py-[20px] px-[9%] flex items-center justify-between transition-all duration-600 ease-in max-[1820px]:px-[4%] max-[1820px]:py-[22px] max-[1160px]:px-[4%] max-[1160px]:py-0">
        {/*Logo*/}
        <Link to="/" data-aos="flip-left" data-aos-duration="1500">
          <img
            src={logo}
            alt=""
            className="w-[140px] h-auto transition-all duration-500 ease-in-out hover:scale-120 max-[1210px]:w-[110px]"
          />
        </Link>
        {/*Menu*/}
        <ul
          className={`flex gap-y-[20px] gap-x-[70px] max-[1160px]:absolute max-[1160px]:top-0 max-[1160px]:w-full max-[1160px]:h-screen max-[1160px]:flex-col max-[1160px]:backdrop-blur-[20px] max-[1160px]:flex max-[1160px]:items-center max-[1160px]:justify-center max-[1160px]:transition-all max-[1160px]:duration-500 max-[1160px]:ease-in-out 
            ${
              isMenuOpen ? "max-[1160px]:right-0" : "max-[1160px]:right-[-100%]"
            }`}
        >
          <li className="max-[1160px]:mt-[130px]">
            <Link
              to="/"
              className="inline-block text-[1.3rem] font-normal text-[#e2e2e2] py-1 uppercase border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:text-[#ffa500] hover:border-b-2 hover:border-white hover:scale-[1.2] max-[1160px]:block max-[1160px]:text-[2.2rem]"
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              to="/Game1"
              className="inline-block text-[1.3rem] font-normal text-[#e2e2e2] py-1 uppercase border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:text-[#ffa500] hover:border-b-2 hover:border-white hover:scale-[1.2] max-[1160px]:text-[2.2rem]"
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/Game2"
              className="inline-block text-[1.3rem] font-normal text-[#e2e2e2] py-1 uppercase border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:text-[#ffa500] hover:border-b-2 hover:border-white hover:scale-[1.2] max-[1160px]:text-[2.2rem]"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Main"
              className="inline-block text-[1.3rem] font-normal text-[#e2e2e2] py-1 uppercase border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:text-[#ffa500] hover:border-b-2 hover:border-white hover:scale-[1.2] max-[1160px]:text-[2.2rem] "
            >
              About Us
            </Link>
          </li>
        </ul>
        {/*Menu-Right*/}
        <div
          className="flex items-center gap-5"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <Link to="/">
            <i class="ri-search-line inline-flex items-center justify-center h-[45px] w-[45px] bg-[#333333] text-white rounded-[10px] text-xl transition-all duration-500 ease-in-out hover:text-[#ffa500] hover:bg-[#1d1d1d] hover:scale-120"></i>
          </Link>
          <Link to="/">
            <i class="ri-shopping-cart-line inline-flex items-center justify-center h-[45px] w-[45px] bg-[#333333] text-white rounded-[10px] text-xl transition-all duration-500 ease-in-out hover:text-[#ffa500] hover:bg-[#1d1d1d] hover:scale-120"></i>
          </Link>
          <Link to="/Register">
            <i class="ri-user-line inline-flex items-center justify-center h-[45px] w-[45px] bg-[#333333] text-white rounded-[10px] text-xl transition-all duration-500 ease-in-out hover:text-[#ffa500] hover:bg-[#1d1d1d] hover:scale-120"></i>
          </Link>
          <div
            className={`text-4xl h-[45px] w-[45px] text-white bg-[#333333] items-center justify-center rounded-[10px] ml-2.5 z-[10001] cursor-pointer hidden max-[1160px]:inline-flex`}
            onClick={toggleMenu}
          >
            <i class={`bx bx-menu ${menuOpen}`}></i>
          </div>
        </div>
      </header>
    </div>
  );
}
