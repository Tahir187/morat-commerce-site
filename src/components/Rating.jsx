import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {

  const filledStars = Math.floor(rating);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar
          size={20}
          key={index}
          className={index < filledStars ? "text-[#fae421]" : "text-gray-400"} 
          flex
        />
      ))}
    </div>
  );
};

export default Rating;
