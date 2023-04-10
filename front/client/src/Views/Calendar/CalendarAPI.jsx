import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import { getEvents } from "../../state/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const CalendarAPI = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  const dispatch = useDispatch()
      const currentEmployee = useSelector((state) => state.currentEmployee);
      const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

    useEffect(() => {
      dispatch(getEvents(CompanyId));
    }, [dispatch, CompanyId]);

  return (
    <React.Fragment>
      <div className=" xl:w-full xl:pl-72 lg:ml-16 xl:ml-0 sm:ml-16 ssm:pl-16 pr-16 ssm:overflow-auto ssm:overflow-x-hidden">
        {showEventModal && <EventModal />}

        <div className="h-[680px] flex flex-col ">
          <CalendarHeader />
          <div className="flex flex-1 ">
            <div className="lg:block ssm:hidden">
              <Sidebar />
            </div>
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarAPI;