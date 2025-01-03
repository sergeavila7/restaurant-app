import { GET_PRODUCTS } from "@/types";
import { FirebaseStateType, Action } from "../types";

const FirebaseReducer = (
  state: FirebaseStateType,
  action: Action
): FirebaseStateType => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};

export default FirebaseReducer;
