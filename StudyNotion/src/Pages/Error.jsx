const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-gray-900">
      <img
        src={
          "https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png"
        }
        alt="Error"
        className="w-[400px] h-[300px]"
      />{" "}
      {/* Add your error image */}
      <div className="text-center text-3xl text-white mb-4">
        Error 404 - Not Found
      </div>
      <p className="text-white text-lg mb-8">
        Sorry, the page you are looking for could not be found.
      </p>
      <a
        href="/"
        className="text-white text-lg border border-white px-6 py-2 rounded-lg transition duration-300 hover:bg-white hover:text-richblack-900"
      >
        Go to Home
      </a>
    </div>
  );
};

export default Error;
