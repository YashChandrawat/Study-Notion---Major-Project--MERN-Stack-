const ContactDetails = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-2 md:h-screen">
      <h1 className="text-caribbeangreen-400 text-2xl ">GET IN TOUCH</h1>
      <h1 className="text-3xl sm:text-5xl pt-5 pb-5 ">
        Love to Hear from You, Get In Touch
      </h1>
      <p>
        Thank you for your interest in our online learning platform. We're here
        to help and answer any questions you may have. Please feel free to reach
        out to us.
      </p>
      <img
        className="mx-auto pt-6 max-w-xs sm:max-w-full"
        src="https://educo.tokotema.com/wp-content/uploads/2023/05/happy-and-confident-call-center-agent-sitting-in-f-2022-12-09-23-59-48-utc-1.jpg"
        alt="Happy call center agent"
      />
    </div>
  );
};

export default ContactDetails;
// import * as Icon1 from "react-icons/bi";
// import * as Icon3 from "react-icons/hi2";
// import * as Icon2 from "react-icons/io5";

// const contactDetails = [
//   {
//     icon: "HiChatBubbleLeftRight",
//     heading: "Chat on us",
//     description: "Our friendly team is here to help.",
//     details: "info@studynotion.com",
//   },
//   {
//     icon: "BiWorld",
//     heading: "Visit us",
//     description: "Come and say hello at our office HQ.",
//     details:
//       "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
//   },
//   {
//     icon: "IoCall",
//     heading: "Call us",
//     description: "Mon - Fri From 8am to 5pm",
//     details: "+123 456 7869",
//   },
// ];

// const ContactDetails = () => {
//   return (
//     <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
//       {contactDetails.map((ele, i) => {
//         let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
//         return (
//           <div
//             className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
//             key={i}
//           >
//             <div className="flex flex-row items-center gap-3">
//               <Icon size={25} />
//               <h1 className="text-lg font-semibold text-richblack-5">
//                 {ele?.heading}
//               </h1>
//             </div>
//             <p className="font-medium">{ele?.description}</p>
//             <p className="font-semibold">{ele?.details}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ContactDetails;
