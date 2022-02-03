import { GET_COUNTRIES, SHOW_START_CAMP,
  
  } 
  
  from "../types";
  
  const initialState = {
    showStartCamp:false,
    countries:[],
  };
  
  export const vendorCampaignsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_START_CAMP:
        return {
          ...state,
          showStartCamp : !state.showStartCamp,
        };
      case GET_COUNTRIES:
        return {
          ...state,
          countries : action.payload,
        };
      default:
        return state;
    }
  };