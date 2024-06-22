import React, { useState } from "react";
import logo from "../assets/images/morat-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/productSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.products.cart);
  const cartCount = cart.length;
  const [searchQuery, setSearchQuery] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(setFilters({ filterType: "search", value: e.target.value }));
  };

  const handleSearchClick = () => {
    setShowInput(!showInput);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch(setFilters({ filterType: "search", value: searchQuery }));
      navigate("/search");
    }
  };

  return (
    <nav className="bg-[#8989885a] w-full border-b md:border-0 sticky top-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <Link to="/">
            <img src={logo} alt="morat logo" className="w-14 rounded-full" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center text-xl font-semibold space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="hover:text-gray-600">
              <Link to="/women">Women</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/kids">Kids</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/men">Men</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/">About us</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex justify-between items-ceneter mx-8 gap-4 text-2xl">
            <li>
              <button onClick={handleSearchClick}>
                <AiOutlineSearch />
              </button>
            </li>
            <div className={`flex ${showInput ? "block" : "hidden"}`}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleSearchSubmit}
              />
            </div>
            <li>
              <Link>
                <AiOutlineUser />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <AiOutlineShopping className="" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-24 w-fit rounded-full text-lg font-bold text-black">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
