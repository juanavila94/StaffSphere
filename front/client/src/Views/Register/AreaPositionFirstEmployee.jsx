import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";

import {
  postAreaCrud,
  postPositionCrud
} from "../../state/redux/actions/actions";



const AreaPositionFirstEmployee = () => {
  const dispatch = useDispatch();

  const companyId = useSelector((state) => state.newCompanyId);
  
  const [area, setArea] = useState({
    area: "",
    CompanyId: ""
  });
  const [position, setPosition] = useState({
    position: "",
    CompanyId: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleChangeArea = (event) => {
    setArea({
      ...area,
      CompanyId: companyId,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleChangePosition = (event) => {
    setPosition({
      ...position,
      CompanyId: companyId,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
      dispatch(postAreaCrud(area));
      setArea({ area: "" });
      dispatch(postPositionCrud(position));
      setPosition({ position: "" });

      setFormSubmitted(true);
  };



return (
  <div className="flex h-screen">
    <div className="w-1/2 flex items-center  justify-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl mt-20">StaffSphere Register Company</h1>
        <h6 class="text-xl  mb-4">Start unleashing the full potential of our personnel management software!</h6>
        <p class="text-gray-600 leading-loose font-sans-serif">
        Please enter your area and position
        </p>
        <div>
          <div className="flex flex-col items-center justify-center gap-2"
          >
            <form onSubmit={handleSubmitPost}
              className="flex flex-col gap-2 w-80"
              >
                <input
                placeholder="Insert Area"
                name="area"
                value={area.area}
                onChange={handleChangeArea}
                className="rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                autoComplete="off"
                ></input>
                <input
                placeholder="Insert Position"
                name="position"
                value={position.position}
                onChange={handleChangePosition}
                className="rounded-md block h-10 px-2 outline-none focus:border-blue-400"
                autoComplete="off"
                ></input>
                <button
                type="submit"
                disabled={!area.area || !position.position}
                className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
                >
                CONTINUE
                </button>
              </form>
              <div>
              {formSubmitted &&
              <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Just one more thing to do! 🎉</h2>
                  <p className="mb-4">Complete your personal information and become an active user of our personnel management software!</p>
                  <div className="flex justify-end">
                  
                  <Link to="/addFirstEmployee" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Continue</  Link>
                  </div>
                </div>
              </div>
              }
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <img src="https://spheremodel.com/blog/wp-content/uploads/2019/03/gerente-joven.jpg" alt="Imagen" className="h-full w-full object-cover"/>
    </div>
  </div>
);
};


export default AreaPositionFirstEmployee;

