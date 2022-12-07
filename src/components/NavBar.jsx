import { useState, useEffect } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#galerie">Galerie</a>
        </li>
        <li>
          <a href="#angebote">Angebote</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaInstagram className="mx-4" />
        <FaGooglePlusG className="mx-4" />
      </div>
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#galerie">Galerie</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#angebote">Angebote</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
