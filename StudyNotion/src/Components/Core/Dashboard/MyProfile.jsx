import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "../../../utils/formattedDate";
import IconBtn from "../../Common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="mb-8 text-3xl font-medium text-richblack-5">My Profile</h1>

      <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn text="Edit" onclick={() => navigate("/dashboard/settings")}>
          <RiEditBoxLine />
        </IconBtn>
      </div>

      <div className="my-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn text="Edit" onclick={() => navigate("/dashboard/settings")}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`text-sm font-medium ${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          }`}
        >
          {user?.additionalDetails?.about ?? "Write something about yourself"}
        </p>
      </div>

      <div className="my-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn text="Edit" onclick={() => navigate("/dashboard/settings")}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-richblack-600">First Name</p>
            <p className="text-sm font-medium text-richblack-5">
              {user?.firstName}
            </p>
          </div>
          <div>
            <p className="text-sm text-richblack-600">Last Name</p>
            <p className="text-sm font-medium text-richblack-5">
              {user?.lastName}
            </p>
          </div>
          <div>
            <p className="text-sm text-richblack-600">Email</p>
            <p className="text-sm font-medium text-richblack-5">
              {user?.email}
            </p>
          </div>
          <div>
            <p className="text-sm text-richblack-600">Phone Number</p>
            <p className="text-sm font-medium text-richblack-5">
              {user?.additionalDetails?.contactNumber ?? "Add contact number"}
            </p>
          </div>
          <div>
            <p className="text-sm text-richblack-600">Date Of Birth</p>
            <p className="text-sm font-medium text-richblack-5">
              {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                "Add date of birth"}
            </p>
          </div>
          <div>
            <p className="text-sm text-richblack-600">Gender</p>
            <p className="text-sm font-medium text-richblack-5">
              {user?.additionalDetails?.gender ?? "Add gender"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
