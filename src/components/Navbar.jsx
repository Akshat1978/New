import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <Link to="/">
        <img src={logo} alt="hoobank" className="w-[127px] h-10" />
      </Link>

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
