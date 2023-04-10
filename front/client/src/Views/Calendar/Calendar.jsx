// import SideBar from "../../Components/SideBar/SideBar";
import CalendarAPI from "./CalendarAPI";
import ContextWrapper from "./context/ContextWrapper";

const Calendar = () => {
  return (
    // <div className="grid grid-cols-12 ">
    //   <div className="col-span-3 ">
    //     {/* <SideBar /> */}
    //   </div>
      <div className="w-full h-screen">
        <ContextWrapper>
          <CalendarAPI />
        </ContextWrapper>
      </div>
    // </div>
  );
};

export default Calendar;
