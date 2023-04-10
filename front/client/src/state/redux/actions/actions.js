import axios from "axios";
import { addUrlQueries } from "../../../Utils/functions/addUrlQueries";
import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_DETAIL,
  DELETE_EMPLOYEE,
  // GET_AREAS_EMPLOYEES,
  GET_AREAS,
  GET_AREAS_NUM,
  // GET_POSITIONS_EMPLOYEES,
  GET_POSITIONS,
  GET_POSITIONS_NUM,
  GET_ROLES,
  // GET_ROL_EMPLOYEES,
  // SORT_EMPLOYEE_NAME,
  CURRENT_EMPLOYEE,
  GET_FILTER,
  CONTENT_FILTERS,
  CLEAN_URL,
  // GET_COMPANIES_CUIT,
  // ADD_RATING,
  GET_ARRAY_EMAILS,
  CLEAN_ARRAY_EMAILS,
  POST_CRUD_AREA,
  GET_CRUD_AREAS,
  DELETE_CRUD_AREAS,
  POST_CRUD_POSITION,
  GET_CRUD_POSITION,
  DELETE_CRUD_POSITION,
  UPDATE_CRUD_AREA,
  UPDATE_CRUD_POSITION,
  GET_DELETED_EMPLOYEES,
  UPDATE_DELETED_EMPLOYEE,
  GET_RATING,
  // POST_EVENTS,
  GET_EVENTS,
  // eslint-disable-next-line no-unused-vars
  PUT_EVENTS,
  GET_BIRTHDAY,
  INDEX_AREA,
  GET_COMPANY_INFO,
  GET_ALL_EMPLOYEES,
  // PUT_EVENTS,
  GET_DOUGHNU,
  GET_EVENTS_INCOMING,
} from "../action-types/index";

export const getAllEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/users`);
      const result = response.data;
      // console.log(result);
      return dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function postCompany(payload) {
  return async function(dispatch) {
    const response = await axios.post("/companies/register", payload);
    return dispatch({ type: ADD_COMPANY, payload: response.data });
  };
}

export function getCompanies() {
  return (dispatch) => {
    axios
      .get("/data/")
      .then((info) => {
        return dispatch({ type: GET_COMPANIES, payload: info.data });
      })
      .catch((err) => console.log(err.message));
  };
}

export function resetCreate() {
  return { type: RESET_CREATE, payload: [] };
}

export const createEmployee = (info, showAnswer) => {
  return function(dispatch) {
    return axios.post("/users", info).then(
      (response) => {
        showAnswer(response.data);
        dispatch({ type: CREATE_EMPLOYEE, payload: response.data });
      },
      (error) => {
        showAnswer(error.response.data.error);
        dispatch({ type: CREATE_EMPLOYEE, payload: error.response.data });
      }
    );
  };
};

export const getEmployees = (filters, showAnswer, idCompany) => {
  return function(dispatch) {
    let url = `/users/${idCompany}`;

    if (idCompany !== undefined) {
      axios.get(addUrlQueries(filters, url)).then(
        (response) => {
          // showAnswer("");
          return dispatch({ type: GET_EMPLOYEES, payload: response.data });
        },
        (error) => {
          // showAnswer(error.response.data.error.error);
          console.log(error.response.data.error.error);
        }
      );
    }
  };
};

export const getFilter = (filters, idCompany, showAnswer) => {
  return async function(dispatch) {
    try {
      let url = `/users/${idCompany}`;

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      showAnswer("");
      return dispatch({
        type: GET_FILTER,
        payload: result,
      });
    } catch (error) {
      showAnswer(error.response.data.error);
    }
  };
};

export const contentFilters = (filter) => {
  return {
    type: CONTENT_FILTERS,
    payload: filter,
  };
};

export const updateEmployee = (id, user, showAnswer) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/users/${id}`, user);
      const result = response.data;
      showAnswer(result);

      return dispatch({
        type: UPDATE_EMPLOYEE,
      });
    } catch (error) {
      showAnswer(error.response.data.error);
    }
  };
};

export const getEmployeeDetail = (CompanyId, id) => {
  return function(dispatch) {
    return axios.get(`/users/${CompanyId}/${id}`).then(
      (response) => {
        dispatch({ type: GET_EMPLOYEE_DETAIL, payload: response.data });
      },
      (error) => {
        dispatch({ type: GET_EMPLOYEE_DETAIL, payload: error.response.data });
      }
    );
  };
};

