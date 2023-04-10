import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="flex-1 grid sm:grid-cols-7 sm:grid-rows-5 ssm:grid-cols-1 ssm:grid-rows-auto gap-1 ml-4">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
