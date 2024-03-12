import { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import ConfirmationModal from "../../Common/ConfirmationModal";
import SidebarLink from "./SidebarLink";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col ">
        <button
          onClick={toggleSidebar}
          className={`toggle-btn w-fit ml-2 mt-2 bg-richblack-700 text-white rounded-full p-2 border-none focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 ${
            isSidebarOpen ? "absolute z-10 rotate-90" : "absolute"
          }`}
        >
          {isSidebarOpen ? (
            <RxCross2 size={24} className="text-gray-700" />
          ) : (
            <FaBars size={24} className="text-gray-700" />
          )}
        </button>
        <div className="flex flex-col p-2 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-md">
          <div
            className={`sidebar ${
              isSidebarOpen
                ? "translate-x-0 absolute"
                : " -translate-x-full absolute"
            } transition-transform  duration-300 text-white bg-richblack-700 rounded-md overflow-hidden mt-11`}
          >
            <div className="flex flex-col">
              {sidebarLinks.map((link) => {
                if (link.type && user?.accountType !== link.type) return null;
                return (
                  <SidebarLink key={link.id} link={link} iconName={link.icon} />
                );
              })}
            </div>
            <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
            <div className="flex flex-col">
              <SidebarLink
                link={{ name: "Settings", path: "/dashboard/settings" }}
                iconName="VscSettingsGear"
              />
              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: handleLogout,
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="px-8 py-2 text-sm font-medium text-richblack-300"
              >
                <div className="flex items-center gap-x-2">
                  <VscSignOut className="text-lg" />
                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>
          {confirmationModal && (
            <ConfirmationModal modalData={confirmationModal} />
          )}
        </div>
      </div>
    </>
  );
}
