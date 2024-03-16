import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../services/apiConnector";
import toast from "react-hot-toast";
import { appointmentEndpoint } from "../services/apis";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";

const BookAppointmentForm = () => {
  const [response, setResponse] = useState(null);
  const id = useParams();
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await fetchCourseDetails(id.id);
        console.log("course details res: ", res);
        setResponse(res);
      } catch (error) {
        console.log("Could not fetch Course Details");
      }
    })();
  }, []);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const receiver = response?.data?.courseDetails?.instructor;

  const submitAppointmentForm = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      const response = await apiConnector(
        "POST",
        appointmentEndpoint.BOOK_APPOINTMENT_API,
        data
      );

      setLoading(false);
      toast.success("Appointment booked successfully");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to book appointment");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        appointmentDate: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  console.log("Email doctorEmail : ", id);

  return (
    <form
      className="flex flex-col gap-5 text-white"
      onSubmit={handleSubmit((data) =>
        submitAppointmentForm({ ...data, receiver })
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstname" className="text-gray-600">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="p-2 rounded-md bg-richblack-700"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="error-message">Please enter your name.</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastname" className="text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="p-2 rounded-md bg-richblack-700"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="p-2 rounded-md bg-richblack-700"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="error-message">
            Please enter your email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="text-gray-600">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNo"
          id="phoneNo"
          placeholder="Enter phone number"
          className="p-2 rounded-md bg-richblack-700"
          {...register("phoneNo", {
            required: true,
            maxLength: 12,
            minLength: 10,
            pattern: /^[0-9\b]+$/,
          })}
        />
        {errors.phoneNo && (
          <span className="error-message">{errors.phoneNo.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="appointmentDate" className="text-gray-600">
          Appointment Date
        </label>
        <input
          type="date"
          name="appointmentDate"
          id="appointmentDate"
          className="p-2 rounded-md bg-richblack-700"
          {...register("appointmentDate", { required: true })}
        />
        {errors.appointmentDate && (
          <span className="error-message">
            Please select an appointment date.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-gray-600">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Enter your message here"
          className="p-2 rounded-md bg-richblack-700"
          {...register("message")}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-button-5 text-richblack-900 w-fit p-2 mx-auto rounded-md font-semibold"
      >
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
};

export default BookAppointmentForm;
