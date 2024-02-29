import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "../../../../slices/cartSlice";

const RenderCartCourses = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((course, index) => (
        <div key={index}>
          <img
            src={course?.thumbnail}
            alt={`Course-${course?.courseName}-Thumbnail`}
          />
          <div>
            <p>{course?.courseName}</p>
            <p>{course?.category?.name}</p>
            <div>
              <span>4.8</span>
              <ReactStars
                count={5}
                size={20}
                edit={false}
                activeColor={"#ffd700"}
                emptyIcon={<FaStar />}
                fullIcon={<FaStar />}
              />
              <span>{course?.ratingAndReviews?.length} Ratings</span>
            </div>
          </div>
          <div>
            <button onClick={() => dispatch(removeFromCart(course._id))}>
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p>Rs {course?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;
