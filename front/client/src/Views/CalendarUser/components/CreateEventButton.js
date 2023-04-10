import React, { useContext } from "react";
// import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded flex items-center shadow-md  bg-sky-400
shadow-sky-200 hover:bg-sky-300 active:shadow-2xl"
    >
      <span class="material-symbols-outlined ">add</span>
      {/* <img src={plusImg} alt="create_event" className="w-7 h-7" /> */}
      <span className="pl-3 pr-7 "> Create</span>
    </button>
  );
}
