import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleDeleteSection = (sectionId) => {};

  const handleDeleteSubSection = (subSectionId, sectionId) => {};

  return (
    <div>
      <div className="text-white">
        {course?.courseContent?.map((section) => (
          <details key={section._id} open>
            <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
              <div className="flex items-center gap-x-3">
                <RxDropdownMenu className="text-2xl text-richblack-50" />
                <p className="font-semibold text-richblack-50">
                  {section.sectionName}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  onClick={handleChangeEditSectionName(
                    section._id,
                    section.sectionName
                  )}
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Delete this section",
                      text2: "All the lectures will be get deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => handleDeleteSection(section._id),
                      btn2Handler: () => setConfirmationModal(null),
                    });
                  }}
                >
                  <RiDeleteBin6Fill />
                </button>
                <span>|</span>
                <BiSolidDownArrow />
              </div>
            </summary>
            <div>
              {section?.subSection.map((data) => (
                <div
                  key={data?._id}
                  onClick={() => setViewSubSection(data)}
                  className="flex items-center justify-between gap-x-2 border-b-2"
                >
                  <div className="flex items-center gap-x-3">
                    <RxDropdownMenu className="text-2xl text-richblack-50" />
                    <p className="font-semibold text-richblack-50">
                      {data.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <button
                      onClick={() =>
                        setEditSubSection(...data, { sectionId: section._id })
                      }
                    >
                      <MdEdit />
                    </button>

                    <button
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Delete this section",
                          text2: "All the lectures will be get deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () =>
                            handleDeleteSubSection(data._id, section._id),
                          btn2Handler: () => setConfirmationModal(null),
                        });
                      }}
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={setAddSubSection(section._id)}
                className="mt-4 flex items-center gap-x-2 text-yellow-50"
              >
                <AiOutlinePlus />
                <p>Add Lectures</p>
              </button>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default NestedView;
