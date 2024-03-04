import { useDispatch, useSelector } from "react-redux";
import { buyCourse } from "../services/operations/studentsFeaturesApi";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetails = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

  const handleBuyCourse = () => {
    console.log(token);
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
  };
  return (
    <div className="flex items-center">
      <button
        className="bg-yellow-50 p-2 mt-10"
        onClick={() => handleBuyCourse()}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CourseDetails;
