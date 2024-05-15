import React from "react";
import Rating from "./Rating";

const ProductList = ({ products }) => {
    // console.log("product list data", products)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product?.id} className="shadow-md rounded-lg overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{product?.title}</h3>
            <p className="text-gray-700 mb-2">{product?.price}</p>
            <Rating rating={product.rating} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
