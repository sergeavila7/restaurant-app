import { SELECT_PRODUCT } from "@/types";
import { OrderStateType, Action } from "../types";

const OrdersReducer = (
  state: OrderStateType,
  action: Action
): OrderStateType => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return { ...state, dish: action.payload };
    default:
      return state;
  }
};

export default OrdersReducer;
