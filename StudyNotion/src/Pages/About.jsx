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
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            {/* Driving Innovation in Online Education for a */}
            About
            <HighlightText text={"Study Notion"} />
            <p className="mx-auto mt-3  text-base font-large text-richblack-300 lg:w-[95%] text-justify">
              Welcome to StudyNotion! We are a team of passionate individuals
              dedicated to revolutionizing the way education is delivered and
              consumed. StudyNotion aims to empower both students and
              instructors by providing a seamless and interactive learning
              platform.As lifelong learners ourselves, we understand the
              importance of accessible and engaging education. With StudyNotion,
              our goal is to break down barriers to learning and make quality
              educational content available to anyone, anywhere.
            </p>
          </header>
          <div className="py-10">
            <img src={BannerImage1} alt="" className="rounded-lg " />
          </div>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          {/* <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div> */}
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-richblack-500">
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-5">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[100%] text-center">
                Our Vision
              </h1>
              <p className="text-base font-semibold text-richblack-300 text-justify lg:w-[100%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-5">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl text-center font-semibold lg:w-[100%] ">
                Our Mission
              </h1>
              <p className="text-base font-semibold text-justify text-richblack-300 lg:w-[100%]">
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

      <section className="bg-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between  text-richblack-500">
          <div className="flex flex-col items-center w-[100%] lg:flex-row justify-between ">
            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
            <div className="my-24 flex lg:w-[50%] flex-col gap-6">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-center text-transparent lg:w-[100%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-semibold text-justify text-richblack-300 lg:w-[100%]">
                StudyNotion was born out of a simple idea: to make learning easy
                and fun for everyone. It all started when Yash and Vedika, two
                learners, realized the challenges students face in finding
                quality educational resources.
              </p>
              <p className="text-base font-semibold text-justify text-richblack-300 lg:w-[100%]">
                Fueled by their passion for education and technology, Yash and
                Vedika embarked on a journey to create a platform that would
                revolutionize the way people learn. They envisioned a place
                where students could explore a wide range of courses, connect
                with expert instructors, and unleash their full potential.
              </p>
              <p className="text-base font-semibold text-justify text-richblack-300 lg:w-[100%]">
                Join us on this journey as we rewrite the story of education
                with StudyNotion. Together, let's learn, grow, and inspire the
                next generation of learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section> */}

      {/* <StatsComponenet /> */}
      <section className="mx-auto mt-20 mb-20  w-11/12 max-w-maxContent flex justify-between gap-20 text-richblack-300">
        {/* <LearningGrid /> */}
        {/* <ContactFormSection /> */}
        <div className="flex justify-evenly">
          <div
            className="flex flex-col gap-6 mt-10
        "
          >
            <div className="w-[100%] flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">
                <HighlightText text={"Want to Connect with us?"} />
              </h1>
              <p className="text-md text-justify font-semibold">
                Feel free to reach out to us anytime, and our team will be happy
                to assist you. Fill the form and we will try to contact you as
                soon as possible or you can also explore our wide range of
                courses
              </p>
            </div>
            <div className="flex gap-x-6">
              <IconBtn
                text={"Contact Us"}
                onclick={() => Navigate("/contact")}
              />
              <IconBtn text={"Explore"} onclick={() => Navigate("/")} />
            </div>
          </div>
          <div className="w-[100%]">
            <img
              src={
                "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?t=st=1709890819~exp=1709894419~hmac=bf67862c6b93f080cbef6661b8ec900bbbbcb73a40677bdd5bdb7a05dc6f2683&w=740"
              }
              alt="ContactUs Image"
              className="rounded-md w-[300px] mx-auto shadow-[0_0_20px_0] shadow-[#67e1fc] hidden sm:block" // Hide on small screens
            />
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default About;
