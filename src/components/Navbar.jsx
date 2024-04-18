import React from 'react'
import logo from "../assets/images/morat-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='flex  justify-around items-center bg-[#b0b0ae5a] p-3'>
        <div className="left__navbar flex justify-between gap-20 items-center">
            <img src={logo} alt="morat logo" className='w-14 rounded-full'/>
            <ul className='flex gap-5 text-xl font-bold uppercase'>
                <li className='hover:text-gray-600'><a href="#women">Women</a></li>
                <li className='hover:text-gray-600'><a href="#men">Men</a></li>
                <li className='hover:text-gray-600'><a href="#kids">Kids</a></li>
                <li className='hover:text-gray-600'><a href="#aboutus">About Us</a></li>
                <li className='hover:text-gray-600'><a href="#others">Others</a></li>
            </ul>
        </div>
        <div className="right__navbar flex">
            <ul className='flex justify-between items-ceneter mx-8 gap-4 text-2xl'>
                <li><AiOutlineSearch /></li>
                <li><AiOutlineUser /></li>
                <li><AiOutlineShopping /></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar