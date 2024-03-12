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
        <div className="my-8">
          {enrolledCourses.map((course, i, arr) => (
            <div
              className="border border-richblack-700 mb-4 rounded-lg overflow-hidden"
              key={i}
            >
              <div
                className="cursor-pointer p-4 flex items-center"
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  );
                }}
              >
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-20 w-20 rounded-lg object-cover mr-4"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg text-richblack-300">
                    {course.courseName}
                  </p>
                  <p className="text-md text-richblack-300 mt-1">
                    {course.courseDescription.length > 100
                      ? `${course.courseDescription.slice(0, 100)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className="p-4 border-t border-richblack-700">
                <div className="flex justify-between items-center mb-2">
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
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
