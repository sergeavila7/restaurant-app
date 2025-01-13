import { CONFIRM_ORDER_DISH, SELECT_PRODUCT, SHOW_SUMMARY } from "@/types";
import { OrderStateType, Action } from "../types";

const OrderReducer = (
  state: OrderStateType,
  action: Action
): OrderStateType => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return { ...state, dish: action.payload };
    case CONFIRM_ORDER_DISH:
      return { ...state, order: [...state.order, action.payload] };
    case SHOW_SUMMARY:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default OrderReducer;
