import { useSelector } from "react-redux";

const WelcomeDashboard = () => {
  let employeeDetail = useSelector((state) => state.currentEmployee);
  const {
    // id,
    name,
    // lastName,
    // birthDate,
    // email,
    // address,
    // dni,
    // tel,
    role,
    // position,
    // area,
    // cuil,
    // cbu,
    // dateOfAdmission,
    image,
  } = employeeDetail;
  const date = new Date();
  const day = date.toLocaleString("en", { day: "numeric" });
  const weekday = date.toLocaleString("en", { weekday: "long" });
  const year = date.toLocaleString("en", { year: "numeric" });
  const month = date.toLocaleString("en", { month: "long" });
  return (
    <div className=" bg-sky-400 shadow-2xl text-white flex flex-col w-9/12 rounded-md overflow-auto p-5 gap-10">
      <div className="flex justify-between  gap-2">
        <div className="flex flex-col justify-between">
          <h3 className="tex text-sm">{role}</h3>
          <h3 className="text-gray-800">
            Hola <span className="text-xl underline">{name}</span>
          </h3>
          <h2 className=" text-3xl">Welcome!</h2>
        </div>
        <div className="border-2 border-white rounded-full">
          <img
            className=" w-24 h-24 object-cover inline-block rounded-full"
            src={image}
            alt=""
          />
        </div>
      </div>
      <p className=" text-xs">{`${weekday}, ${month} ${day}, ${year}`}</p>
    </div>
  );
};

export default WelcomeDashboard;
