import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
// import SideBar from "../../../Components/SideBar/SideBar";
import {
  getAllEmployees,
  // eslint-disable-next-line no-unused-vars
  getAreasNum,
  getEmployeeDetail,
  // eslint-disable-next-line no-unused-vars
  getPositionsNum,
  updateEmployee,
} from "../../../state/redux/actions/actions";
import validateEdit from "../../../Utils/functions/validateEdit";
// import Form from "../../../Components/Form/Form";
import { useErrors } from "../../../Utils/hooks/errors";
import { useAnswer } from "../../../Utils/hooks/answer";
// import { Link } from "react-router-dom";
// import SelectFormEdit from "../../../Components/SelectFormEdit/SelectFormEdit";
import FormEdit from "../../../Components/FormEdit/FormEdit";

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentEmployeeCompany = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployeeCompany
    ? currentEmployeeCompany.CompanyId
    : null;
  const getAlllEmployees = useSelector((state) => state.getAlllEmployees);

  useEffect(() => {
    dispatch(getEmployeeDetail(CompanyId, id));
    dispatch(getAllEmployees());
  }, [dispatch, id, CompanyId]);

  const { errors, setAllErrors } = useErrors();

  const { answer, showAnswer } = useAnswer();

  const currentEmployee = useSelector((state) => state.employeeDetail);

  const [touched, setTouched] = useState({
    name: false,
    lastName: false,
    birthDate: false,
    email: false,
    dni: false,
    tel: false,
    address: false,
    position: false,
    area: false,
    dateOfAdmission: false,
    role: false,
    cuil: false,
    cbu: false,
    image: false,
  });

  const [submited, setSubmited] = useState(false);
  const [errorButton, setErrorButton] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({
    name: `${currentEmployee.name}`,
    lastName: `${currentEmployee.lastName}`,
    birthDate: `${currentEmployee.birthDate}`,
    email: `${currentEmployee.email}`,
    dni: `${currentEmployee.dni}`,
    tel: `${currentEmployee.tel}`,
    address: `${currentEmployee.address}`,
    position: `${currentEmployee.position}`,
    area: `${currentEmployee.area}`,
    dateOfAdmission: `${currentEmployee.dateOfAdmission}`,
    role: `${currentEmployee.role}`,
    cuil: `${currentEmployee.cuil}`,
    cbu: `${currentEmployee.cbu}`,
    image: `${currentEmployee.image}`,
  });
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setErrorButton(false);
    } else {
      setErrorButton(true);
    }
  }, [errors]);

  // console.log(currentEmployee, 'aaaaaaaaaaa');

  const handleInput = (e) => {
    const { value, name } = e.target;

    setAllErrors(
      validateEdit(
        {
          ...updatedUser,
          [name]: value,
        },
        getAlllEmployees,
        currentEmployee
      )
    );
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });

    setTouched({
      ...touched,
      [name]: true,
    });

    const allErrors = Object.values(errors).length;
    if (!allErrors) {
      setErrorButton(false);
    } else {
      setErrorButton(true);
    }
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    if (name === "role") {
      setUpdatedUser({
        ...updatedUser,
        [name]: value,
      });
    }
  };

  const handleChangeImage = (url) => {
    setUpdatedUser({
      ...updatedUser,
      image: url,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const allErrors = Object.values(errors).length;
    // if (!allErrors) {
    dispatch(updateEmployee(id, updatedUser, showAnswer));
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
      navigate(-1);
    }, 3000);
    setErrorButton(true);

    setAllErrors({
      name: "",
      lastName: "",
      birthDate: "",
      email: "",
      dni: "",
      tel: "",
      address: "",
      position: "",
      area: "",
      dateOfAdmission: "",
      role: "",
      image: "",
      cuil: "",
      cbu: "",
    });
  };
  console.log(errors);

  return (
    <div className="w-full lg:h-screen lg:pt-0 xl:ml-72 lg:ml-36 sm:ml-16 flex justify-center items-center ssm:m-auto ssm:pt-16">
      {currentEmployee.role !== "SuperAdmin" ? (
        <>
          <div>
            <div className="w-full text-center mb-14 font-bold">
              <span className="text-4xl text-sky-400">Edit Employee</span>
            </div>

            {/* ++++++++++++++BOTON BACK EditEmployee+++++++++++++++++++ */}
            {/* <button className="flex relative bg-sky-700 shadow-sky-600 hover:bg-sky-600 h-8 w-24 justify-center items-center rounded text-white border  "
                    onClick={() => navigate(-1)}
            >BACK</button> */}
            {/* ++++++++++++++BOTON BACK+++++++++++++++++++ */}

            <div className="flex gap-16">
              <div>
                <FormEdit
                  handleInput={handleInput}
                  handleSubmit={handleSubmit}
                  handleSelect={handleSelect}
                  touched={touched}
                  errors={errors}
                  users={updatedUser}
                  errorButton={errorButton}
                  submited={submited}
                  button="Edit Employee"
                  answer={answer}
                  handleChangeImage={handleChangeImage}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1>You cant edit a SuperAdmin!!!</h1>
          <Link to={`/employees/${CompanyId}`}>
            <button className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
              Got it
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EditEmployee;
