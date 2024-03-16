import IconBtn from "../../Common/IconBtn";

const SetReview = ({ setReviewModal }) => {
  return (
    <div className="text-white">
      <IconBtn
        text="Add Review"
        // customClasses={"relative bottom-3"}
        onclick={() => setReviewModal(true)}
      />
    </div>
  );
};

export default SetReview;