export const deleteEmployee = (id, showAnswer) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/users/${id}`);
      const result = response.data;
      showAnswer(result);

      return dispatch({
        type: DELETE_EMPLOYEE,
      });
    } catch (error) {
      showAnswer(error);
    }
  };
};

export const getPositions = (filters, CompanyId) => {
  return async function(dispatch) {
    try {
      let url = `/positions/${CompanyId}`;

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      return dispatch({
        type: GET_POSITIONS,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getPositionsNum = (filters, CompanyId) => {
  return async function(dispatch) {
    try {
      let url = `/positions/raw/${CompanyId}`;

      const response = await axios(url);
      const result = response.data;

      return dispatch({
        type: GET_POSITIONS_NUM,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

// export const getPositionsEmployees = (position) => {
//   return async function(dispatch){
//     try {
//       const response = await axios.get(`/users?position=${position}`)
//       const result = response.data;
//       return dispatch({type: GET_POSITIONS_EMPLOYEES, payload: result})
//     } catch(error){
//       console.log(error.message)
//     }
//   }
// }

export const getAreas = (filters, CompanyId) => {
  return async function(dispatch) {
    try {
      let url = `/areas/${CompanyId}`;

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      return dispatch({
        type: GET_AREAS,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // return async function(dispatch){
  //   try {
  //     const response = await axios.get("/areas")
  //     const result = response.data;
  //     return dispatch({type: GET_AREAS, payload: result})
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
};

export const getAreasNum = (filters, CompanyId) => {
  return async function(dispatch) {
    try {
      let url = `http://localhost:3001/areas/ars/${CompanyId}`;

      const response = await axios(url);
      const result = response.data;

      return dispatch({
        type: GET_AREAS_NUM,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

// export const getAreasEmployees = (area) => {
//   return async function(dispatch){
//     try {
//       const response = await axios.get(`/users?area=${area}`)
//       const result = response.data;
//       return dispatch({type: GET_AREAS_EMPLOYEES, payload: result})
//     } catch(error){
//       console.log(error.message)
//     }
//   }
// }

export const getRoles = (filters) => {
  return async function(dispatch) {
    try {
      let url = "/roles";

      const response = await axios(addUrlQueries(filters, url));
      const result = response.data;

      return dispatch({
        type: GET_ROLES,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

// export const getRolEmployees = (role) => {
//   return async function(dispatch){
//     try {
//       const response = await axios.get(`/users?role=${role}`)
//       const result = response.data;
//       return dispatch({type: GET_ROL_EMPLOYEES, payload: result})
//     } catch(error){
//       console.log(error.message)
//     }
//   }
// }

// export const sortEmployeeName = (typeSort) => {
//   return async function (dispatch) {
//     try {
//       console.log(typeSort);
//       const response = await axios.get(`/users?sort=${typeSort}`)
//       const result = response.data;

//       return dispatch({ type: SORT_EMPLOYEE_NAME , payload: result})

//     } catch (error) {
//       const err = error.response.data.error
//       alert(err);
//     }
//   }
// }

export const getCurrentEmployee = (idCompany, id) => {
  return function(dispatch) {
    return axios.get(`/users/${idCompany}/${id}`).then(
      (response) => {
        dispatch({ type: CURRENT_EMPLOYEE, payload: response.data });
      },
      (error) => {
        dispatch({ type: CURRENT_EMPLOYEE, payload: error.response.data });
      }
    );
  };
};

// export const getCurrentEmployee = (user) => {
//   console.log(user, 'esteeee');
//   return {
//     type: CURRENT_EMPLOYEE,
//     payload: user,
//   };
// };

export const cleanUrl = () => {
  return {
    type: CLEAN_URL,
  };
};

export const getCompaniesCuit = (cuit) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(`/companies/validate?cuit=${cuit}`);
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addRating = (rating, commentary, CompanyId) => {
  return async (dispatch) => {
    const opinion = { score: rating, comment: commentary, CompanyId };
    try {
      await axios.post("/reviews", opinion);
    } catch (err) {}
  };
};

export const getRating = () => {
  return async (dispatch) => {
    try {
      const response = await axios("/reviews");
      const result = response.data;

      return dispatch({
        type: GET_RATING,
        payload: result,
      });
    } catch (error) {}
  };
};

export const getArrayEmails = (emails) => {
  return {
    type: GET_ARRAY_EMAILS,
    payload: emails,
  };
};

export const cleanArrayEmails = () => {
  return {
    type: CLEAN_ARRAY_EMAILS,
    payload: [],
  };
};

export const getCompaniesName = (name) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(`/companies?name=${name}`);
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCompaniesTel = (tel) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(`/companies?tel=${tel}`);
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCompaniesEmail = (email) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(`/companies?email=${email}`);
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function postAreaCrud(area) {
  return async function(dispatch) {
    const response = await axios.post("/areas", area);
    return dispatch({ type: POST_CRUD_AREA, payload: response.data });
  };
}

export function getAreasCrud(CompanyId) {
  return (dispatch) => {
    axios
      .get(`/areas/ars/${CompanyId}`)
      .then((info) => {
        return dispatch({ type: GET_CRUD_AREAS, payload: info.data });
      })
      .catch((error) => console.log(error.message));
  };
}

export const getDeletedEmployees = (filters, showAnswer, idCompany) => {
  return function(dispatch) {
    let url = `/users/${idCompany}/deleted`;

    if (idCompany !== undefined) {
      axios.get(addUrlQueries(filters, url)).then(
        (response) => {
          showAnswer("");
          return dispatch({
            type: GET_DELETED_EMPLOYEES,
            payload: response.data,
          });
        },
        (error) => {
          showAnswer(error.response.data);
        }
      );
    }
  };
};

export const updateDeletedEmployee = (id, user, showAnswer) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/users/restore/${id}`, user);
      const result = response.data;
      showAnswer(result);

      return dispatch({
        type: UPDATE_DELETED_EMPLOYEE,
      });
    } catch (error) {
      showAnswer(error.response.data.error);
    }
  };
};

export const deleteAreaCrud = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`/areas/${id}`)
      .then((info) => {
        return dispatch({ type: DELETE_CRUD_AREAS, payload: id });
      })
      .catch((error) => console.log(error.message));
  };
};

export function postPositionCrud(position) {
  return async function(dispatch) {
    const response = await axios.post("/positions", position);
    return dispatch({ type: POST_CRUD_POSITION, payload: response.data });
  };
}

export function getPositionsCrud(CompanyId) {
  return (dispatch) => {
    axios
      .get(`/positions/raw/${CompanyId}`)
      .then((info) => {
        return dispatch({ type: GET_CRUD_POSITION, payload: info.data });
      })
      .catch((error) => console.log(error.message));
  };
}

export const deletePositionCrud = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`/positions/${id}`)
      .then((info) => {
        return dispatch({ type: DELETE_CRUD_POSITION, payload: id });
      })
      .catch((error) => console.log(error.message));
  };
};

export const updateAreaCrud = (id, area) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/areas/${id}`, area);
      dispatch({ type: UPDATE_CRUD_AREA, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePositionCrud = (id, position) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/positions/${id}`, position);
      dispatch({ type: UPDATE_CRUD_POSITION, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUsersTel = (companyId, tel) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `/users/${companyId}/validate?tel=${tel}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUsersEmail = (companyId, email) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `/users/${companyId}/validate?email=${email}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUsersCuil = (companyId, cuil) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `/users/${companyId}/validate?cuil=${cuil}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUsersCbu = (companyId, cbu) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `/users/${companyId}/validate?cbu=${cbu}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getUsersDni = (companyId, dni) => {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `/users/${companyId}/validate?dni=${dni}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addEvents = (savedEvents) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3001/events`, savedEvents);
    } catch (error) {
      console.log(error.error);
    }
  };
};

export const getEvents = (CompanyId) => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/events/${CompanyId}`);
      const result = response.data;
      return dispatch({
        type: GET_EVENTS,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getEventsIncoming = (CompanyId) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `http://localhost:3001/events/next/${CompanyId}`
      );
      const result = response.data;
      return dispatch({
        type: GET_EVENTS_INCOMING,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const putEvents = (calendarEvent) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-unused-vars
      let response = await axios.put(
        `http://localhost:3001/events/${calendarEvent.id}`,
        calendarEvent
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteEvents = (id) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.delete(`http://localhost:3001/events/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCompanyInfo = (CompanyId) => {
  return async (dispatch) => {
    try {
      const response = axios(`http://localhost:3001/companies/${CompanyId}`);
      const result = (await response).data;

      return dispatch({
        type: GET_COMPANY_INFO,
        payload: result,
      });
    } catch (error) {}
  };
};

export const getBirthday = (CompanyId) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `http://localhost:3001/users/${CompanyId}/birthday`
      );
      const result = response.data;
      return dispatch({
        type: GET_BIRTHDAY,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getIndexArea = (CompanyId) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `http://localhost:3001/areas/${CompanyId}/index`
      );
      const result = response.data;
      return dispatch({
        type: INDEX_AREA,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDoughnu = (CompanyId) => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/users/${CompanyId}`);
      const result = response.data;
      return dispatch({
        type: GET_DOUGHNU,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
