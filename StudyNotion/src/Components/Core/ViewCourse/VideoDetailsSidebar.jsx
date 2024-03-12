import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import IconBtn from "../../Common/IconBtn";

export default function VideoDetailsSidebar({ setReviewModal }) {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  useEffect(() => {
    if (!courseSectionData.length) return;
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const currentSubSectionIndx = courseSectionData?.[
      currentSectionIndx
    ]?.subSection.findIndex((data) => data._id === subSectionId);
    const activeSubSectionId =
      courseSectionData[currentSectionIndx]?.subSection?.[currentSubSectionIndx]
        ?._id;

    setActiveStatus(courseSectionData?.[currentSectionIndx]?._id);
    setVideoBarActive(activeSubSectionId);
  }, [courseSectionData, sectionId, subSectionId]);

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const handleOpenCloseSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 z-50 flex items-center">
        <button
          className={`text-black bg-richblack-200 rounded-full z-50 transition-transform transform ${
            isSideBarOpen ? "left-100" : "fixed left-100 right-0"
          }`}
          onClick={handleOpenCloseSideBar}
        >
          {isSideBarOpen ? (
            <IoIosArrowForward size={30} />
          ) : (
            <IoIosArrowBack size={30} />
          )}
        </button>
        <div
          className={`${
            isSideBarOpen ? "translate-x-0" : "translate-x-full absolute"
          } transform transition-transform duration-300 z-50 flex flex-col border-l-[1px] border-l-richblack-700 bg-richblack-800 w-full md:w-[320px] max-w-[350px] h-full overflow-y-auto`}
        >
          <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
            {/* <div className="flex w-full items-center justify-between">
              <div className="flex gap-2">
                <div
                  onClick={() => navigate(`/dashboard/enrolled-courses`)}
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
                  title="Back"
                >
                  <IoIosArrowBack size={30} />
                </div>
                <div
                  onClick={handleOpenCloseSideBar}
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
                  title="Toggle Sidebar"
                >
                  <IoIosArrowForward size={30} />
                </div>
              </div>
              <IconBtn
                text="Add Review"
                customClasses="ml-auto"
                onclick={() => setReviewModal(true)}
              />
            </div> */}
            <div className="flex flex-col">
              <p>{courseEntireData?.courseName}</p>
              <p className="text-sm font-semibold text-richblack-500">
                {completedLectures?.length} / {totalNoOfLectures}
              </p>
            </div>
          </div>

          <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
            {courseSectionData.map((course, index) => (
              <div
                className="mt-2 cursor-pointer text-sm text-richblack-5"
                onClick={() => setActiveStatus(course?._id)}
                key={index}
              >
                {/* Section */}
                <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                  <div className="w-[70%] font-semibold">
                    {course?.sectionName}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`${
                        activeStatus === course?.sectionName
                          ? "rotate-0"
                          : "rotate-180"
                      } transition-all duration-500`}
                    >
                      <BsChevronDown />
                    </span>
                  </div>
                </div>

                {/* Sub Sections */}
                {activeStatus === course?._id && (
                  <div className="transition-[height] duration-500 ease-in-out">
                    {course.subSection.map((topic, i) => (
                      <div
                        className={`flex gap-3  px-5 py-2 ${
                          videoBarActive === topic._id
                            ? "bg-yellow-200 font-semibold text-richblack-800"
                            : "hover:bg-richblack-900"
                        } `}
                        key={i}
                        onClick={() => {
                          navigate(
                            `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                          );
                          setVideoBarActive(topic._id);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={completedLectures.includes(topic?._id)}
                          onChange={() => {}}
                        />
                        {topic.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
