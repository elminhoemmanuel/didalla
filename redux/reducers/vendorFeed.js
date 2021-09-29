import { GET_FEED_BOOSTERS, START_FETCH, STOP_FETCH, SET_ERROR, SET_SORTER, SHOW_FILTER,
  RESET_ERROR, GET_NOTIFS,TOGGLE_NOTIF, NOTIF_VIEWED

} 

from "../types";

const initialState = {
  boosters: [],
  boostersResponse:{},
  loading: true,
  error: "",
  showFilter:false,
  notifs:[],
  toggleNotif:false,
  notifViewed:false,
};

export const vendorFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILTER:
      return {
        ...state,
        showFilter: !state.showFilter,
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
    case RESET_ERROR:
      return {
        ...state,
        error: "",
      };
    case GET_FEED_BOOSTERS:
      return {
        ...state,
        boostersResponse: action.payload,
        boosters:action.payload.data
      };
    case GET_NOTIFS:
      return {
        ...state,
        notifs:action.payload,
      };
    case TOGGLE_NOTIF:
      return {
        ...state,
        toggleNotif: !state.toggleNotif,
      };
    case NOTIF_VIEWED:
      return {
        ...state,
        notifViewed: !state.notifViewed,
      };
    default:
      return state;
  }
};