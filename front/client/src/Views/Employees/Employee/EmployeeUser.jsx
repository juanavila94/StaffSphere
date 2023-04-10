// import { Link } from "react-router-dom";
import {useRef, useState} from 'react'

const EmployeeUser = (props) => {

  const [check, setCheck] = useState(false)
  // console.log(check);

  const handleCheck = (e) => {
    // const { checked } = e.target;
    setCheck(ck => !ck)

    props.catchEmails(props.email, check);
  };

  const refDivCheck = useRef();

  // emailsUnselect

  // refDivCheck.current.style.display = 'none'

  return (
    <div
      className=" bg-white rounded-xl h-20  border z-0 hover:z-10 hover:shadow-2xl hover:shadow-sky-200 hover:-translate-y-1 transition duration-100 overflow-hidden relative">
      <label
        id='check'
        onClick={() => setCheck(!check)}
        ref={refDivCheck}
        className={`${props.emailsUnselect ? 'inline-block' : 'hidden'} ${check ? 'bg-sky-400 bg-opacity-20' : 'bg-transparent'} absolute h-full w-full `}
      >
        <input
          className="absolute right-10 top-10 hidden"
          type="checkbox"
          name=""
          id="check"
          onChange={handleCheck}
          checked={check}
        />
      </label>
      {/* <Link to={`/employee/${props.id}`}> */}
        {/* <span className="text-slate-300 absolute right-3 top-2 text-xs text-start font-medium ">
          {props.role}
        </span> */}
        <div className="flex justify-between items-center h-20">
          <img
            className="object-cover mr-2 w-28 h-20"
            src={props.image}
            alt=""
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ssm:grid-cols-1 items-center justify-start  w-full p-6 text-start auto-cols-min">
            <div className=" text-start">
              <div className="flex flex-col">
                <p className="text-xl font-bold break-al">
                  {`${props.name} ${props.lastName}`}
                </p>
              </div>
            </div>
            <span className="text-black text-base font-medium sm:inline ssm:hidden">
              {props.email}
            </span>
            <span className="lg:inline md:inline ssm:hidden text-black text-base font-medium ">
              {props.area}
            </span>
            <span className="lg:inline ssm:hidden text-black text-base font-medium ">
              {props.position}
            </span>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default EmployeeUser;
