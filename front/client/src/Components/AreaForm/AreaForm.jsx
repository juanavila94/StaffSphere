/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postAreaCrud,
  getAreasCrud,
  deleteAreaCrud,
  updateAreaCrud,
} from "../../state/redux/actions/actions";
import { GrFormEdit } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";

const AreaForm = () => {
  const dispatch = useDispatch();

  const allAreas = useSelector((state) => state.areasCrud);
  const employee = useSelector((state) => state.currentEmployee);

  const [area, setArea] = useState({
    area: "",
    CompanyId: employee.CompanyId,
  });

  const [editArea, setEditArea] = useState(null);
  const [showList, setShowList] = useState(false);

  const handleChange = (event) => {
    setArea({
      ...area,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
    if (editArea) {
      handleUpdate(event);
    } else {
      dispatch(postAreaCrud(area));
      setArea({ area: "", CompanyId: employee.CompanyId });
    }
  };

  const handleSubmitGet = (event) => {
    event.preventDefault();
    dispatch(getAreasCrud(employee.CompanyId));
    setShowList(!showList);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateAreaCrud(editArea.id, area));
    setEditArea(null);
    setArea({ area: "", CompanyId: employee.CompanyId });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <form onSubmit={handleSubmitPost} className="flex flex-col gap-2 w-80">
        <input
          placeholder="Insert Area"
          name="area"
          value={area.area}
          onChange={handleChange}
          className="rounded-md block h-10 px-2 outline-none focus:border-blue-400"
          autoComplete="off"
        ></input>
        <button
          type="submit"
          className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
        >
          {editArea ? "UPDATE AREA" : "CREATE AREA"}
        </button>
      </form>
      <div onClick={handleSubmitGet} className="flex flex-col gap-2 w-80">
        <button
          type="submit"
          className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
        >
          {showList ? "HIDE AREAS" : "GET AREAS"}
        </button>
        {showList && (
          <div>
            <ul>
              {Array.isArray(allAreas) && allAreas?.length > 0 ? (
                allAreas?.map((area) => (
                  <div className="relative mb-1">
                    <p
                      key={area?.id}
                      onClick={(event) => event.stopPropagation()}
                      className="flex justify-center items-center border rounded h-8 font-semibold border-gray-400 bg-white"
                    >
                      {area?.area}
                    </p>
                    <button
                      onClick={() => {
                        setEditArea(area);
                        setArea({ area: area.area });
                      }}
                      className="absolute top-2 right-10"
                    >
                      <GrFormEdit className="bg-sky-400 rounded-full" />
                    </button>
                    <button
                      onClick={() => dispatch(deleteAreaCrud(area?.id))}
                      className="absolute top-2 right-4"
                    >
                      <GrFormClose className="bg-sky-400 rounded-full" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="flex justify-center items-center rounded h-8 font-semibold">
                  No areas found
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaForm;
