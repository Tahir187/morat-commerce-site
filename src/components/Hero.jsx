import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-around h-full bg-[#b0b0ae5a]">
      <div className="hero__left flex flex-col ml-10">
        <h3 className="text-4xl font-bold mt-24 text-[#9e7555]">
          Step up your{" "}
        </h3>
        <h2 className="text-5xl font-bold mt-6 text-[#9e7555] uppercase">
          FASHION GAME!
        </h2>
        <p className="text-4xl mt-8">uptp 50% off </p>
        <p className="text-4xl">on entire stock</p>
        <Link to='/women'>
        <button className="bg-[#a0612ed7] rounded-sm uppercase w-[200px] font-semibold mt-5 text-white p-3 text-2xl">Shop now</button>
        </Link>
      </div>
      <div className="hero__right">
        <img
          src="https://www.nicepng.com/png/detail/114-1146897_summer-clothes-for-women-transparent-image-dress.png"
          alt="hero image"
          className="w-full h-[450px] ml-[-40px] mt-4 mb-5"
        />
      </div>
    </div>
  );
};

export default Hero;
