/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { getBirthday } from "../../state/redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerNombreMes } from "../Birthday/BirthMonth";
import { Link } from "react-router-dom";

const EmployeeListUser= () => {
  const birthday = useSelector((state) => state.birthday);
  const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBirthday(CompanyId));
  }, [dispatch]);
  console.log("Birthday", birthday);
  return (
    <div className=" w-full float-right overflow-x-hidden bg-white p-5 rounded-md shadow-2xl">
      <h3 className=" font-medium mb-4 overflow-x-hidden">
        Upcoming Birthdays
      </h3>
      {/* {birthday? ( */}
      <ul className="divide-y divide-gray-200">
        {typeof birthday === "object" ? (
          birthday?.map((employee) => (
              <li
                key={employee.id}
                className="p-3 mb-3 rounded shadow-md flex bg-slate-100 "
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={employee.image}
                  alt={employee.name}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {employee.name} {employee.lastName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {obtenerNombreMes(employee.birthMonth)} {employee.birthDay}
                  </p>
                </div>
              </li>
          ))
        ) : (
          <div
            className="overflow-x-hidden"
            style={{ overflowY: "hidden", scrollbarWidth: "none" }}
          >
            No upcoming birthdays found
          </div>
        )}
      </ul>
    </div>
  );
};

export default EmployeeListUser;

//Estilo lindo pero grande

// <div className="max-w-md mx-auto">
// <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//     {birthday.map((employee) => (
//       <li className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={employee.id}>
//         <div className="flex-shrink-0">
//           <img className="h-48 w-full object-cover" src={employee.image} alt={employee.name} />
//         </div>
//         <div className="flex-1 bg-white p-4 flex flex-col justify-between">
//           <div className="flex-1">
//             <h3 className="text-lg font-medium">{employee.name} {employee.lastName}</h3>
//             <p className="text-sm">{obtenerNombreMes(employee.birthMonth)}{" "}{employee.birthDay}</p>
//           </div>
//           <div className="mt-4">
//             <a href={`employee/${employee.id}`} className="text-base font-medium text-indigo-600 hover:text-indigo-500">
//               View Profile
//             </a>
//           </div>
//         </div>
//       </li>
//     ))}
//   </ul>
// </div>
