const HighLightText = ({ text }) => {
  return (
    <span className="font-semibold bg-gradient-to-r from-blue-100 via-richblue-100 to-blue-200 text-transparent bg-clip-text text-4xl">
      {" "}
      {text}{" "}
    </span>
  );
};

export default HighLightText;
