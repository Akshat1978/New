import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <Link to="/">
        <img src={logo} alt="hoobank" className="w-[127px] h-10" />
      </Link>
      <div className="block sm:hidden">
        <button onClick={handleToggle} className="text-white">
          {toggle ? (
            <img src={close} alt="close menu" className="w-6 h-6" />
          ) : (
            <img src={menu} alt="open menu" className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className={`absolute top-0 left-0 w-full h-screen bg-gray-800 z-50 ${toggle ? 'block' : 'hidden'}`}>
        <ul className="pt-20 text-center">
          {navLinks.map((nav) => (
            <li key={nav.id} className="mb-6">
              <Link
                to={`#${nav.id}`}
                className="block py-2 text-white font-poppins font-normal text-base"
                onClick={handleToggle}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="items-center justify-end flex-1 hidden gap-10 list-none sm:flex">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-base text-white"
          >
            <Link to={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
