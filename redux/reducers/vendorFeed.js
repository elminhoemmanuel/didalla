import { GET_FEED_BOOSTERS, START_FETCH, STOP_FETCH, SET_ERROR, SET_SORTER } from "../types";

const initialState = {
  boosters: [],
  boostersResponse:{},
  loading: true,
  error: "",
  sorter: {}
};

export const vendorFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTER:
      // if(action.sortField === "platform"){
      //   return {
      //     ...state,
      //     sorter:{platform:action.sortValue , location: "all", topic: "all", budget: "all"},
      //   };
      // }else if(action.sortField === "location"){
      //   return {
      //     ...state,
      //     sorter:{platform:action.sortValue , location: "all", topic: "all", budget: "all"},
      //   };
      // }
      return {
        ...state,
        sorter: action.payload,
      };
      
    case START_FETCH:
      return {
        ...state,
        loading: true,
      };
    case STOP_FETCH:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: "Something went wrong could not fetch feed. Refresh page to try again ",
      };
    case GET_FEED_BOOSTERS:
      return {
        ...state,
        boostersResponse: action.payload,
        boosters:action.payload.data
      };
    default:
      return state;
  }
};