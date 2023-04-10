/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { GrFormClose } from "react-icons/gr";
// import { AiFillStar } from "react-icons/ai";
import { useRef, 
  // useState 
} from "react";
import {
  // addRating,
  // getCompanyInfo,
  getEmployeeDetail,
  // getEmployees,
  // getRating,
} from "../../state/redux/actions/actions";

const MyProfileAdmin = () => {
  // const refModal = useRef();

  // let { id } = useParams();
  const dispatch = useDispatch();
    const currentEmployee = useSelector((state) => state.currentEmployee);
    const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;

  
  let employeeDetail = useSelector((state) => state.currentEmployee);

  // const allEmployees = useSelector(state => state.allEmployees).length

  // const currentEmployee = useSelector((state) => state.currentEmployee);
  // const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;

  // const ratings = useSelector((state) => state.ratings);
  // const clients = ratings.map((client) => client.CompanyId === CompanyId);

  // const [qualified, setQualified] = useState(false);
  // useEffect(() => {
  //   dispatch(getCompanyInfo(CompanyId));
  //   dispatch(getRating());
  //   dispatch(getEmployees(undefined, undefined, CompanyId))

  // }, [dispatch, qualified]);

  const companyInfo = useSelector((state) => state.companyInfo);
  console.log(companyInfo, "companyInfo");

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

  // const refQualify = useRef();
  // const refQualifying = useRef();

  // const qualifying = () => {
  //   refQualify.current.style.pointerEvents = "none";
  //   refQualify.current.style.opacity = "0";
  //   refQualifying.current.style.pointerEvents = "auto";
  //   refQualifying.current.style.opacity = "1";
  // };
  // const endQualifying = () => {
  //   dispatch(addRating(rating, commentary, CompanyId));
  //   refModal.current.style.pointerEvents = "none";
  //   refModal.current.style.opacity = "0";
  //   close();
  // };

  // const [rating, setRating] = useState(0);
  // const [commentary, setCommentary] = useState("");
  // const [hover, setHover] = useState(0);

  // const handleTextarea = (e) => {
  //   setCommentary(e.target.value);
  // };

  // const close = (e) => {
  //   refQualify.current.style.pointerEvents = "none";
  //   refQualify.current.style.opacity = "0";
  //   refQualifying.current.style.pointerEvents = "none";
  //   refQualifying.current.style.opacity = "0";
  //   refModal.current.style.pointerEvents = "none";
  //   refModal.current.style.opacity = "0";
  // };

  const refUserMode = useRef();
  // const refSuperAdminMode = useRef();

  // const companyMode = () => {
  //   refUserMode.current.style.display = "none";
  //   refSuperAdminMode.current.style.display = "flex";
  //   refModal.current.style.pointerEvents = "auto";
  //   refModal.current.style.opacity = "1";
  //   refQualify.current.style.pointerEvents = "auto";
  //   refQualify.current.style.opacity = "1";
  //   const reviewDone = clients.some((client) => !!client);
  //   if (reviewDone) {
  //     setQualified(true);
  //     console.log("entro");
  //   } else {
  //     console.log("no entro");
  //   }
  // };
  // const userMode = () => {
  //   refUserMode.current.style.display = "flex";
  //   refSuperAdminMode.current.style.display = "none";
  //   close();
  // };

  
  return (
    <>
      {/* <div
        ref={refModal}
        className={`${
          qualified ? "hidden" : "flex"
        } w-screen h-screen opacity-0 pointer-events-none transition-all duration-500 fixed bg-black bg-opacity-50 z-50  justify-center items-center text-center `}
      >
        <div
          ref={refQualify}
          className="absolute bg-white h-1/4 flex-1 m-2 rounded-md flex flex-col justify-between items-center p-5 transition-all duration-500 opacity-1 w-[90%]"
        >
          We would love for you to rate our app, so that we can provide a better
          service for our customers. Your opinion and every constructive
          critique are very valuable to us
          <button
            onClick={qualifying}
            className="py-2 px-5 bg-sky-400 hover:bg-sky-300 active:shadow-lg active:translate-y-1 rounded "
          >
            Qualify
          </button>
          <button
            onClick={close}
            className="absolute right-2 top-2 rounded-full"
          >
            <GrFormClose />
          </button>
        </div>
        <div
          ref={refQualifying}
          className="absolute bg-white h-[40%] flex-1 m-2 rounded-md flex flex-col justify-between items-center gap-3 p-5 opacity-0 pointer-events-none w-[90%]"
        >
          <div className="flex">
            <button
              onClick={close}
              className="absolute right-2 top-2 rounded-full"
            >
              <GrFormClose />
            </button>
            {[...Array(5).fill(0)].map((start, i) => {
              const ratingValue = i + 1;

              return (
                <label className="">
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <AiFillStar
                    size={30}
                    className={`${
                      ratingValue <= (hover || rating)
                        ? "text-yellow-200 transition-all duration-200"
                        : "text-gray-300 transition-all duration-200"
                    }`}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <textarea
            className="bg-slate-100 outline-none resize-none w-[95%] rounded p-5"
            name=""
            id=""
            cols="30"
            rows="10"
            value={commentary}
            onChange={handleTextarea}
            placeholder="Add a commentary..."
          />
          <button
            onClick={endQualifying}
            className="py-2 p-5 bg-sky-400 hover:bg-sky-300 focus:shadow-lg rounded active:translate-y-1"
          >
            Submit
          </button>
        </div>
      </div> */}
      {/* <section
        ref={refSuperAdminMode}
        className="w-full lg:h-screen  xl:ml-72 sm:ml-36 ssm:m-auto pt-16 hidden  flex-col gap-10 pb-16"
      >
        <div className="flex gap-16 lg:flex-row ssm:items-center ssm:flex-col-reverse">
          <img
            src="https://static.dw.com/image/60105922_403.jpg"
            alt="profilepic"
            className="object-cover lg:w-4/12 sm:w-8/12 ssm:w-12/12 ssm: rounded-md h-[200px] "
          />
          <div className="flex felx-col gap-10 w-8/12 lg:justify-start ssm:justify-center ">
            <div className="flex flex-col justify-center lg:items-start ssm:items-center gap-5">
              <div className="flex lg:flex-wrap lg:text-start  ssm:flex-wrap ssm:text-center gap-5 text-6xl flex-wrap">
                <p className="w-full">Coca-cola</p>
              </div>
              <div className="lg:text-start ssm:text-center">
                <p>
                  <span className="font-bold">Industry: </span>{" "}
                  {companyInfo.industry}
                </p>
                <p>
                  <span className="font-bold">Location:</span>{" "}
                  {companyInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  lg:items-start lg:justify-start lg:flex-row ssm:flex-col-reverse ssm:items-center ssm:justify-center gap-16">
          <div className="lg:p-0 lg:inliine-block lg:items-start ssm:flex ssm:justify-center ssm:items-center ssm:flex-col w-4/12 lg:text-start ssm:text-center ssm:pb-16">
            <button
              onClick={userMode}
              className=" text-xs text-sky-400 border border-sky-400 rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300 hover:text-white"
            >
              My user
            </button>
          </div>
          <div className="flex md:flex-row ssm:flex-col lg:text-start ssm:justify-center ssm:text-center w-1/2 text-xl pt-16">
            <div className="flex flex-col lg:justify-between w-full ">
              <p className="mb-5">
                <span className="font-bold block">Cuit:</span>{" "}
                {companyInfo.cuit}
              </p>
              <p className="mb-5">
                <span className="font-bold block">Numero de empleados:</span>{" "}
                {allEmployees}
              </p>
            </div>
            <div className="flex flex-col justify-start w-full">
              <p className="mb-5">
                <span className="font-bold block">Email:</span>{" "}
                {companyInfo.email}
              </p>
              <p className="mb-5">
                <span className="font-bold block">Payment day:</span>{" "}
                {companyInfo.paymentDay}
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section
        ref={refUserMode}
        className="w-full lg:h-screen  xl:ml-72 sm:ml-36 ssm:m-auto pt-16 flex  flex-col gap-10 pb-16"
      >
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
            <div className="flex flex-col  lg:w-fit ssm: mt-10 gap-3 ">
              <Link to={`/editemployee/${id}`}>
                <button className="bg-sky-400 text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
                  Edit Employee
                </button>
              </Link>
              {/* <button
                onClick={companyMode}
                className=" text-xs text-sky-400 border border-sky-400 rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300 hover:text-white"
              >
                My company
              </button> */}
            </div>
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
      </section>
    </>
  );
};


