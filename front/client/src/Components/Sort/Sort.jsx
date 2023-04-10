import { contentFilters } from '../../state/redux/actions/actions'
import { useDispatch } from "react-redux";



const Sort = ({ selectedOption, handleSelectChange }) => {
  const AtZ = "AtZ";
  const ZtA = "ZtA";

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const sort = event.target.value;
    dispatch(contentFilters({ sort: sort }));
    handleSelectChange({ ...selectedOption, sort: sort });
  };

  return (
    <div className=" flex ">
      <h2 className="flex justify-center items-center mr-2 sm:text-gray-800 text-white ">
        Order:{" "}
      </h2>
      <select
        value={selectedOption.sort}
        className="border-2 border-gray-200"
        name=""
        onChange={handleChange}
        defaultValue="default"
      >
        <option value="default" hidden>
          Select
        </option>
        <option value={AtZ}>Ascendent</option>
        <option value={ZtA}>Descendent</option>
      </select>
    </div>
  );
};

export default Sort;