
import InputForm from "../InputForm";

import UploadImage from "../Upload/UploadImage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormFirstEmployee = ({
  handleInput,
  handleSubmit,
  touched,
  errors,
  users,
  errorButton,
  submited,
  button,
  answer,
  handleChangeImage,
  
}) => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  // dispatch(getPositionsNum())
  // dispatch(getAreasNum())
  //   }, [dispatch])
  var navigate = useNavigate();

  return (
    <div>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex lg:flex-row ssm:flex-col ssm:gap-0 lg:gap-8 justify-center items-start mb-10">
        <div className="w-full">
          <InputForm
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            touched={touched.name}
            value={users.name}
            handler={handleInput}
            id="name"
            error={errors.name}
          />
          <InputForm
            label="Last Name"
            placeholder="Last Name"
            type="text"
            name="lastName"
            touched={touched.lastName}
            value={users.lastName}
            handler={handleInput}
            id="lastName"
            error={errors.lastName}
          />
          <InputForm
            label="Birth Date"
            placeholder="Birth Date"
            type="date"
            name="birthDate"
            touched={touched.birthDate}
            value={users.birthDate}
            handler={handleInput}
            id="birthDate"
            error={errors.birthDate}
          />
          <InputForm
            label="Email"
            placeholder="Email"
            type="text"
            name="email"
            touched={touched.email}
            value={users.email}
            handler={handleInput}
            id="email"
            error={errors.email}
          />  
        </div>
        <div className="w-full">
        <InputForm
            label="Cuil"
            placeholder="Cuil"
            type="number"
            name="cuil"
            touched={touched.cuil}
            value={users.cuil}
            handler={handleInput}
            id="cuil"
            error={errors.cuil}
          />
        <InputForm
            label="CBU"
            placeholder="CBU"
            type="number"
            name="cbu"
            touched={touched.cbu}
            value={users.cbu}
            handler={handleInput}
            id="cbu"
            error={errors.cbu}
          />
          <InputForm
            label="DNI"
            placeholder="DNI"
            type="number"
            name="dni"
            touched={touched.dni}
            value={users.dni}
            handler={handleInput}
            id="dni"
            error={errors.dni}
          />
          <InputForm
            label="Phone"
            placeholder="Phone"
            type="number"
            name="tel"
            touched={touched.tel}
            value={users.tel}
            handler={handleInput}
            id="tel"
            error={errors.tel}
          />
        </div>
        <div className="w-full">
          <InputForm
            label="Address"
            placeholder="Address"
            type="text"
            name="address"
            touched={touched.address}
            value={users.address}
            handler={handleInput}
            id="address"
            error={errors.address}
          />
          <InputForm
            label="Admission Date"
            placeholder="Admission Date"
            type="date"
            name="dateOfAdmission"
            touched={touched.dateOfAdmission}
            value={users.dateOfAdmission}
            handler={handleInput}
            id="dateOfAdmission"
            error={errors.dateOfAdmission}
          />
           <InputForm
            type="hidden"
            name="CompanyId"
            value={users.CompanyId}
            handler={handleInput}
            id="CompanyId"
          />
          <div className="flex flex-row w-60">
            <UploadImage handleChangeImage={handleChangeImage} />
            <img
              src={users.image}
              alt="profilepic"
              className="rounded-md border-none shadow-none text-transparent w-auto h-10 object-cover"
            />
          </div>
        </div>
      </div>
      {!submited ? (
        <button
          className={
            errorButton
              ? "cursor-not-allowed border px-16 py-3 h-auto rounded shadow-md shadow-slate-300 bg-gray-400 text-slate-300"
              : "bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
          }
          onClick={handleSubmit}
          disabled={errorButton}
        >
          {button}
        </button>
      ) : (
        <>
        <p className="px-20 py-4 bg-green-400 text-white rounded"></p>
        
        </>
        // <p className="px-20 py-4 bg-green-400 text-white rounded">{answer}</p>
      )}
    </form>
    
    </div>
  );
};

export default FormFirstEmployee;

