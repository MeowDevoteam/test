import { combineReducers } from "redux";
import { UPDATE_B, UPDATE_C } from "./action";

const state1 = {
  a: "This is A"
};

const aReducer = (state = state1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ------------

const state2 = {
  b: "This is B",
  c: "This is C"
};

const bReducer = (state = state2, action) => {
  switch (action.type) {
    case UPDATE_B:
      return { ...state, b: action.payload };
    case UPDATE_C:
      return { ...state, c: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ aReducer, bReducer });
