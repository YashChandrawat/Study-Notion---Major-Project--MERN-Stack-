import { useSelector } from "react-redux";
import  Spinner  from "../Components/Common/Spinner";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return (
      <div className="mt-10">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
