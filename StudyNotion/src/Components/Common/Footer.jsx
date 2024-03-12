import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Footer Section 1 */}
          <div className="footer-section">
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] object-cover mb-2"
            />
            <p className="text-sm mb-2">
              StudyNotion was born out of a simple idea: to make learning easy
              and fun for everyone.
            </p>
            <div className="flex gap-4">
              <button href={""}>
                <FaGithub size={20} />
              </button>
              <button href={""}>
                <FaInstagram size={20} />
              </button>
              <button href={""}>
                <FaLinkedin size={20} />
              </button>
            </div>
          </div>

          {/* Footer Section 2 */}
          <div className="footer-section">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/category-catalog">Catalog</Link>
              </li>
              <li className="mb-2">
                <Link to="/dashboard/enrolled-courses">Enrolled-Courses</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Footer Section 3 */}
          <div className="footer-section">
            <h2 className="text-xl font-semibold mb-4">Courses Avaiable</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/catalog/web-dev">Web Development</Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog/python">Python</Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog/android">Android</Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog/aiml">AIML</Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog/dsa">Data Structures & Algorithm</Link>
              </li>
            </ul>
          </div>

          {/* Footer Section 4 */}
          <div className="footer-section">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-sm mb-2">
              Have questions or inquiries? Feel free to reach out to us.
            </p>
            <ul className="text-sm">
              <li className="mb-2">Email: yashchandrawat52@gmail.com</li>
              <li className="mb-2">Phone: +91 7772839465</li>
              <li className="mb-2">Address: Indore</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 mt-8">
        <div className="container mx-auto px-4 py-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Yash Chandrawat. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { FooterLink2 } from "../../data/footer-links";
// import { FooterLink1 } from "../../data/footer-links";
// import { Link } from "react-router-dom";

// // Images
// import Logo from "../../assets/Logo/Logo-Full-Light.png";

// // Icons
// import {
//   FaFacebook,
//   FaGithub,
//   FaGoogle,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
// const Resources = [
//   "Articles",
//   "Blog",
//   "Chart Sheet",
//   "Code challenges",
//   "Docs",
//   "Projects",
//   "Videos",
//   "Workspaces",
// ];
// const Plans = ["Paid memberships", "For students", "Business solutions"];
// const Community = ["Forums", "Chapters", "Events"];
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();

// const Footer = () => {
//   return (
//     <div className="bg-richblack-800">
//       <div className="flex lg:flex-row gap-8 items-center justify-center w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
//         <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
//           {/* Section 1 */}
//           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
//             {/* Hero */}
//             <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
//               <img src={Logo} alt="" className="object-contain" />
//               <div className="flex flex-col gap-4  justify-center items-center text-lg">
//                 <Link>
//                   <FaGithub size={22} className="text-white" />
//                 </Link>
//                 <Link>
//                   <FaLinkedin size={22} className="text-white" />
//                 </Link>
//                 <Link>
//                   <FaInstagram size={22} className="text-white" />
//                 </Link>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p>©{currentYear} StudyNotion</p>
//                 <p>StudyNotion is registered</p>
//               </div>
//             </div>

//             {/* Plans & Community */}
//             {/* <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
//               <h1 className="text-richblack-50 font-semibold text-[16px]">
//                 {FooterLink1[0]?.title}
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {FooterLink1[0]?.links.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.link}>{ele.title}</Link>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div> */}

//             {/* Quick Links */}
//             <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
//               <h1 className="text-richblack-50 font-semibold text-[16px]">
//                 {FooterLink1[1]?.title}
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {FooterLink1[1]?.links.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.link}>{ele.title}</Link>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="lg:w-[50%] flex flex-wrap flex-row justify-evenly pl-3 lg:pl-5 gap-3">
//             {FooterLink2.map((ele, i) => {
//               return (
//                 <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
//                   <h1 className="text-richblack-50 font-semibold text-[16px]">
//                     {ele.title}
//                   </h1>
//                   <div className="flex flex-col gap-2 mt-2">
//                     {ele.links.map((link, index) => {
//                       return (
//                         <div
//                           key={index}
//                           className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                         >
//                           <Link to={link.link}>{link.title}</Link>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
//         {/* Section 1 */}
//         <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
//           <div className="flex flex-row">
//             {BottomFooter.map((ele, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={` ${
//                     BottomFooter.length - 1 === i
//                       ? ""
//                       : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                   } px-3 `}
//                 >
//                   <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
//                     {ele}
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="text-center">
//             Made with ❤️ Yash Chandrawat © {currentYear} Studynotion
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
