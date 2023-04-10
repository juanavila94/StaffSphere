// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAreasNum,
//   getPositionsNum,
// } from "../../state/redux/actions/actions";
import InputForm from "../InputForm";
import SelectForm from "../SelectForm/SelectForm";
import UploadImage from "../Upload/UploadImage";
// import { RiAlertFill } from "react-icons/ri";
import SelectFormSec from "../SelectFormSec/SelectFormSec";
// import {
//   getUsersTel,
//   getUsersEmail,
//   getUsersCuil,
//   getUsersCbu,
//   getUsersDni
// } from "../../state/redux/actions/actions"

const Form = ({
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
  positionsNum,
  areasNum,
  handleBlur,
  back,
}) => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  // dispatch(getPositionsNum())
  // dispatch(getAreasNum())
  //   }, [dispatch])

  // const dispatch = useDispatch();
  // const [mensajeTel, setMensajeTel] = useState(null);
  // const [mensajeEmail, setMensajeEmail] = useState(null);
  // const [mensajeCuil, setMensajeCuil] = useState(null);
  // const [mensajeCbu, setMensajeCbu] = useState(null);
  // const [mensajeDni, setMensajeDni] = useState(null);

  // const handleBlurTel = (event) => {
  //   const valor = event.target.value;
  //     dispatch(getUsersTel(valor)).then(resultado => {
  //     if (resultado?.message) {
  //       setMensajeTel(resultado?.message);
  //     } else {
  //       setMensajeTel(null);
  //     }
  //     console.log("Valor", valor);
  //     console.log("Mensaje: ", resultado?.message)
  //   });
  // }

  // const handleBlurEmail = (event) => {
  //   const valor = event.target.value;
  //     dispatch(getUsersEmail(currentCompanyId, valor)).then(resultado => {
  //       console.log("CORREO", valor);
  //       console.log("company ID", currentCompanyId);
  //     if (resultado?.message) {
  //       setMensajeEmail(resultado?.message);
  //     } else {
  //       setMensajeEmail(null);
  //     }
  //     console.log("Valor", valor);
  //     console.log("Mensaje: ", resultado?.message)
  //   });
  // }

  // const handleBlurCuil = (event) => {
  //   const valor = event.target.value;
  //   dispatch(getUsersCuil(valor)).then(resultado => {
  //     if (resultado?.message) {
  //       setMensajeCuil(resultado?.message);
  //     } else {
  //       setMensajeCuil(null);
  //     }
  //     console.log("Valor", valor);
  //     console.log("Mensaje: ", resultado?.message)
  //   });
  // }

  // const handleBlurCbu = (event) => {
  //   const valor = event.target.value;
  //   dispatch(getUsersCbu(valor)).then(resultado => {
  //     if (resultado?.message) {
  //       setMensajeCbu(resultado?.message);
  //     } else {
  //       setMensajeCbu(null);
  //     }
  //     console.log("Valor", valor);
  //     console.log("Mensaje: ", resultado?.message)
  //   });
  // }

  // const handleBlurDni = (event) => {
  //   const valor = event.target.value;
  //     dispatch(getUsersDni(valor)).then(resultado => {
  //     if (resultado?.message) {
  //       setMensajeDni(resultado?.message);
  //     } else {
  //       setMensajeDni(null);
  //     }
  //     console.log("Valor", valor);
  //     console.log("Mensaje: ", resultado?.message)
  //   });
  // }

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

          {/* {mensajeEmail && <section className="m-0  text-red-600">{mensajeEmail}</section>} */}
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
            onBlur={handleBlur}
            back={back.email}
          />

          {/* {mensajeCuil && <section className="m-0  text-red-600">{mensajeCuil}</section>} */}
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
            onBlur={handleBlur}
            back={back.cuil}
          />
        </div>
        <div className="w-full">
          {/* {mensajeCbu && <section className="m-0  text-red-600">{mensajeCbu}</section>} */}
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
            onBlur={handleBlur}
            back={back.cbu}
          />

          <SelectForm
            label="Role"
            name="role"
            id="role"
            touched={touched.role}
            handler={handleSelect}
            error={errors.role}
            optionQuantity={[
              { value: "User", html: "User", disable: false },
              { value: "Admin", html: "Admin", disable: false },
            ]}
          />

          <SelectFormSec
            label="Position"
            name="PositionId"
            id="PositionId"
            touched={touched.PositionId}
            handler={handleSelect}
            error={errors.PositionId}
            optionQuantity={positionsNum}
            users={users.PositionId}
            />
          <SelectFormSec
            label="Area"
            name="AreaId"
            id="AreaId"
            touched={touched.AreaId}
            handler={handleSelect}
            error={errors.AreaId}
            optionQuantity={areasNum}
            users={users.AreaId}
          />
        </div>
        <div className="w-full">
          {/* {mensajeDni && <section className="m-0  text-red-600">{mensajeDni}</section>} */}
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
            onBlur={handleBlur}
            back={back.dni}
          />

          {/* {mensajeTel && <section className="m-0  text-red-600">{mensajeTel}</section>} */}
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
            onBlur={handleBlur}
            back={back.tel}
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
        <p className="px-20 py-4 bg-green-400 text-white rounded">{answer}</p>
      )}
      {/* <p className="px-20 py-4 bg-green-400 rounded">hola que ase</p> */}
      {/* {submited && <p className="text-green-800">{answer}</p>} */}
    </form>
  );
};

export default Form;
