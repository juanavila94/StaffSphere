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
  // GET_POSITIONS_EMPLOYEES,
  GET_POSITIONS,
  GET_ROLES,
  // GET_ROL_EMPLOYEES,
  // SORT_EMPLOYEE_NAME,
  CURRENT_EMPLOYEE,
  GET_FILTER,
  CONTENT_FILTERS,
  CLEAN_URL,
  GET_POSITIONS_NUM,
  GET_AREAS_NUM,
  GET_COMPANIES_CUIT,
  // ADD_RATING,
  GET_ARRAY_EMAILS,
  CLEAN_ARRAY_EMAILS,
  POST_CRUD_AREA,
  GET_CRUD_AREAS,
  POST_CRUD_POSITION,
  GET_CRUD_POSITION,
  UPDATE_CRUD_AREA,
  UPDATE_CRUD_POSITION,
  GET_RATING,
  GET_DELETED_EMPLOYEES,
  UPDATE_DELETED_EMPLOYEE,
  GET_EVENTS,
  // eslint-disable-next-line no-unused-vars
  PUT_EVENTS,
  GET_COMPANY_INFO,
  GET_BIRTHDAY,
  INDEX_AREA,
  GET_ALL_EMPLOYEES,
  GET_DOUGHNU,
  GET_EVENTS_INCOMING,
} from "../action-types/index";

const initialState = {
  allCompanies: [],
  newCompanyId: {},
  company: {},
  employeeCreated: [],
  allEmployees: [],
  employeeDetail: {},
  positions: [],
  positionsNum: [],
  areas: [],
  areasNum: [],
  roles: [],
  currentEmployee: {},
  arrContentFilters: {},
  ratings: [],
  emailsArray: [],
  areasCrud: [],
  positionsCrud: [],
  deletedEmployees: [],
  events: [],
  eventsIncoming: [],
  birthday: [],
  indexArea: [],
  doughnut: [],
  companyInfo: {},

  getAlllEmployees: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        getAlllEmployees: action.payload,
      };
    case GET_COMPANIES:
      return {
        ...state,
        allCompanies: action.payload,
      };
    case ADD_COMPANY:
      return {
        ...state,
        newCompanyId: action.payload.CompanyId,
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employeeCreated: action.payload,
      };
    case RESET_CREATE:
      return {
        ...state,
        employeeCreated: action.payload,
      };
    case GET_EMPLOYEES:
      return {
        ...state,
        allEmployees: action.payload,
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
      };
    case GET_EMPLOYEE_DETAIL:
      return {
        ...state,
        employeeDetail: action.payload,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
      };
    // case GET_AREAS_EMPLOYEES:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   }
    case GET_AREAS:
      return {
        ...state,
        areas: action.payload,
      };
    case GET_AREAS_NUM:
      return {
        ...state,
        areasNum: action.payload,
      };
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
      };
    case GET_POSITIONS_NUM:
      return {
        ...state,
        positionsNum: action.payload,
      };
    // case GET_POSITIONS_EMPLOYEES:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   };
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    // case GET_ROL_EMPLOYEES:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   };
    // case SORT_EMPLOYEE_NAME:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   };
    case CURRENT_EMPLOYEE:
      return {
        ...state,
        currentEmployee: action.payload,
      };
    case GET_FILTER:
      return {
        ...state,
        allEmployees: action.payload,
      };
    case CONTENT_FILTERS:
      return {
        ...state,
        arrContentFilters: { ...state.arrContentFilters, ...action.payload },
      };
    case CLEAN_URL:
      return {
        ...state,
        arrContentFilters: {},
      };
    case GET_COMPANIES_CUIT:
      return {
        ...state,
        company: action.payload,
      };
    case GET_RATING:
      return {
        ...state,
        ratings: action.payload,
      };
    case GET_ARRAY_EMAILS:
      return {
        ...state,
        emailsArray: action.payload,
      };
    case CLEAN_ARRAY_EMAILS:
      return {
        ...state,
        emailsArray: action.payload,
      };
    case GET_DELETED_EMPLOYEES:
      return {
        ...state,
        deletedEmployees: action.payload,
      };
    case UPDATE_DELETED_EMPLOYEE:
      return {
        ...state,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_EVENTS_INCOMING:
      return {
        ...state,
        eventsIncoming: action.payload,
      };

    case POST_CRUD_AREA:
      return {
        ...state,
        areasCrud: action.payload,
      };
    case POST_CRUD_POSITION:
      return {
        ...state,
        positionsCrud: action.payload,
      };
    case GET_CRUD_AREAS:
      return {
        ...state,
        areasCrud: action.payload,
      };
    case GET_CRUD_POSITION:
      return {
        ...state,
        positionsCrud: action.payload,
      };
    case UPDATE_CRUD_AREA:
      return {
        ...state,
        areasCrud: action.payload,
      };
    case UPDATE_CRUD_POSITION:
      return {
        ...state,
        positionsCrud: action.payload,
      };
    case GET_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload,
      };
    case INDEX_AREA:
      return {
        ...state,
        indexArea: action.payload,
      };
    case GET_DOUGHNU:
      return {
        ...state,
        doughnut: action.payload,
      };

    case GET_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
