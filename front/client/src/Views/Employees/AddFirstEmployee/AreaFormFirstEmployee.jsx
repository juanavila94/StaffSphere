import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postAreaCrud,
  // getAreasCrud,
  // deleteAreaCrud,
  // updateAreaCrud,
} from "../../../state/redux/actions/actions";
// import { GrFormEdit } from "react-icons/gr";
// import { GrFormClose } from "react-icons/gr";

const AreaFormFirstEmployee = () => {
  const dispatch = useDispatch();

  // const allAreas = useSelector((state) => state.areasCrud);

  const [area, setArea] = useState({
    area: "",
  });

//   const [editArea, setEditArea] = useState(null);

//   const [showList, setShowList] = useState(false);

  const handleChange = (event) => {
    setArea({
      ...area,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
      dispatch(postAreaCrud(area));
      setArea({ area: "" });
    
  };

  // const handleSubmitGet = (event) => {
  //   event.preventDefault();
  // };


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
           CREATE AREA
        </button>
      </form>
    </div>
  );
};

export default AreaFormFirstEmployee;
