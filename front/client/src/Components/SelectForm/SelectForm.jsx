import { RiAlertFill } from "react-icons/ri";

const SelectForm = ({
  name,
  handler,
  optionQuantity,
  error,
  label,
  touched,
  value,
  users,
}) => {
  return (
    <div className="lg:m-4 lg:w-60 md:w-[600px] sm:w-[450px] ssm:[200px] ssm:m-auto">
      <label className={`text-base block`} valid={error}>
        {label}
      </label>
      <select
        className={` rounded-md border-0 outline-none border-transparent h-10 px-2 group focus:border-blue-400 lg:m- lg:w-60 md:w-[600px] sm:w-[450px] ssm:w-full ssm:m-auto`}
        name={name}
        defaultValue="default"
        onChange={handler}
      >
        <option value={value} hidden>
          {value}
        </option>
        {optionQuantity.map((el, i) => (

          <option disabled={el.disable} value={el.value} key={i}>
            {el.html}
          </option>
        ))}
      </select>
      <div className="text-end">
        <p className="text-red-400 text-xs">
          <i className="text-red-400 inline-block opacity-0">
            <RiAlertFill />
          </i>
          {error}
        </p>
      </div>
    </div>
  );
};

export default SelectForm;
