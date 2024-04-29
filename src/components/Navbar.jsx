import React from "react";
import logo from "../assets/images/morat-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  justify-around items-center bg-[#b0b0ae5a] p-3 sticky top-0">
      <div className="left__navbar flex justify-between gap-20 items-center">
        <img src={logo} alt="morat logo" className="w-14 rounded-full" />
        <ul className="flex gap-5 text-xl font-bold uppercase">
          <li className="hover:text-gray-600">
            <Link to="/">Women</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/">Kids</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/">Men</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/">About us</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className="right__navbar flex">
        <ul className="flex justify-between items-ceneter mx-8 gap-4 text-2xl">
          <li>
            <Link>
              <AiOutlineSearch />
            </Link>
          </li>
          <li>
            <Link>
              <AiOutlineUser />
            </Link>
          </li>
          <li>
            <Link>
              <AiOutlineShopping />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
