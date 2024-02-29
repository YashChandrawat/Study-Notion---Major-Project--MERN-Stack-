import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-sm px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 ${
          active ? "bg-yellow-50 text-black" : "bg-richblack-800 text-white"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
