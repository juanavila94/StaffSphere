import EmployeeList from "../../Components/Birthday/Birthday.js";
// eslint-disable-next-line no-unused-vars
import EmployeeRetention from "../../Components/Charts/BarChart.js";
import DoughnuChart from "../../Components/Charts/DoughnuChart.js";
import EventsDashboards from "../../Components/EventsDashboard/EventsDashboard.jsx";
import MiniEmail from "../../Components/MiniEmail/MiniEmail.jsx";
import WelcomeDashboard from "../../Components/WelcomeDashboard/WelcomeDashboard.jsx";

const Dashboarts = () => {
  return (
    <div className="w-full h-screen xl:ml-72 lg:ml-32 pt-16 flex pr-16">
      {/* <EmployeeRetention/> */}
      <div className="flex flex-col w-full gap-16">
        <WelcomeDashboard />
        <EventsDashboards />
      </div>
      <div className="flex flex-col w-full gap-5">
        <MiniEmail />
        <div className="flex items-center justify-center">
        <DoughnuChart />
        <EmployeeList />
        </div>
      </div>
    </div>
  );
};

export default Dashboarts;
