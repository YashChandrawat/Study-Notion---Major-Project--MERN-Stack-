import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCourse } from "../../../../services/operations/studentsFeaturesAPI";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../../../../slices/cartSlice";

const Example = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course?.courseDetails?._id);
    buyCourse(token, courses, user, navigate, dispatch);
  };

  return (
    <div className="container mx-auto text-white flex flex-col lg:flex-row p-4 w-full gap-4">
      {/* Cart Items (Left Section) */}
      <div className="lg:w-[80%] lg:max-h-screen overflow-auto">
        <h1 className="mb-4 mt-14 text-2xl md:text-3xl font-medium text-richblack-5 text-center lg:text-left">
          Cart
        </h1>
        <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
          {totalItems} Courses in Cart
        </p>
        {cart.map((item) => (
          <div
            key={item?.courseDetails?.id}
            className="border-b py-4 flex justify-between items-center hover:bg-richblack-800 transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item?.courseDetails?.thumbnail}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="font-semibold">
                  {item?.courseDetails?.courseName}
                </h2>
                <p className="text-gray-400">
                  Price: Rs. {item?.courseDetails?.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item?.courseDetails?._id))}
              className="flex items-center text-red-500 font-semibold hover:text-red-700 transition duration-300"
            >
              <MdDelete className="mr-1" />
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* Checkout Section (Right Section) */}
      <div className="lg:w-[20%] bg-richblack-700 p-4 rounded-md shadow-md">
        <p className="text-center text-xl font-semibold mb-4">Order Summary</p>
        <div className="flex justify-between mb-2">
          <p className="text-lg font-semibold text-white">Total Items</p>
          <p className="text-lg font-semibold text-yellow-50">{totalItems}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h2 className="text-lg font-semibold text-white">Total Price</h2>
          <p className="text-lg font-semibold text-yellow-50">
            ₹ {total === null ? 0 : total}
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <h2 className="text-lg font-semibold text-white">Tax</h2>
          <p className="text-lg font-semibold text-yellow-50">₹ {0}</p>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold text-white">Total</h2>
            <p className="text-lg font-semibold text-yellow-50">
              ₹ {total === null ? 0 : total}
            </p>
          </div>
          <button
            className="bg-button-5 text-black py-2 px-4 rounded-md hover:bg-button-100 w-full transition duration-300"
            onClick={() => handleBuyCourse()}
          >
            Pay Rs.{total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
