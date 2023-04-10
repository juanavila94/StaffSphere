import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postPositionCrud,
  getPositionsCrud,
  deletePositionCrud,
  updatePositionCrud,
} from "../../state/redux/actions/actions";
import { GrFormEdit } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";

const PositionForm = () => {
  const dispatch = useDispatch();

  const allPositions = useSelector((state) => state.positionsCrud);
  const employee = useSelector((state) => state.currentEmployee);

  const [position, setPosition] = useState({
    position: "",
    CompanyId: employee.CompanyId,
  });

  const [editPosition, setEditPosition] = useState(null);

  const [showList, setShowList] = useState(false);

  const handleChange = (event) => {
    setPosition({
      ...position,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
    if (editPosition) {
      handleUpdate(event);
    } else {
      dispatch(postPositionCrud(position));
      setPosition({ position: "", CompanyId: employee.CompanyId });
    }
  };

  const handleSubmitGet = (event) => {
    event.preventDefault();
    dispatch(getPositionsCrud(employee.CompanyId));
    setShowList(!showList);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updatePositionCrud(editPosition.id, position));
    setEditPosition(null);
    setPosition({ position: "", CompanyId: employee.CompanyId });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <form onSubmit={handleSubmitPost} className="flex flex-col gap-2 w-80">
        <input
          placeholder="Insert Position"
          name="position"
          value={position.position}
          onChange={handleChange}
          className="rounded-md block h-10 px-2 outline-none focus:border-blue-400"
          autoComplete="off"
        ></input>
        <button
          type="submit"
          className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
        >
          {editPosition ? "UPDATE POSITION" : "CREATE POSITION"}
        </button>
      </form>
      <form onClick={handleSubmitGet} className="flex flex-col gap-2 w-80">
        <button
          type="submit"
          className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
        >
          {showList ? "HIDE POSITIONS" : "GET POSITIONS"}
        </button>
        {showList && (
          <div>
            <ul>
              {Array.isArray(allPositions) && allPositions?.length > 0 ? (
                allPositions?.map((position) => (
                  <div className="relative mb-1">
                    <p
                      key={position?.id}
                      className="flex justify-center items-center border rounded h-8 font-semibold border-gray-400 bg-white"
                    >
                      {position?.position}
                    </p>
                    <button
                      onClick={() => {
                        setEditPosition(position);
                        setPosition({ position: position.position });
                      }}
                      className="absolute top-2 right-10"
                    >
                      <GrFormEdit className="bg-sky-400 rounded-full" />
                    </button>
                    <button
                      onClick={() => dispatch(deletePositionCrud(position?.id))}
                      className="absolute top-2 right-4"
                    >
                      <GrFormClose className="bg-sky-400 rounded-full" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="flex justify-center items-center rounded h-8 font-semibold">
                  No positions found
                </p>
              )}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default PositionForm;
