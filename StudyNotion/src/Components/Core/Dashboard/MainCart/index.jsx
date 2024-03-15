import { useDispatch, useSelector } from "react-redux";
import { buyCourse } from "../../../../services/operations/studentsFeaturesAPI";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../../../../slices/cartSlice";

const MainCart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course?.courseDetails?._id);
    buyCourse(token, courses, user, navigate, dispatch);
  };

  return (
    <>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center justify-center h-auto mt-20 text-white">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png" // Add your image path here
            alt="Empty Cart"
            className="w-64 h-64 object-contain mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-gray-400">Start adding courses to your cart.</p>
        </div>
      ) : (
        <>
          <div className="container mx-auto text-white  flex flex-col p-4 w-full gap-6 lg:flex-row sm:w-[full]">
            {/* Cart Items (Left Section) */}
            <div className="lg:w-[70%] w-full">
              <h1 className="mb-4 mt-6 text-2xl md:text-3xl font-semibold text-richblack-5 text-center lg:text-left">
                Your Cart
              </h1>
              <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
                {totalItems} Courses in Cart
              </p>
              {cart.map((item) => (
                <div
                  key={item?.courseDetails?.id}
                  className="border-b py-4 px-4 flex justify-between items-center hover:bg-richblack-800 transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item?.courseDetails?.thumbnail}
                      alt={item.name}
                      className="w-14 h-15 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="font-semibold">
                        {item?.courseDetails?.courseName}
                      </h2>
                      <p className="text-gray-400">
                        Price: ₹ {item?.courseDetails?.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item?.courseDetails?._id))
                    }
                    className="flex items-center border p-2 rounded-lg border-pink-300 text-pink-300 text-red-500 font-semibold hover:text-red-700 transition duration-300"
                  >
                    <MdDelete className="mr-1" size={20} />
                  </button>
                </div>
              ))}
            </div>
            {/* Checkout Section (Right Section) */}
            <div className="lg:w-[30%] w-full mt-6">
              <div className="w-full bg-richblack-700 flex flex-col justify-center p-4 rounded-md shadow-md">
                <p className="text-center text-xl font-semibold mb-4">
                  Order Summary
                </p>
                <div className="flex justify-between mb-2">
                  <p className="text-lg font-semibold text-white">
                    Total Items
                  </p>
                  <p className="text-lg font-semibold text-yellow-50">
                    {totalItems}
                  </p>
                </div>
                <div className="flex justify-between mb-2">
                  <h2 className="text-lg font-semibold text-white">
                    Total Price
                  </h2>
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
                    className="bg-button-5 text-black py-2 px-4 flex gap-2 items-center justify-center rounded-md hover:bg-button-100 w-full transition duration-300"
                    onClick={() => handleBuyCourse()}
                  >
                    Pay <p className="font-semibold">₹ {total}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainCart;
