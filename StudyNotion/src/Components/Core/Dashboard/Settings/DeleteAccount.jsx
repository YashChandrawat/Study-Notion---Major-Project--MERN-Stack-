import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../../../../services/operations/SettingsAPI";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
            <FiTrash2 className="text-3xl text-pink-200" />
          </div>
          <div className="flex flex-col flex-grow space-y-2">
            <h2 className="text-lg font-semibold text-richblack-5">
              Delete Account
            </h2>
            <div className="text-pink-25">
              <p>Would you like to delete your account?</p>
              <p>
                This account may contain paid courses. Deleting your account is
                permanent and will remove all the content associated with it.
              </p>
            </div>
            <button
              type="button"
              className="cursor-pointer italic text-pink-300 border border-solid border-red rounded-lg w-fit p-2"
              onClick={handleDeleteAccount}
            >
              I want to delete my account.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
