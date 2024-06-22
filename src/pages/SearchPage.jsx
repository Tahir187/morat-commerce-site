import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../store/productSlice";

const SearchPage = () => {
  const { searchTerm } = useParams(); 
  const products = useSelector(selectProducts);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-gray-700 line-clamp-2">
                  {product.description}
                </p>
                <span className="text-red-500 font-bold">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 font-medium">
          No products found for your search: "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default SearchPage;
