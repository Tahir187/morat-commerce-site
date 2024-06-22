import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, deleteAll, toggleProductQuantity } from "../store/productSlice";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll([]));
  };

  const handleQuantityChange = (productId, type) => {
    dispatch(toggleProductQuantity({ productId, type })); 
  };

  const calculateCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const cartTotal = calculateCartTotal();

  return (
    <section className="bg-gray-100 p-4">
      <h2 className="text-center text-2xl font-bold mb-2">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-red-500">Your cart is empty.</p>
      ) : (
        <ul className="cart-items flex justify-center gap-3 w-fit flex-wrap mb-5">
          {cart.map((item) => (
            <li key={item.id} className="cart-item bg-white rounded shadow-md p-4 gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="item-details flex-grow">
                <div className="flex justify-around">
                  <h3>{item.title}</h3>
                  <p className="text-gray-500">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-around mt-2 items-center">
                  <div className="quantity-controls flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, "DEC")} 
                      className="text-gray-500 hover:text-red-500"
                    >
                      <AiOutlineMinusCircle className="text-2xl " />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "INC")} 
                      className="text-gray-500 hover:text-red-500"
                    >
                      <AiOutlinePlusCircle className="text-2xl" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 self-end text-xl "
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="cart-total bg-gray-200 p-4 rounded-b-md w-full flex justify-between items-center">
          <p>
            Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
          <p>Total Price: ${cartTotal.toFixed(2)}</p>
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-white hover:bg-red-700 py-2 px-4 rounded flex gap-2 items-center"
          >
            Clear All <FaTrash className="text-white" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