export default MyProfileAdmin;



// import { Link } from "react-router-dom";
// // import SideBar from "../../Components/SideBar/SideBar";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getEmployeeDetail } from "../../state/redux/actions/actions";

// const MyProfileAdmin = () => {
//   // let { id } = useParams();
//   let employeeDetail = useSelector((state) => state.currentEmployee);
//   let dispatch = useDispatch();

  
//   const {
//     id,
//     name,
//     lastName,
//     birthDate,
//     email,
//     address,
//     dni,
//     tel,
//     role,
//     position,
//     area,
//     cuil,
//     cbu,
//     dateOfAdmission,
//     image,
//   } = employeeDetail;

//   useEffect(() => {
//     dispatch(getEmployeeDetail(id));
//   }, [id, dispatch]);


//   return (
//     <>
//       <div className="w-full lg:h-screen  xl:ml-72 sm:ml-36 ssm:m-auto pt-16 flex  flex-col gap-10 pb-16">
//         <div className="flex gap-16 lg:flex-row ssm:items-center ssm:flex-col-reverse">
//           <img
//             src={image}
//             alt="profilepic"
//             className="object-cover lg:w-4/12 sm:w-8/12 ssm:w-12/12 ssm: rounded-md h-[200px] "
//           />
//           <div className="flex felx-col gap-10 w-8/12 lg:justify-start ssm:justify-center ">
//             <div className="flex flex-col justify-center lg:items-start ssm:items-center gap-5">
//               <div className="flex lg:flex-wrap lg:text-start  ssm:flex-wrap ssm:text-center gap-5 text-6xl flex-wrap">
//                 <p className="w-full">{name}</p>
//                 <p className="w-full">{lastName}</p>
//               </div>
//               <div className="lg:text-start ssm:text-center">
//                 <p>
//                   <span className="font-bold">Position:</span> {position}
//                 </p>
//                 <p>
//                   <span className="font-bold">Area:</span> {area}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex  lg:items-start lg:justify-start lg:flex-row ssm:flex-col-reverse ssm:items-center ssm:justify-center gap-16">
//           <div className="lg:p-0 lg:inliine-block lg:items-start ssm:flex ssm:justify-center ssm:items-center ssm:flex-col w-4/12 lg:text-start ssm:text-center ssm:pb-16">
//             <p className="">
//               <span className="font-medium"> Role: </span>
//               {role}
//             </p>
//             <div className="flex flex-col  lg:w-fit ssm: mt-10 gap-3 ">
//               <Link to={`/editemployeemyprofile/${id}`}>
//                 <button className="bg-sky-400 text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
//                   Edit Employee
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="flex md:flex-row ssm:flex-col lg:text-start ssm:justify-center ssm:text-center w-1/2 text-xl pt-16">
//             <div className="flex flex-col lg:justify-between w-full ">
//               <p className="mb-5">
//                 <span className="font-bold block">Birth Date:</span> {birthDate}
//               </p>
//               <p className="mb-5">
//                 <span className="font-bold block">DNI:</span> {dni}
//               </p>
//               <p className="mb-5">
//                 <span className="font-bold block">Phone:</span> {tel}
//               </p>
//               <p className="mb-5">
//                 <span className="font-bold block">Address:</span> {address}
//               </p>
//             </div>
//             <div className="flex flex-col justify-between w-full gap-3">
//               <p className="mb-5">
//                 <span className="font-bold block">E-mail:</span> {email}
//               </p>
//               <p className="mb-5">
//                 <span className="font-bold block">Date of Admission:</span>{" "}
//                 {dateOfAdmission}
//               </p>
//               <p className="mb-5">
//                 <span className="font-bold block">Cuil:</span> {cuil}
//               </p>
//               <p className="mb-5">
//                 <span className="font-bold block">CBU:</span> {cbu}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


// export default MyProfileAdmin;