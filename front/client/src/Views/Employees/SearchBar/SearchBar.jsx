import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contentFilters,
  getEmployees,
} from "../../../state/redux/actions/actions";
// import { useAnswer } from "../../../Utils/hooks/answer";

const SearchBar = ({ answer, showAnswer, handleRefresh }) => {
  const [input, setInput] = useState("");
  let dispatch = useDispatch();
  const arrContentFilters = useSelector((state) => state.arrContentFilters);
  // const allEmployees = useSelector((state) => state.allEmployees);
  // console.log(!!allEmployees, 'allll');

  // const { answer, showAnswer } = useAnswer();

  useEffect(() => {
    dispatch(getEmployees(arrContentFilters));
  }, [arrContentFilters, dispatch]);

  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (input.trim().length > 0) {
      // handleRefresh()
      // dispatch(getEmployees(input));
      dispatch(contentFilters({ name: input }));
      setInput("");
    } else {
      setTimeout(() => {
        showAnswer("");
      }, 3000);
    }
  }

  return (
    <>
      <div className="flex flex-col relative pb-2">
        <form
          onSubmit={onSubmit}
          className="flex sm:flex-row ssm:flex-col relative pl-2 justify-center items-center rounded-md sm:border ssm:border-transparent sm:border-sky-400 z-10  ssm:w-fit"
        >
          <input
            className="border-none w-30 sm:w-30 ssm:bg-white p-1 sm:text-start ssm:text-center outline-none text-base sm:bg-slate-100"
            value={input}
            onChange={onChange}
            name="game"
            type="text"
            placeholder="Search a Employee"
          ></input>
          <button
            className="bg-sky-400
shadow-sky-200 hover:bg-sky-300 text-white rounded-r overflow-hidden sm:px-16 sm:py-3 1 active:translate-y-1 active:shadow-2xl ssm:px-8 ssm:py-1"
            type="submit"
          >
            Search
          </button>
        </form>
        <div>
          <p className="text-xs text-red-400 absolute -bottom-2">
            {answer ? answer : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
