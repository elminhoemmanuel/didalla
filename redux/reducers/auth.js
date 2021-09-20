import {  LOGIN } from "../types";

const initialState = {
  user:{},
  userDetails:{}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user:action.payload.user,
        userDetails:action.payload,
      };
    default:
      return state;
  }
};