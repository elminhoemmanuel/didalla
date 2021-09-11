import {  TEST } from "../types";


const initialState = {
  hello:"hello"
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test:"redux tested"
      };
    default:
      return state;
  }
};