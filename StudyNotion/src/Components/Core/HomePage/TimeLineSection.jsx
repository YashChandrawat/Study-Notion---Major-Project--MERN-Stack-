import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png";

const TimeLine = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Desc: "Full Committed to the success company",
  },

  {
    Logo: Logo2,
    heading: "Leadership",
    Desc: "Full Committed to the success company",
  },

  {
    Logo: Logo3,
    heading: "Leadership",
    Desc: "Full Committed to the success company",
  },

  {
    Logo: Logo4,
    heading: "Leadership",
    Desc: "Full Committed to the success company",
  },
];

const TimeLineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-15 items-center">
        <div className="flex flex-col w-[45%] gap-10">
          {TimeLine.map((element, key) => {
            return (
              <div key={key} className="flex flex-row gap-6">
                <div className="w-[50px] h-[50px] bg-white flex items-center">
                  <img src={element.Logo} alt={element.heading} />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">
                    {element.heading}
                  </h2>
                  <p className="text-base">{element.Desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative shadow-blue-200">
          <img
            src={timeLineImage}
            alt={"Timelineimage"}
            className="shadow-white object-cover h-fit"
          />
          <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <p className="text-3xl font-bold">10</p>
              <p className="text-caribbeangreen-300 text-sm">
                Years of Experience
              </p>
            </div>
            <div className="flex gap-5 items-center px-7">
              <p className="text-3xl font-bold">250</p>
              <p className="text-caribbeangreen-300 text-sm">Type of Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
