import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../services/apiConnector";
import { contactusEndpoint } from "../../../services/apis";
import CountryCode from "../../../data/countrycode.json";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );

      setLoading(false);
      toast.success("Email Sent Successfully");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to Send Email");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              name="countrycode"
              id="countrycode"
              className="p-2 rounded-md bg-richblack-700"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => (
                <option key={i} value={ele.code}>
                  {ele.code}-{ele.country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              placeholder="12345 67890"
              className="p-2 rounded-md bg-richblack-700"
              {...register("phoneNo", {
                required: true,
                maxLength: 12,
                minLength: 10,
                pattern: /^[0-9\b]+$/,
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="error-message">{errors.phoneNo.message}</span>
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
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="error-message">Please enter your message.</span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-button-5 text-richblack-900 w-fit p-2 mx-auto rounded-md font-semibold"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactUsForm;
