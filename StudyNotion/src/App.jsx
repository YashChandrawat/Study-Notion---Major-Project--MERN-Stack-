import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyProfile from "./Components/Core/Dashboard/MyProfile";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import Settings from "./Components/Core/Dashboard/Settings";
import EnrolledCourses from "./Components/Core/Dashboard/EnrolledCourses";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import AddCourse from "./Components/Core/Dashboard/AddCourse";
import MyCourses from "./Components/Core/Dashboard/MyCourses";
import EditCourse from "./Components/Core/Dashboard/EditCourse";
import Catalog from "./Pages/Catalog";
import CourseDetails from "./Pages/CourseDetails";
import ViewCourse from "./Pages/ViewCourse";
import VideoDetails from "./Components/Core/ViewCourse/VideoDetails";
import Instructor from "./Components/Core/Dashboard/InstructorDashboard/Instructor";
import CategoryCatalog from "./Pages/CategoryCatalog";
import MainCart from "./Components/Core/Dashboard/MainCart";
import BookAppointmentForm from "./Pages/BookAppointment";

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path="/category-catalog" element={<CategoryCatalog />} />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<MainCart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
        <Route
          path="/book-appointment/:id"
          element={
            <PrivateRoute>
              <BookAppointmentForm />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
