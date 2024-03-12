import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import ContactFormSection from "../Components/Core/AboutPage/ContactFormSection";
import LearningGrid from "../Components/Core/AboutPage/LearningGrid";
import Quote from "../Components/Core/AboutPage/Quote";
import StatsComponenet from "../Components/Core/AboutPage/StatsComponent";
import HighlightText from "../Components/Core/HomePage/HighLightText";
import Footer from "../Components/Common/Footer";
import IconBtn from "../Components/Common/IconBtn";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  return (
    <div className="px-4">
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-items-start w-11/12 max-w-maxContent  text-center text-white">
          <header className="py-20 text-4xl font-semibold lg:w-[70%]">
            About <HighlightText text={"Study Notion"} />
            <p className="mt-3 text-base lg:w-[95%] text-richblack-300 text-justify">
              Welcome to StudyNotion! We are a team of passionate individuals
              dedicated to revolutionizing the way education is delivered and
              consumed. StudyNotion aims to empower both students and
              instructors by providing a seamless and interactive learning
              platform. As lifelong learners ourselves, we understand the
              importance of accessible and engaging education. With StudyNotion,
              our goal is to break down barriers to learning and make quality
              educational content available to anyone, anywhere.
            </p>
          </header>
          {/* <img src={BannerImage1} alt="" className="rounded-lg " /> */}
          <img
            src={
              "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1710130684~exp=1710134284~hmac=01a045f88e135fbee57474b8334eca2e623070d7b968792a7f4b4d1598043a11&w=1060"
            }
            alt=""
            className="rounded-lg lg:w-[400px] object-cover"
          />
        </div>
      </section>

      <section className="bg-richblack-900 text-white py-12">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-4 text-lg lg:text-base">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-4 text-lg lg:text-base">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-richblack-700 text-white py-12">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <img
                src={
                  "https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?t=st=1710130941~exp=1710134541~hmac=087a4b914fd3900549b5cb3d19a230ddaa673f1f0e5abbd57f7fd589d41dd1f7&w=1060"
                }
                alt=""
                className="rounded-lg lg:w-[450px] lg:h-[250px] object-cover"
              />
              {/* <img src={FoundingStory} alt="" className="rounded-lg" /> */}
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">
                Our Founding Story
              </h2>
              <p className="mt-4 text-lg lg:text-base">
                StudyNotion was born out of a simple idea: to make learning easy
                and fun for everyone. It all started when Yash and Vedika, two
                learners, realized the challenges students face in finding
                quality educational resources. Fueled by their passion for
                education and technology, Yash and Vedika embarked on a journey
                to create a platform that would revolutionize the way people
                learn. They envisioned a place where students could explore a
                wide range of courses, connect with expert instructors, and
                unleash their full potential. Join us on this journey as we
                rewrite the story of education with StudyNotion. Together, let's
                learn, grow, and inspire the next generation of learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-richblack-900 text-white py-12">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold">
                Want to Connect with Us?
              </h2>
              <p className="mt-4 text-lg lg:text-base">
                Feel free to reach out to us anytime. Fill the form and we'll
                get back to you as soon as possible, or explore our wide range
                of courses.
              </p>
              <div className="mt-6 flex flex-col items-start gap-2 sm:max-w-full lg:flex-row lg:space-x-4">
                <button
                  onClick={() => Navigate("/contact")}
                  className="p-2 bg-yellow-50 text-richblack-900 rounded-lg"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => Navigate("/")}
                  className="p-2 bg-yellow-50 text-richblack-900 rounded-lg"
                >
                  Explore More
                </button>
                {/* <IconBtn
                  text={"Contact Us"}
                  onclick={() => Navigate("/contact")}
                  customClasses={"w-fit"}
                />
                <IconBtn text={"Explore"} onclick={() => Navigate("/")} /> */}
              </div>
            </div>
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <div className="w-full h-72 bg-gray-300 rounded-lg">
                <img
                  src={
                    "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1710130969~exp=1710134569~hmac=2a5c7a8edc1ced04fb5bc6d918ad1467a14726a7c250f023c334109c347090f4&w=740"
                  }
                  alt=""
                  className="rounded-lg lg:w-[350px] mx-auto lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
