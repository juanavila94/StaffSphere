// import { Link, useParams } from "react-router-dom";
// import SideBar from "../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmployeeDetail } from "../../state/redux/actions/actions";

const MyProfile = () => {
  // let { id } = useParams();
  let employeeDetail = useSelector((state) => state.currentEmployee);
    const currentEmployee = useSelector((state) => state.currentEmployee);
    const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  let dispatch = useDispatch();

  
  const {
    id,
    name,
    lastName,
    birthDate,
    email,
    address,
    dni,
    tel,
    role,
    position,
    area,
    cuil,
    cbu,
    dateOfAdmission,
    image,
  } = employeeDetail;

  useEffect(() => {
    dispatch(getEmployeeDetail(CompanyId, id));
  }, [id, dispatch]);


  return (
    <>
      <div className="w-full lg:h-screen  xl:ml-72 sm:ml-36 ssm:m-auto pt-16 flex  flex-col gap-10 pb-16">
        <div className="flex gap-16 lg:flex-row ssm:items-center ssm:flex-col-reverse">
          <img
            src={image}
            alt="profilepic"
            className="object-cover lg:w-4/12 sm:w-8/12 ssm:w-12/12 ssm: rounded-md h-[200px] "
          />
          <div className="flex felx-col gap-10 w-8/12 lg:justify-start ssm:justify-center ">
            <div className="flex flex-col justify-center lg:items-start ssm:items-center gap-5">
              <div className="flex lg:flex-wrap lg:text-start  ssm:flex-wrap ssm:text-center gap-5 text-6xl flex-wrap">
                <p className="w-full">{name}</p>
                <p className="w-full">{lastName}</p>
              </div>
              <div className="lg:text-start ssm:text-center">
                <p>
                  <span className="font-bold">Position:</span> {position}
                </p>
                <p>
                  <span className="font-bold">Area:</span> {area}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  lg:items-start lg:justify-start lg:flex-row ssm:flex-col-reverse ssm:items-center ssm:justify-center gap-16">
          <div className="lg:p-0 lg:inliine-block lg:items-start ssm:flex ssm:justify-center ssm:items-center ssm:flex-col w-4/12 lg:text-start ssm:text-center ssm:pb-16">
            <p className="">
              <span className="font-medium"> Role: </span>
              {role}
            </p>
            {/* <div className="flex flex-col  lg:w-fit ssm: mt-10 gap-3 ">
              <Link to={`/editemployee/${id}`}>
                <button className="bg-sky-400 text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
                  Edit Employee
                </button>
              </Link>
            </div> */}
          </div>
          <div className="flex md:flex-row ssm:flex-col lg:text-start ssm:justify-center ssm:text-center w-1/2 text-xl pt-16">
            <div className="flex flex-col lg:justify-between w-full ">
              <p className="mb-5">
                <span className="font-bold block">Birth Date:</span> {birthDate}
              </p>
              <p className="mb-5">
                <span className="font-bold block">DNI:</span> {dni}
              </p>
              <p className="mb-5">
                <span className="font-bold block">Phone:</span> {tel}
              </p>
              <p className="mb-5">
                <span className="font-bold block">Address:</span> {address}
              </p>
            </div>
            <div className="flex flex-col justify-between w-full gap-3">
              <p className="mb-5">
                <span className="font-bold block">E-mail:</span> {email}
              </p>
              <p className="mb-5">
                <span className="font-bold block">Date of Admission:</span>{" "}
                {dateOfAdmission}
              </p>
              <p className="mb-5">
                <span className="font-bold block">Cuil:</span> {cuil}
              </p>
              <p className="mb-5">
                <span className="font-bold block">CBU:</span> {cbu}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default MyProfile;