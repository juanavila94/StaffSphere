import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
// import ChatBot from "../../Components/ChatBot/ChatBot";
import ButtonChatBot from "../../Components/ChatBot/ButtonChatBot/ButtonChatBot";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRating } from "../../state/redux/actions/actions";

const Home = () => {
  const container =
    "max-w-[1200px]  flex flex-col justify-center items-center px-5 h-auto ";
  const styleSectionPrimary =
    "flex flex-col bg-slate-100 justify-center items-center lg:h-screen ssm:h-auto ssm:py-10";
  const styleSectionSecondary =
    "flex flex-col  justify-center items-center bg-white lg:h-screen ssm:h-auto ssm:py-10";
  const styleText = "text-center text-6xl font-black ";

  const clients = useSelector((state) => state.ratings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRating());
  }, [dispatch]);

  const {
    loginWithRedirect,
    // loginWithPopup,
    // logout,
    // isAuthenticated,
    // getAccessTokenSilently,
  } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/authorization",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <div className="w-full">
      {/* <Link to={"/home/login"}> */}
      <button
        onClick={handleLogin}
        type="submit"
        className="bg-sky-400 text-white  rounded overflow-hidden px-16 py-3 fixed right-10 top-7 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300 z-50"
      >
        {" "}
        Login
      </button>
      {/* </Link> */}

      <section
        className={`flex flex-col bg-black  justify-center items-center lg:h-screen ssm:h-auto ssm:py-10 relative `}
      >
        <img
          className="absolute left-0 top-0 w-full h-full object-cover z-0 opacity-50"
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          alt=""
        />
        <div className={`${container} z-10`}>
          <div className="">
            <h1 className={`${styleText} text-gray-100`}>
              Don't waste time and get started with the best staff manager
              application!
            </h1>
          </div>
          <Link to={"/home/login/register"}>
            <button
              type="submit"
              className="flex-row m2-2 w-m p-3 text-white rounded bg-sky-400 px-16 py-3 mt-20 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
            >
              {" "}
              Register now!
            </button>
          </Link>
        </div>
      </section>

      <section className={styleSectionSecondary}>
        <div className={container}>
          <div className="flex justify-center items-center gap-14 ">
            <div className="">
              <h2 className={styleText}>About us...</h2>
              <p className="text-xl text-justify pt-10">
                At StaffSphere, we believe that managing your human resources
                should be easy, intuitive, and stress-free. That's why we've
                developed a cutting-edge HR management tool that will make it
                eaasy for you. Our mission is to help businesses of all sizes
                maximize their human resources potential. We understand that
                managing employees can be time-consuming and complicated, which
                is why we've created a tool that simplifies the process and
                saves you valuable time and resources. Our team of experienced
                HR professionals and software developers have worked tirelessly
                to create a tool that's easy to use, reliable, and customizable
                to your specific needs. We're committed to providing top-notch
                customer service and support to ensure that your HR management
                tool works seamlessly for your business. Our software is
                cloud-based, secure, and accessible from anywhere, making it the
                perfect solution for businesses with remote teams. At
                StaffSphere, we're always looking to the future. We're
                constantly updating and improving our tool to meet the evolving
                needs of our customers and stay ahead of the curve in the HR
                management space. With our tool, you can rest assured that your
                human resources are in good hands.
              </p>
            </div>
            <img
              className="rounded-lg "
              src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-slate-100 justify-center items-center ssm:h-auto ssm:pb-10 px-5 lg:h-screen">
        <h2 className={`${styleText} py-10`}>Some of our clients</h2>
        <div className="max-w-[1200px] m-auto ">
          <div className="flex  justify-center items-start gap-10 h-auto flex-wrap">
            {clients?.map(({ name, image, score, comment }, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center border-sky-400 p-5 bg-white w-[300px] border-2 rounded-md"
                >
                  <h3 className="text-2xl pb-1">{name}</h3>

                  <div className="relative flex flex-col justify-center items-center">
                    <img
                      className="object-cover rounded-md h-[180px]"
                      src={image}
                      alt=""
                    />
                    <div className="absolute -bottom-3">
                      <div className="flex">
                        {[...Array(score).fill(0)].map((start, i) => {
                          return (
                            <label key={i}>
                              <AiFillStar
                                size={30}
                                className={`text-yellow-200 transition-all duration-200`}
                              />
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-center block mt-8 h-32 ">
                    <p className="">{comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styleSectionSecondary}>
        <div className={container}>
          <div className="flex justify-center items-center gap-14 ">
            <img
              className="rounded-lg "
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <div className="text-xl mt-8 text-center">
              <h2 className={styleText}>Why StaffSphere...</h2>

              <p className="text-justify pt-10 pb-8">
                Our system allows you to experience the easiest way to manage
                your most valuable assets in the company in a very intuitive
                way. Record your staff data in the Employees panel Add and share
                important dates for the campany Send reminders and announcements
                to an employee or in a bulk Easily navigate through your staff,
                sort them and click for full details... Expertise: Our team of
                experienced HR professionals has the knowledge and expertise to
                handle all aspects of HR management. We keep up to date with the
                latest HR trends and regulations, and we can help businesses
                navigate complex HR issues. Time-saving: Our HR management tool
                automates time-consuming administrative tasks, freeing up
                valuable time for businesses to focus on other important aspects
                of their operations. Customizable: Our tool is customizable to
                meet the specific needs of each business. We work closely with
                our clients to understand their unique HR requirements and
                provide tailored solutions. Cost-effective: Our HR management
                tool is affordable and provides a cost-effective solution for
                businesses looking to manage their human resources more
                efficiently. Excellent customer service: We pride ourselves on
                providing top-notch customer service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <ButtonChatBot />
        </div>
      </section>

      <footer className="bg-gray-200">
        <div className="flex flex-row">
          <div className="w-1/3 flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dtqhqhc9e/image/upload/v1679883961/Images/mqu3wnxbcotfu4t0gbqx.png"
              alt="logo"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-1/3 text-lg">
            <h5 className="">Contact Us</h5>
            <p>email@StaffSphere.com</p>
            <p className="">tel: +54-11-555-1234</p>
          </div>

          <div className="flex flex-col items-center justify-center w-1/3 text-lg">
            <a
              href="https://www.instagram.com/staffsphere_/?igshid=YmMyMTA2M2Y%3D"
              target="_BLANK"
            >
              {" "}
              Instagram
            </a>

            <span>
              <AiFillInstagram size={23}></AiFillInstagram>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

//Register to payment
//About us
//process description/screenshots
//Contacts
