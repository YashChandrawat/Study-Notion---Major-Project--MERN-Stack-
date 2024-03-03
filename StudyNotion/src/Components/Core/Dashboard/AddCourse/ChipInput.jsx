import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";

const ChipInput = ({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const { editCourse, course } = useSelector((state) => state.course);

  //   New array is created Such that we can insert tags in that array
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    if (editCourse) {
      setCapsule(course?.tag);
      register(name, { required: true, validate: (value) => value.length > 0 });
    }
  }, []);

  useEffect(() => {
    setValue(name, capsule);
  }, [capsule]);

  const handleKeyDown = (event) => {
    // Check if user presses "Enter" or ","
    if (event.key === "Enter" || event.key === ",") {
      // Prevent the default behavior of the event
      event.preventDefault();
      // Get the input value and remove any leading/trailing spaces
      const chipValue = event.target.value.trim();
      // Check if the input value exists and is not already in the capsule array
      if (chipValue && !capsule.includes(chipValue)) {
        // Add the chip to the array and clear the input
        const newcapsule = [...capsule, chipValue];
        setCapsule(newcapsule);
        event.target.value = "";
      }
    }
  };

  // Function to handle deletion of a chip
  const handleDeleteChip = (chipIndex) => {
    // Filter the capsule array to remove the chip with the given index
    const newcapsule = capsule.filter((_, index) => index !== chipIndex);
    setCapsule(newcapsule);
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* Render the label for the input */}
      <label className="text-md text-richblack-5 font-semibold" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      {/* Render the capsule and input */}
      <div className="flex w-full flex-wrap gap-y-2">
        {/* Map over the capsule array and render each chip */}
        {capsule.map((chip, index) => (
          <div
            key={index}
            className="m-1 flex items-center rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5"
          >
            {/* Render the chip value */}
            {chip}
            {/* Render the button to delete the chip */}
            <button
              type="button"
              className="ml-2 focus:outline-none"
              onClick={() => handleDeleteChip(index)}
            >
              <MdClose className="text-sm" />
            </button>
          </div>
        ))}
        {/* Render the input for adding new capsule */}
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="form-style w-full p-2 rounded-md bg-richblack-700"
        />
      </div>
      {/* Render an error message if the input is required and not filled */}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
};

export default ChipInput;
