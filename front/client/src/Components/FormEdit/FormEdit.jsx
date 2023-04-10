// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import {
//   getAreasNum,
//   getPositionsNum,
// } from "../../state/redux/actions/actions";
import InputForm from "../InputForm";
import SelectForm from "../SelectForm/SelectForm";
import UploadImage from "../Upload/UploadImage";
// import { RiAlertFill } from "react-icons/ri";
// import SelectFormSec from "../SelectFormSec/SelectFormSec";
import SelectFormEdit from "../SelectFormEdit/SelectFormEdit";

const FormEdit = ({
  handleInput,
  handleSubmit,
  handleSelect,
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

  const positionsNum = useSelector((state) => state.positionsNum);
  const areasNum = useSelector((state) => state.areasNum);
  // console.log(positionsNum, "nummmm");

  return (
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
        </div>
        <div className="w-full">
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
          <SelectForm
            label="Role"
            name="role"
            id="role"
            touched={touched.role}
            value={users.role}
            handler={handleSelect}
            error={errors.role}
            optionQuantity={[
              { value: "User", html: "User", disable: false },
              { value: "Admin", html: "Admin", disable: true },
            ]}
          />

          <SelectFormEdit
            label="Position"
            name="PositionId"
            id="PositionId"
            userName={users.position}
            userNum={users.positionId}
            touched={touched.PositionId}
            handler={handleSelect}
            error={errors.PositionId}
            optionQuantity={positionsNum}
          />
          <SelectFormEdit
            label="Area"
            name="AreaId"
            id="AreaId"
            userName={users.area}
            userNum={users.areaId}
            touched={touched.AreaId}
            handler={handleSelect}
            error={errors.AreaId}
            optionQuantity={areasNum}
          />
        </div>
        <div className="w-full">
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
        <p className="px-20 py-4 bg-green-400 text-white rounded">{answer}</p>
      )}
      {/* <p className="px-20 py-4 bg-green-400 rounded">hola que ase</p> */}
      {/* {submited && <p className="text-green-800">{answer}</p>} */}
    </form>
  );
};

export default FormEdit;
