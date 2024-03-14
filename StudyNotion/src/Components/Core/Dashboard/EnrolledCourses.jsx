import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const getEnrolledCourses = async () => {
    try {
      const res = await getUserEnrolledCourses(token);
      setEnrolledCourses(res);
    } catch (error) {
      console.error("Could not fetch enrolled courses.", error);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <>
      <div className="text-3xl text-richblack-50">Enrolled Courses</div>
      {!enrolledCourses ? (
        <div className="flex justify-center items-center h-80">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className="text-center text-richblack-500 my-8">
          You have not enrolled in any course yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {enrolledCourses.map((course, i, arr) => (
            <div
              className="border border-richblack-700 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300"
              key={i}
              onClick={() => {
                navigate(
                  `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                );
              }}
            >
              <img
                src={course.thumbnail}
                alt="course_img"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-lg text-richblack-300 mb-2">
                  {course.courseName}
                </p>
                <p className="text-md text-richblack-300 mb-4">
                  {course.courseDescription.length > 100
                    ? `${course.courseDescription.slice(0, 100)}...`
                    : course.courseDescription}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-richblack-500">
                    Duration: {course?.totalDuration}
                  </p>
                  <p className="text-richblack-500">
                    Progress: {course.progressPercentage || 0}%
                  </p>
                </div>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                  bgColor="#34D399" // Green color
                  className="mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
