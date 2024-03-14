import { useSelector } from "react-redux";

import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <h1 className="mb-8 mt-14 text-2xl md:text-3xl font-medium text-richblack-5 text-center lg:text-left">
        Cart
      </h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
        {totalItems} Courses in Cart
      </p>
      {totalItems > 0 ? (
        <div className="mt-8 flex flex-col gap-y-6 lg:flex-row lg:gap-x-10">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png" // Add your image path here
            alt="Empty Cart"
            className="w-64 h-64 object-contain mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-gray-400">Start adding courses to your cart.</p>
        </div>
      )}
    </>
  );
}
