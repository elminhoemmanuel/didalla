import {  SHOW_FILTER } from "../types";

const initialState = {
  showFilter:false,
};

export const vendorFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILTER:
      return {
        ...state,
        showFilter: !state.showFilter,
      };
    default:
      return state;
  }
};