// import { Link, matchPath, useLocation } from "react-router-dom";
// // import logo from "../../assets/Logo/Logo-Full-Light01.png";
// import logo from "../../assets/Logo/Logo-Full-Dark.png";
// import logo2 from "../../assets/TimeLineLogo/Logo4.svg";
// import { NavbarLinks } from "../../data/navbar-links";
// import { useSelector } from "react-redux";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import ProfileDropDown from "../Core/Auth/ProfileDropDown";
// import { useEffect, useState } from "react";
// import { apiConnector } from "../../services/apiConnector";
// import { categories } from "../../services/apis";
// import { FaChevronDown } from "react-icons/fa6";
// import { PiStudentFill } from "react-icons/pi";

// // const subLinks = [
// //   {
// //     title: "Python",
// //     link: "/catalog/python",
// //   },
// //   {
// //     title: "Web Development",
// //     link: "/catalog/web-development",
// //   },
// // ];
// import { useRef } from "react";
// import { AiOutlineCaretDown } from "react-icons/ai";
// import { VscDashboard, VscSignOut } from "react-icons/vsc";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import useOnClickOutside from "../../hooks/useOnClickOutside";
// import { logout } from "../../services/operations/authAPI";
// import { FaBars } from "react-icons/fa";
// import { SideDrawer } from "./Drawer";

// const Navbar = () => {
//   // The required data from the redux store has been fetched out here
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const { totalItems } = useSelector((state) => state.cart);

//   const [subLinks, setSubLinks] = useState([]);

//   const fetchSubLinks = async () => {
//     try {
//       const result = await apiConnector("GET", categories.CATEGORIES_API);
//       setSubLinks(result.data.data);
//     } catch (error) {
//       // console.log("Cannot able to fetch the category");
//     }
//   };
//   useEffect(() => {
//     fetchSubLinks();
//     // console.log("User:", user?.image);
//   }, []);

//   const location = useLocation();
//   const matchRoutes = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };

//   const { loading } = useSelector((state) => state.profile);

//   // const { user } = useSelector((state) => state.profile);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useOnClickOutside(ref, () => setOpen(false));

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//     console.log(isDrawerOpen);
//   };

//   return (
//     <div className="flex bg-pure-greys-25 h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
//       <div className="flex w-11/12 max-w-maxContent items-center justify-between text-black">
//         <Link to={"/"} className="flex">
//           {/* <img src={logo2} alt={"logo"} width={30} height={42} /> */}
//           <img
//             src={logo}
//             alt={"logo"}
//             width={135}
//             height={30}
//             className="mt-1"
//           />
//           {/* <p className="text-white font-semibold text-2xl">STUDY NOTION</p> */}
//         </Link>

//         {/* Nav Links */}
//         <nav className="hidden md:block">
//           <ul className="flex gap-x-6 text-richblack-25">
//             {NavbarLinks.map((link, index) => (
//               <li key={index}>
//                 <Link to={link?.path}>
//                   <p
//                     className={`${
//                       matchRoutes(link?.path)
//                         ? "text-yellow-600"
//                         : "text-richblack-900"
//                     }`}
//                   >
//                     {link.title}
//                   </p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Nav Links Mobile */}
//         <nav className="sm:block md:hidden">
//           <div className="text-white">
//             <SideDrawer />
//           </div>
//         </nav>

