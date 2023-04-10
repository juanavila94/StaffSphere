import EmployeeListUser from "../../Components/EmployeeListUser/EmployeeListUser.jsx";
import EventsDashboards from "../../Components/EventsDashboard/EventsDashboard.jsx";
import WelcomeDashboard from "../../Components/WelcomeDashboard/WelcomeDashboard.jsx";

const DashboardUser = () => {
  return (
    <div className="w-full h-screen ml-72 pt-16 flex pr-16">
      {/* <EmployeeRetention/> */}
      <div className="flex flex-col w-full gap-16">
        <WelcomeDashboard />
        <EventsDashboards />
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-center justify-center gap-5">
          <EmployeeListUser/>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
