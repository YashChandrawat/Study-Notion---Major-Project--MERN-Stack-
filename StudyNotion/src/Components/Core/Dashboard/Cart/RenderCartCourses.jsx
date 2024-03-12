import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "../../../../slices/cartSlice";
import ReactStars from "react-rating-stars-component";
import GetAvgRating from "../../../../utils/avgRating";
import { FaStar } from "react-icons/fa";
const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getRating = (course) => {
    const count = GetAvgRating(course?.courseDetails.ratingAndReviews);
    return count;
  };

  return (
    <div className="flex flex-1 flex-col">
      {cart.map((course, indx) => (
        <div
          key={course?.courseDetails._id}
          className={`flex w-full flex-wrap items-start justify-between gap-6 ${
            indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
          } ${indx !== 0 && "mt-6"} `}
        >
          <div className="flex flex-1 flex-col gap-4 xl:flex-row">
            <img
              src={course?.courseDetails?.thumbnail}
              alt={course?.courseDetails?.courseName}
              className="h-[148px] w-[220px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-richblack-5">
                {course?.courseDetails?.courseName}
              </p>
              <p className="text-sm text-richblack-300">
                {course?.category?.name}
              </p>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="text-yellow-5 flex gap-1 items-center">
                  {getRating(course)}
                  <ReactStars
                    count={5}
                    value={course?.courseDetails?.ratingAndReviews?.length}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </span>
                <span className="text-richblack-400">
                  {course?.courseDetails?.ratingAndReviews?.length || 0} Ratings
                </span>
                <p className="mb-6 text-xl font-medium text-yellow-100">
                  Price: ₹ {course?.courseDetails?.price}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <button
              onClick={() =>
                dispatch(removeFromCart(course?.courseDetails?._id))
              }
              className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-3 px-[12px] text-pink-200"
            >
              <RiDeleteBin6Line />
              {/* <span>Remove</span> */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;
