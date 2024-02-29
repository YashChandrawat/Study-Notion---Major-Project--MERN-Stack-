import HighLightText from "../HomePage/HighLightText";

const Quote = () => {
  return (
    <div className="text-4xl font-semibold">
      We are passionate about revolutionizing the way we learn. Our innovative
      platform <HighLightText text={"combines technology"} />
      <span className="text-brown-500"> expertise</span>,and community to create
      an
      <span className="text-brown-500">
        {" "}
        unparalleled education experience.
      </span>
    </div>
  );
};

export default Quote;
