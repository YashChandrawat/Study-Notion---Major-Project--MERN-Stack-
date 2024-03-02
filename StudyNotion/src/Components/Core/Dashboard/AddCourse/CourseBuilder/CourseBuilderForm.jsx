import { useForm } from "react-hook-form";
import IconBtn from "../../../../Common/IconBtn";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GoPlusCircle } from "react-icons/go";
import { BiRightArrow } from "react-icons/bi";
import NestedView from "./NestedView";

const CourseBuilderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [editSectionName, setEditSectionName] = useState(true);
  const [loading, setLoading] = useState(false);
  const { course } = useSelector((state) => state.course);

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };

  const goBack = () => {};
  const goToNext = () => {};

  return (
    <div className="text-white">
      <p>Course Builder</p>
      <form>
        <div>
          <label htmlFor="">
            Section Name<sup>*</sup>
          </label>
          <input
            type="text"
            id="sectionName"
            placeholder="Add Section Name"
            className="p-2 bg-richblack-300 rounded-md placeholder:text-richblack-50 text-richblack-900"
            {...register("sectionName", { required: true })}
          />
          {errors.sectionName && <span>Section Name is Required**</span>}
        </div>
        <div className="mt-4 flex gap-4">
          <IconBtn
            type="submit"
            disabled={loading}
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
          >
            <GoPlusCircle className="text-yellow-50" size={20} />
          </IconBtn>
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-richblack-300 text-sm underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {course.courseContent.length > 0 && <NestedView />}

      <div className="flex justify-end gap-x-3">
        <button
          onClick={goBack}
          className="rounded-md cursor-pointer flex items-center"
        >
          Back
        </button>
        <IconBtn text={"Next"} onClick={goToNext} />
      </div>
    </div>
  );
};

export default CourseBuilderForm;
