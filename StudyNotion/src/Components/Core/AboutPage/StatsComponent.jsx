const Stats = [
  {
    count: "5K",
    label: "Active Students",
  },
  {
    count: "10+",
    label: "Mentors",
  },
  {
    count: "200+",
    label: "Courses",
  },
  {
    count: "50+",
    label: "Awards",
  },
];

const StatsComponent = () => {
  return (
    <div>
      <div className="flex gap-4 justify-evenly">
        {Stats.map((Stat, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h1 className="text-white text-4xl font-semibold justify-center">
                {Stat.count}
              </h1>
              <h2 className="text-richblack-200 text-xl font-normal justify-center">
                {Stat.label}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsComponent;
