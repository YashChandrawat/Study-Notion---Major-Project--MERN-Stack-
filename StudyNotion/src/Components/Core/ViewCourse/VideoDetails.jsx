import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate, useParams } from "react-router-dom";

import "video-react/dist/video-react.css";
import { useLocation } from "react-router-dom";
import { BigPlayButton, Player } from "video-react";

import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI";
import { updateCompletedLectures } from "../../../slices/viewCourseSlice";
import IconBtn from "../../Common/IconBtn";
import SetReview from "./SetReview";
import CourseReviewModal from "./CourseReviewModal";
import BookAppointmentForm from "../../../Pages/BookAppointment";
import { setDoctorEmail } from "../../../slices/courseSlice";

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse);

  const [videoData, setVideoData] = useState([]);
  const [previewSource, setPreviewSource] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!courseSectionData.length) return;
      if (!courseId && !sectionId && !subSectionId) {
        navigate(`/dashboard/enrolled-courses`);
      } else {
        const filteredData = courseSectionData.filter(
          (course) => course._id === sectionId
        );
        const filteredVideoData = filteredData?.[0]?.subSection.filter(
          (data) => data._id === subSectionId
        );
        setVideoData(filteredVideoData[0]);
        setPreviewSource(courseEntireData.thumbnail);
        setVideoEnded(false);
      }
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);

  // const doctorEmail = courseEntireData?.instructor?.email;

  const isFirstVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    return currentSectionIndx === 0 && currentSubSectionIndx === 0;
  };

  const goToNextVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length;

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    if (currentSubSectionIndx !== noOfSubsections - 1) {
      const nextSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx + 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      );
    } else {
      const nextSectionId = courseSectionData[currentSectionIndx + 1]._id;
      const nextSubSectionId =
        courseSectionData[currentSectionIndx + 1].subSection[0]._id;
      navigate(
        `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
      );
    }
  };

  const isLastVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length;

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    return (
      currentSectionIndx === courseSectionData.length - 1 &&
      currentSubSectionIndx === noOfSubsections - 1
    );
  };

  const goToPrevVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    if (currentSubSectionIndx !== 0) {
      const prevSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx - 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
      );
    } else {
      const prevSectionId = courseSectionData[currentSectionIndx - 1]._id;
      const prevSubSectionLength =
        courseSectionData[currentSectionIndx - 1].subSection.length;
      const prevSubSectionId =
        courseSectionData[currentSectionIndx - 1].subSection[
          prevSubSectionLength - 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
      );
    }
  };

  const handleLectureCompletion = async () => {
    setLoading(true);
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    );
    if (res) {
      dispatch(updateCompletedLectures(subSectionId));
    }
    setLoading(false);
  };

  const doctorEmail = courseEntireData?.instructor?.email;

  const handleBookAppointment = () => {
    console.log(
      "Receiver inside video Details: ",
      courseEntireData?.instructor?.email
    );
    navigate(`/book-appointment/${courseId}`);
  };

  return (
    <div className="flex flex-col gap-5 text-white">
      {videoData ? (
        <div className="lg:w-[80%] lg:mx-auto lg:h-[80] sm:w-[full]">
          <Player
            ref={playerRef}
            aspectRatio="16:9"
            playsInline
            onEnded={() => setVideoEnded(true)}
            src={videoData?.videoUrl}
          >
            <BigPlayButton position="center" />
          </Player>
          {videoEnded && (
            <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-black bg-opacity-60">
              <IconBtn
                disabled={loading}
                onclick={() => handleLectureCompletion()}
                text={!loading ? "Mark As Completed" : "Loading..."}
                customClasses="text-xl max-w-max px-4 mx-auto"
              />
              <IconBtn
                disabled={loading}
                onclick={() => {
                  if (playerRef?.current) {
                    playerRef?.current?.seek(0);
                    setVideoEnded(false);
                  }
                }}
                text="Rewatch"
                customClasses="text-xl max-w-max px-4 mx-auto mt-2"
              />
              <div className="flex min-w-[250px] justify-center gap-x-4 text-xl mt-10">
                {!isFirstVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToPrevVideo}
                    className="blackButton"
                  >
                    Prev
                  </button>
                )}
                {!isLastVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToNextVideo}
                    className="blackButton"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <img
          src={placeholderImage}
          alt="Preview"
          className="h-full w-full rounded-md object-cover"
        />
      )}
      <div className="lg:mx-[10%] flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{videoData?.title}</h1>
        <p className="pb-2">{videoData?.description}</p>

        {courseEntireData?.category?.name === "Health & Well Being" ? (
          <>
            <div className="flex gap-2 items-center">
              <SetReview setReviewModal={setReviewModal} />
              {/* <Link
                to={"/book-appointment"}
                element={<BookAppointmentForm doctorEmail={courseId} />}
              >
                BookAppointmentForm
              </Link> */}
              <IconBtn onclick={() => handleBookAppointment()}>
                Book Appointment
              </IconBtn>
            </div>
          </>
        ) : (
          <>
            <SetReview setReviewModal={setReviewModal} />
          </>
        )}
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </div>
  );
};

export default VideoDetails;
