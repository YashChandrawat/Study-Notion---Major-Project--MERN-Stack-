import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";
import { getInstructorData } from "../../../../services/operations/profileAPI";
import InstructorChart from "./InstructorChart";
import { Link } from "react-router-dom";

export default function Instructor() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const instructorApiData = await getInstructorData(token);
      const result = await fetchInstructorCourses(token);
      if (instructorApiData.length) setInstructorData(instructorApiData);
      if (result) setCourses(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  );

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  );

  return (
    <div className="p-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-richblack-5">
          Hi {user?.firstName} 👋
        </h1>
        <p className="font-medium text-richblack-200">
          Let's start something new
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner"></div>
        </div>
      ) : courses.length > 0 ? (
        <div className="space-y-4">
          <div className="bg-richblack-800 rounded-md p-4">
            <h2 className="text-lg font-bold text-richblack-5">Visualize</h2>
            <InstructorChart courses={instructorData} />
          </div>
          <div className="bg-richblack-800 rounded-md p-4">
            <h2 className="text-lg font-bold text-richblack-5">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-richblack-700 rounded-md p-4">
                <p className="text-lg font-bold text-richblack-5">
                  Total Courses
                </p>
                <p className="text-3xl font-semibold text-richblack-50">
                  {courses.length}
                </p>
              </div>
              <div className="bg-richblack-700 rounded-md p-4">
                <p className="text-lg font-bold text-richblack-5">
                  Total Students
                </p>
                <p className="text-3xl font-semibold text-richblack-50">
                  {totalStudents}
                </p>
              </div>
              <div className="bg-richblack-700 rounded-md p-4">
                <p className="text-lg font-bold text-richblack-5">
                  Total Income
                </p>
                <p className="text-3xl font-semibold text-richblack-50">
                  Rs. {totalAmount}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-richblack-800 rounded-md p-4">
            <h2 className="text-lg font-bold text-richblack-5">Your Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="flex flex-col items-center">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-32 w-full rounded-md object-cover"
                  />
                  <p className="mt-3 text-sm font-medium text-richblack-50">
                    {course.courseName}
                  </p>
                  <div className="flex mt-1 items-center">
                    <p className="text-xs font-medium text-richblack-300">
                      {course.studentsEnrolled.length} students
                    </p>
                    <span className="mx-1 text-xs font-medium text-richblack-300">
                      |
                    </span>
                    <p className="text-xs font-medium text-richblack-300">
                      Rs. {course.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/dashboard/my-courses">
              <p className="mt-4 text-sm font-semibold text-yellow-50">
                View All Courses
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            You have not created any courses yet
          </p>
          <Link to="/dashboard/add-course">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Create a course
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
