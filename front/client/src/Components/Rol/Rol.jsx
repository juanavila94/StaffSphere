import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contentFilters,
  getEmployees,
  getRoles,
} from "../../state/redux/actions/actions";

const Rol = ({ selectedOption, handleSelectChange, CompanyId }) => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roles);
  // console.log(roles,'rollll');
  const arrContentFilters = useSelector((state) => state.arrContentFilters);
  // const arrContentFilters = useSelector((state) => state.arrContentFilters);

  // useEffect(() => {}, [dispatch]);
  useEffect(() => {
    dispatch(getEmployees(arrContentFilters, undefined, CompanyId));
    dispatch(getRoles(arrContentFilters));
  }, [arrContentFilters, CompanyId, dispatch]);

  const handleChange = (event) => {
    const role = event.target.value;
    dispatch(contentFilters({ role: role }));
    handleSelectChange({ ...selectedOption, role: role });
  };

  return (
    <div className="flex">
      <h3 className="flex justify-center items-center mr-2 sm:text-gray-800 text-white">
        Roles:{" "}
      </h3>
      <select
        value={selectedOption.role}
        className="border-2 border-gray-200"
        name=""
        onChange={handleChange}
        defaultValue="default"
      >
        <option value="default" hidden>
          Select
        </option>
        {/* {roles.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option> */}
        {roles
          // .filter((rol) => rol !== "SuperAdmin")
          .map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Rol;
