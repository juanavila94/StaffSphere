import React from "react";
import { useDispatch } from "react-redux";
import {
  getEmployees,
  // resetEmployees,
} from "../../../state/redux/actions/actions";

export default function RefreshEmployees() {
  let dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();
    // dispatch(resetEmployees());
    dispatch(getEmployees());
  }

  return (
    <button
      className="flex relative h-12 w-40 justify-center items-center rounded-md border border-solid border-black"
      onClick={handleClick}
    >
      Refresh employees
    </button>
  );
}
