/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState } from "react";
import {getBirthday} from "../../state/redux/actions/actions"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {obtenerNombreMes} from "./BirthMonth"
import { Link } from "react-router-dom";
import { RiMailAddLine } from "react-icons/ri";
import axios from "axios";


const EmployeeList = () => {
  
  
  const birthday = useSelector(state => state.birthday)
  const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);


  useEffect(() => {
     dispatch(getBirthday(CompanyId))
      }, [dispatch]
  )


  const sendEmail = async (email) => {
    await axios.post("http://localhost:3001/notifications/birthday", {
          to: email,
        })
        setCheck(true); //setear a true
        console.log(email)
  }

  const [send, setSend] = useState(false)

  const handleButton = (employee) => {
    sendEmail(employee.email);
    setSend(true)
    setTimeout(() => {
      
      setSend(false)
    }, 2000);
  };


  var numeroDeDia = new Date().getDate();
  console.log("Numero de dia: ", numeroDeDia)
  console.log("Birthday", birthday)
    return (
      <div className=" w-full float-right overflow-x-hidden bg-white p-5 rounded-md shadow-2xl">
        <h3 className="font-medium mb-4 overflow-x-hidden h-5">
          Upcoming Birthdays
        </h3>
        {/* {birthday? ( */}
        <ul className="divide-y divide-gray-200">
          {typeof birthday === "object" ? (
            birthday?.map((employee) => (
              // <Link to={`/employee/${employee.id}`}>
              <li
                key={employee.id}
                className="p-3 mb-3 rounded shadow-md flex flex-wrap hover:-translate-y-1 bg-slate-100 "
              >
                <div className="xl:inline-block xl:w-fit lg:w-full lg:flex  lg:justify-center lg:items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={employee.image}
                    alt={employee.name}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {employee.name} {employee.lastName}
                  </p>
                  <p className="text-sm text-gray-500 relative">
                    {obtenerNombreMes(employee.birthMonth)} {employee.birthDay}
                    {employee.birthDay == numeroDeDia && (
                      <>
                        <span
                          className={`${
                            send ? "inline-block" : "hidden"
                          } pl-2 text-sky-400`}
                        >
                          Enviado
                        </span>
                        <button
                          onClick={() => handleButton(employee)}
                          className={`${
                            send ? "hidden" : "inline-block"
                          }  bg-sky-400 text-white rounded  overflow-hidden p-2 ssm:py-1 h-6 ml-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300 `}
                        >
                          <RiMailAddLine size={15} />
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </li>
              // </Link>
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
  
  export default EmployeeList;







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






  