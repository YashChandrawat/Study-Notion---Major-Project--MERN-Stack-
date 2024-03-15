import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import CourseInformationForm from "./CourseInformationForm";
import PublishCourse from "./PublishCourse";

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:items-center sm:justify-start justify-center space-y-4 mt-8 md:space-y-0 md:flex-row md:justify-between">
        {steps.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <button
              className={`h-8 w-8 md:h-12 md:w-12 rounded-full focus:outline-none flex items-center justify-center ${
                step === item.id
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step > item.id ? (
                <FaCheck className="w-4 h-4 md:w-6 md:h-6" />
              ) : (
                <span className="text-xs md:text-lg font-bold">{item.id}</span>
              )}
            </button>
            <p
              className={`text-xs md:text-sm ${
                step >= item.id
                  ? "text-gray-800 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Render specific component based on current step */}
      <div className="mt-8">
        {step === 1 && <CourseInformationForm />}
        {step === 2 && <CourseBuilderForm />}
        {step === 3 && <PublishCourse />}
      </div>
    </>
  );
}
