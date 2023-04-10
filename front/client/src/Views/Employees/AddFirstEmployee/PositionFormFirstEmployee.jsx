import { useState } from "react";
import { useDispatch, 
  // useSelector 
} from "react-redux";
import {
  postPositionCrud,
  // getPositionsCrud,
  // deletePositionCrud,
  // updatePositionCrud,
} from "../../../state/redux/actions/actions";
// import { GrFormEdit } from "react-icons/gr";
// import { GrFormClose } from "react-icons/gr";

const PositionFormFirstEmployee = () => {
  const dispatch = useDispatch();

  // const allPositions = useSelector((state) => state.positionsCrud);

  const [position, setPosition] = useState({
    position: "",
  });

  const handleChange = (event) => {
    setPosition({
      ...position,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
      dispatch(postPositionCrud(position));
      setPosition({ position: "" });
    
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
          CREATE POSITION
        </button>
      </form>
    
    </div>
  );
};

export default PositionFormFirstEmployee;
