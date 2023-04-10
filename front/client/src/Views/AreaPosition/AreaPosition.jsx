import AreaForm from "../../Components/AreaForm/AreaForm";
import PositionForm from "../../Components/PositionForm/PositionForm";

const AreaPosition = () => {
  return (
    <div className="w-full h-screen ml-72">
      <div className="flex flex-col justify-center items-center w-full mt-20">
        <h2 className="text-4xl text-sky-400 font-bold">
          Add Areas & Positions
        </h2>
        <div className="flex flex-row gap-6 items-start justify-center mt-20">
          <AreaForm />
          <PositionForm />
        </div>
      </div>
    </div>
  );
};

export default AreaPosition;
