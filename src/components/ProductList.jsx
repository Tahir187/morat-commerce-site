import React from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";

const ProductList = ({ products, addToCart, cart }) => {
  const dispatch = useDispatch();

    // console.log("product list data", products)
    // console.log('product cart', cart);
    const handleAddToCart = (product) =>{
    console.log('productlist', product);
    //   const productId = product.id;
    //   console.log('productList id', productId);
    //   addToCart(product)
    dispatch(addToCart(product));

    }

  return (  
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products && products.length > 0 && products.map((product) => (
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
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                cart.find((item) => item.id === product.id) ? "bg-gray-400 text-white" : ""
              }`}
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
