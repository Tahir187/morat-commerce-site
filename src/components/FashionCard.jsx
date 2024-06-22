import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Women fashion",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-917fbd0149eb3171682f4e964b08db6e-lq",
    link: "/women",
  },
  {
    title: "Men fashion",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-917fbd0149eb3171682f4e964b08db6e-lq",
    link: "/men",
  },
  {
    title: "Kid fashion",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-917fbd0149eb3171682f4e964b08db6e-lq",
    link: "/kid",
  },
];

const FashionCard = () => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-16 justify-items-center justify-center">
    {cardData.map((card) => (
      <div key={card.title} className="bg-[#DED4C9] w-[200px] h-[262px] flex justify-between mx-auto gap-2">
        <div className="flex flex-col justify-center ml-2">
          <h4 className="text-2xl">{card.title}</h4>
          <Link to={card.link}>
            <button className="bg-[#ffffff] rounded-sm uppercase w-[100px] mt-5 text-black p-2 ">
              Shop now
            </button>
          </Link>
        </div>
        <img src={card.image} alt={card.title} />
      </div>
    ))}
  </section>
  );
};

export default FashionCard;
