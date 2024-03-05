import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../services/operations/studentsFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import Error from "./Error";
import ConfirmationModal from "../Components/Common/ConfirmationModal";
import RatingStars from "../Components/Common/RatingStars";
import { formatDate } from "../services/formatDate";
import CourseDetailsCard from "../Components/Core/Course/CourseDetailsCard";


const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    const getCourseFullDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseId);
        console.log("Printing Course -->", result);
        setCourseData(result);
      } catch (error) {
        console.log("Could not fetch course details");
      }
    };
    getCourseFullDetails();
  }, [courseId]);

  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(
      courseData?.data?.courseDetails.ratingAndReviews
    );
    setAvgReviewCount(count);
  }, [courseData]);

  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    courseData?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [courseData]);

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "Your are not Logged in",
      text2: "Please login to purchase the course",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (loading || !courseData) {
    return <div>Loading...</div>;
  }

  if (!courseData.success) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
  } = courseData.data?.courseDetails;

  return (
    <div className="flex flex-col text-white">
      <div className="relative flex-col justify-start">
        <p>{courseName}</p>
        <p>{courseDescription}</p>
        <div className="flex gap-x-2">
          <span>{avgReviewCount}</span>
          <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
          <span>{`(${ratingAndReviews.length} reviews)`}</span>
          <span>{`(${studentsEnrolled.length} students Enrolled)`}</span>
        </div>
        <div>
          <p>Created By {`${instructor.firstName}`}</p>
        </div>
        <div className="flex gap-x-3">
          <p>Created At {formatDate(createdAt)}</p>
          <p> English</p>
        </div>

        <div>
          <CourseDetailsCard 
             course= {courseData?.data?.courseDetails}
             setConfirmationModal = {setConfirmationModal}
             handleBuyCourse = {handleBuyCourse}
          />
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default CourseDetails;
