// import Spinner from '../../Components/Spinner/Spinner'
// import { Link } from "react-router-dom";
// import { getCurrentEmployee } from '../../state/redux/actions/actions'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Loader from "../../Components/Loader/Loader";

const Authorization = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const { getAccessTokenSilently } = useAuth0();

  console.log(cookies);

  const callProtectedApi = useCallback(async () => {
    try {        
      const token = await getAccessTokenSilently();
      //SWITCH FOR LOCAL OR DEPLOYMENT
      const response = await axios.get("http://localhost:3001/protected", {
      // const response = await axios.get("/protected", {

        headers: {
          authorization: `Bearer ${token}`
        }
      });
      setCookie('cookieBack', response.data.token, { path: '/' });
      navigate(`/authorizationone`);
    } catch (error) {
      alert("you are not allowed!");
      navigate("/");
    }
  }, [getAccessTokenSilently, setCookie, navigate]);

  useEffect(() => {
    callProtectedApi();
  }, [callProtectedApi]);

  return(
    <div className="h-screen w-screen flex justify-center items-center">
      <Loader />
    </div>
  )
}

export default Authorization;