//         {/* Login/Signup and extras */}
//         <div className="lg:flex md:flex gap-x-4 items-center hidden ">
//           {user && user?.accountType != "Instructor" && (
//             <Link to={"/dashboard/cart"} className="relative">
//               <AiOutlineShoppingCart className="text-2xl text-richblack-900" />
//               {totalItems > 0 && (
//                 <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           )}
//           {token === null && (
//             <Link to={"/login"}>
//               <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
//                 Log In
//               </button>
//             </Link>
//           )}
//           {token === null && (
//             <Link to={"/signup"}>
//               <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
//                 Sign Up
//               </button>
//             </Link>
//           )}
//           {token !== null && (
//             <button
//               className="relative cursor-pointer"
//               onClick={() => setOpen(true)}
//             >
//               <div className="flex items-center gap-x-1">
//                 <img
//                   src={user?.image}
//                   alt={`profile-${user?.firstName}`}
//                   className="aspect-square w-[30px] rounded-full object-cover"
//                 />
//                 <AiOutlineCaretDown className="text-sm text-richblack-100" />
//               </div>
//               {open && (
//                 <div
//                   onClick={(e) => e.stopPropagation()}
//                   className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
//                   ref={ref}
//                 >
//                   <Link
//                     to="/dashboard/my-profile"
//                     onClick={() => setOpen(false)}
//                   >
//                     <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
//                       <VscDashboard className="text-lg" />
//                       Dashboard
//                     </div>
//                   </Link>
//                   <div
//                     onClick={() => {
//                       dispatch(logout(navigate));
//                       setOpen(false);
//                     }}
//                     className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
//                   >
//                     <VscSignOut className="text-lg" />
//                     Logout
//                   </div>
//                 </div>
//               )}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
// import logo from "../../assets/Logo/Logo-Full-Dark.png";
// import logo2 from "../../assets/TimeLineLogo/Logo.svg";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../Core/Auth/ProfileDropDown";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { FaChevronDown } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { GoHubot } from "react-icons/go";

// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "Web Development",
//     link: "/catalog/web-development",
//   },
// ];
import { useRef } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { logout } from "../../services/operations/authAPI";
import { FaBars } from "react-icons/fa";
import { SideDrawer } from "./Drawer";

const Navbar = () => {
  // The required data from the redux store has been fetched out here
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result.data.data);
    } catch (error) {
      // console.log("Cannot able to fetch the category");
    }
  };
  useEffect(() => {
    fetchSubLinks();
    // console.log("User:", user?.image);
  }, []);

  const location = useLocation();
  const matchRoutes = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const { loading } = useSelector((state) => state.profile);

  // const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log(isDrawerOpen);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between text-black">
        <Link to={"/"} className="flex">
          {/* <img src={logo} alt={"logo"} width={30} height={42} /> */}
          {/* <PiStudentFill className="text-white  size-9" /> */}
          <img
            src={logo}
            alt={"logo"}
            width={135}
            height={30}
            className="mt-1"
          />
          {/* <p className="text-white font-semibold text-2xl">STUDY NOTION</p> */}
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p
                    className={`${
                      matchRoutes(link?.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nav Links Mobile */}
        <nav className="sm:block md:hidden">
          <div className="text-white">
            <SideDrawer />
          </div>
        </nav>

        {/* Login/Signup and extras */}
        <div className="lg:flex md:flex gap-x-4 items-center hidden ">
          {user && user?.accountType != "Instructor" && (
            <>
              <Link to={"/dashboard/cart"} className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                    {totalItems}
                  </span>
                )}
              </Link>
            </>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Log In
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && (
            <button
              className="relative cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="flex items-center gap-x-1">
                <img
                  src={user?.image}
                  alt={`profile-${user?.firstName}`}
                  className="aspect-square w-[30px] rounded-full object-cover"
                />
                <AiOutlineCaretDown className="text-sm text-richblack-100" />
              </div>
              {open && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-[118%] md:w-[130px] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
                  ref={ref}
                >
                  <Link
                    to="/dashboard/my-profile"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                      <VscDashboard className="text-lg" />
                      Dashboard
                    </div>
                  </Link>
                  <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                    <a
                      href={"https://pdf-reader-major.onrender.com/"}
                      className="flex gap-2  w-fit"
                    >
                      <GoHubot
                        className="text-sm text-richblack-100"
                        size={18}
                      />
                      Analyse PDF
                    </a>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(logout(navigate));
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
                  >
                    <VscSignOut className="text-lg" />
                    Logout
                  </div>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
