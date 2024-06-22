import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addToCart, selectProducts } from "../store/productSlice";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

const TrendingPage = () => {
  const cart = useSelector((state) => state.products.cart);

  const productsData  = useSelector((state)=> state.products.products);
  const trendingData = productsData[0];
  console.log("trending data", trendingData);
  const obj1 = trendingData[0];
  console.log('object1', obj1.images)

  return (
    <div className="mt-10">
      <h2 className="text-center text-4xl uppercase mb-3">Trending Now</h2>
      <div className="flex justify-center gap-10 text-gray-500">
        <button>Sale</button>
        <button>Featured</button>
        <button>New Products</button>
      </div>
      <div className=" container mx-auto px-6 py-16">
        <div className="flex flex-wrap mb-8 justify-center items-center">
          <ProductList
            products={trendingData}
            addToCart={addToCart}
            cart={cart}
          />
        </div>
        <Link to='' className="flex items-center justify-center">
          <button className="bg-[#a0612ed7] uppercase w-[200px] rounded-sm mt-5 text-white p-3 text-xl">Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingPage;
