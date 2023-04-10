import ButtonSideBar from "./ButtonSideBar/ButtonSideBar";
// eslint-disable-next-line no-unused-vars
import ButtonSideBarGrey from "./ButtonSideBar/ButtonSideBarGray";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { resetCurrentEmployee } from "../../state/redux/actions/actions";
// import { useCookies } from "react-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  // const dispatch = useDispatch();

  // const [cookies, removeCookie] = useCookies(["token"]);
  const [active, setActive] = useState({
    dashboard: false,
    employees: false,
    notifications: false,
    calendar: false,
    myprofile: false,
  });

  const handleActive = (name) => {
    if (name === "My Profile") {
      name = "myProfile";
    }
    const aux = { [name.toLowerCase()]: true };

    setActive({
      dashboard: false,
      employees: false,
      notifications: false,
      calendar: false,
      myProfile: false,
      ...aux,
    });
  };


  const current = useSelector((state) => state.currentEmployee);

  let url, urlCompany;
  
  if (current.role === "SuperAdmin") {
    url = `/myprofile/${current.id}`;
    urlCompany = `/employees/${current.CompanyId}`;
  } else if (current.role === "Admin") {
    url = `/myprofile/${current.id}`;
    urlCompany = `/employees/${current.CompanyId}`;
  } else {
    url = `/myprofile/${current.id}`;
    urlCompany = `/employeesuser/${current.CompanyId}`;
  }


  const { logout } = useAuth0();

  let refModal = useRef();

  return (
    <>
      <section
        ref={refModal}
        onClick={() => {
          refModal.current.style.display = "none";
        }}
        className="fixed w-screen h-screen hidden justify-center items-center bg-black bg-opacity-50 z-10"
      >
        <div className="flex flex-col justify-between w-[600px] h-[200px] bg-white rounded p-6 text-xl transition-all duration-100">
          <h3>Are you sure you want to go out?</h3>
          <div className="text-end text-base flex justify-between">
            <div className="flex justify-center items-center text-base  bg-green-400 rounded w-60 opacity-0">
              <p className="pr-42 pl-2 py-1">Se deleteo</p>
            </div>
            <div>
              <button
                className="mr-6 px-6 py-2 bg-blue-400 rounded text-white"
                onClick={logout}
              >
                Yes
              </button>
              <button
                className=" px-6 py-2 bg-red-400 rounded text-white"
                onClick={() => (refModal.current.style.display = "none")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="h-screen  xl:w-60 ssm:w-20  border-r-2 ">
        <div className="h-screen flex flex-col justify-between items-center  w-full">
          <div className="flex py-16 items-center">
            {/* <i className="mr-2">logo</i> */}
            <div className="text-start">
              <img
                className="object-cover w-12"
                src="https://res.cloudinary.com/dtqhqhc9e/image/upload/v1679883961/Images/mqu3wnxbcotfu4t0gbqx.png"
                alt="logo"
              />
            </div>
            {/* <span class="material-symbols-outlined">circle</span> */}
            <h2 className="text-start xl:flex ssm:hidden font-bold text-2xl ">
              StaffSphere
            </h2>
          </div>
          <div className="w-full font-medium flex items-center justify-center ">
            <div className="w-full">
              <div className="  ">
                <div className="w-full ">
                  <div className="w-full">
                    <ButtonSideBar
                      url="/dashboard"
                      icon="dashboard"
                      active={active.dashboard}
                      handleActive={handleActive}
                    >
                      Dashboard
                    </ButtonSideBar>
                  </div>
                  <ButtonSideBar
                    url={urlCompany}
                    icon="group"
                    active={active.employees}
                    handleActive={handleActive}
                  >
                    Employees
                  </ButtonSideBar>
                  {(current.role === "User") 
                  ? ""
                //   <ButtonSideBarGrey
                //   url="/notifications"
                //   icon="notifications"
                //   active={active.notifications}
                //   handleActive={handleActive}
                //   > 
                //   Notifications
                // </ButtonSideBarGrey>
                  :
                  <ButtonSideBar
                    url="/notifications"
                    icon="notifications"
                    active={active.notifications}
                    handleActive={handleActive}
                  >
                    Notifications
                  </ButtonSideBar>
                  }
                  <ButtonSideBar
                    url="/calendar"
                    icon="calendar_month"
                    active={active.calendar}
                    handleActive={handleActive}
                  >
                    Calendar
                  </ButtonSideBar>
                  {/* <ButtonSideBar url="/organization">Organization</ButtonSideBar> */}
                </div>
              </div>
              <div>
                <div className="flex flex-col w-full xl:mt-10 ssm:mt-24">
                  <ButtonSideBar
                    url={url}
                    icon="person"
                    active={active.myprofile}
                    handleActive={handleActive}
                  >
                    My Profile
                  </ButtonSideBar>
                  <div
                    className="relative w-full h-9 xl:m-0 ssm:my-5 hover:text-sky-400 cursor-pointer"
                    onClick={() => (refModal.current.style.display = "flex")}
                    // onClick={() => logout()}
                  >
                    <span className="absolute h-9  leading-9 xl:left-10 ssm:left-7 material-symbols-outlined">
                      logout
                    </span>
                    <div className="">
                      <button
                        className="h-9 p-2 w-full xl:inline-block ssm:hidden
             hover:border-t hover:shadow-lg hover:shadow-sky-200 hover:text-sky-400"
                      >
                        Logout
                      </button>
                    </div>
                  </div>

                  {/* <ButtonSideBar url="/home" icon="logout">
                  Log Out
                </ButtonSideBar> */}
                </div>
              </div>
            </div>
          </div>
          <Link to={url}>
          <img
            className="xl:inline-block h-[200px] ssm:hidden w-60 object-cover "
            src={current.image}
            alt=""
          />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
