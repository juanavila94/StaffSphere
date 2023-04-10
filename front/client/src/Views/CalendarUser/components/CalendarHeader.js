import dayjs from "dayjs";
import React, { useContext } from "react";
// import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex md:flex-row flex-col items-center ">
      {/* <img src={logo} alt="calendar" className="mr-2 w-12 h-12" /> */}
      <div className="flex md:flex-row ssm:flex-col">

      <h1 className="md:mr-10 ssm:mr-0 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 md:mr-5 ssm:mr-0 bg-sky-400
        shadow-sky-200 hover:bg-sky-300 active:shadow-2xl "
        >
        Today
      </button>
        </div>
      <div className="flex">

      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      </div>
      <h2 className="md:ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
