import { RiAlertFill } from "react-icons/ri";

const SelectFormSec = ({
  label,
  name,
  id,
  touched,
  handler,
  error,
  optionQuantity,
  users
}) => {
  

const errorStyle =
  error && touched
    ? "opacity-1 transition-all duration-500"
    : "opacity-0 transition-all duration-500";


  return (
    <div className="lg:m-4 lg:w-60 md:w-[600px] sm:w-[450px] ssm:[200px] ssm:m-auto">
      <label
        className={`${error && touched ? "text-red-400" : ""} text-base block`}
      >
        {label}
      </label>
      <select
        className={`${
          error && touched ? "border-red-400 border-2 " : ""
        } rounded-md  lg:m- lg:w-60 md:w-[600px] sm:w-[450px] ssm:w-full ssm:m-auto h-10 px-2 outline-none focus:border-blue-400`}
        onChange={handler}
        name={name}
        id={id}
        defaultValue="default"
      >
        {users === -1 && (
          <option value="default" hidden>
            {label}
          </option>
        )}
        <option value="default" hidden>
          {label}
        </option>
        {optionQuantity.map((pos, i) => (
          <option key={i} value={pos.id}>
            {pos?.position || pos?.area}
          </option>
        ))}
      </select>
      <div className="text-end">
        <p className={`${errorStyle} text-red-400 text-xs`}>
          <i className="text-red-400 inline-block">
            <RiAlertFill />
          </i>
          {error}
        </p>
      </div>
    </div>
  );
};

export default SelectFormSec;
