import { GET_COUNTRIES, START_FETCH, STOP_FETCH, SET_ERROR, RESET_ERROR
  } 
  
  from "../types";
  
  const initialState = {
    loadCountries: true,
    errorCountries: "",
    countries: []
  };
  
  export const miscReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_FETCH:
        return {
          ...state,
          loadCountries: true,
        };
      case STOP_FETCH:
        return {
          ...state,
          loadCountries: false,
        };
      case SET_ERROR:
        return {
          ...state,
          errorCountries: "Something went wrong. Refresh page to try again ",
        };
      case RESET_ERROR:
        return {
          ...state,
          errorCountries: "",
        };
      case GET_COUNTRIES:
        return {
          ...state,
          countries:action.payload
        };
      default:
        return state;
    }
  };