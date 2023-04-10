// import { Link, useParams } from "react-router-dom";
// import SideBar from "../../Components/SideBar/SideBar";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import {
//   addRating,
//   getEmployeeDetail,
// } from "../../state/redux/actions/actions";
// import { GrFormClose } from "react-icons/gr";
// import { AiFillStar } from "react-icons/ai";
// import { useRef, useState } from "react";

// const MyProfile = () => {
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

//   useEffect(() => {
//     dispatch(getEmployeeDetail(id));
//   }, [id, dispatch]);

//   const refQualify = useRef();
//   const refQualifying = useRef();
//   const refModal = useRef();

//   const qualifying = (e) => {
//     refQualify.current.style.pointerEvents = "none";
//     refQualify.current.style.opacity = "0";
//     refQualifying.current.style.pointerEvents = "auto";
//     refQualifying.current.style.opacity = "1";
//   };
//   const endQualifying = (e) => {
//     dispatch(addRating(rating, commentary));
//     refModal.current.style.pointerEvents = "none";
//     refModal.current.style.opacity = "0";
//   };

//   const [rating, setRating] = useState(0);
//   const [commentary, setCommentary] = useState("");
//   const [hover, setHover] = useState(0);

//   const handleTextarea = (e) => {
//     setCommentary(e.target.value);
//   };

//   const close = (e) => {
//     refQualify.current.style.pointerEvents = "none";
//     refQualify.current.style.opacity = "0";
//     refQualifying.current.style.pointerEvents = "none";
//     refQualifying.current.style.opacity = "0";
//     refModal.current.style.pointerEvents = "none";
//     refModal.current.style.opacity = "0";
//   };


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
//             <span>EDITAR DATOS DE COMPANY</span>
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

// //   return (
// //     <div className="grid grid-cols-6 grid-rows-1 h-screen">

// //       <SideBar />
// //       <div className="col-span-5 p-8">
// //         <div className={style.buttonCointainer}>
// //           {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}

// //           <Link to={`/editemployee/${id}`}>
// //             <button className={style.editButton}>Edit Employee</button>
// //           </Link>
// //         </div>
// //         <div className={style.mainCointainer}>
// //           <p>Name: {name}</p>
// //           <p>Last Name: {lastName}</p>
// //           <p>Birth Date: {birthDate}</p>
// //           <p>E-mail: {email}</p>
// //           <p>DNI: {dni}</p>
// //           <p>Phone: {tel}</p>
// //           <p>Address: {address}</p>
// //           <p>Role: {role}</p>
// //           <p>Position: {position}</p>
// //           <p>Area: {area}</p>
// //           <p>Cuil: {cuil}</p>
// //           <p>Cbu: {cbu}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default MyProfile;
