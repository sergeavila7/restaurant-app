import {
  CONFIRM_ORDER_DISH,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  SHOW_SUMMARY,
} from "@/types";
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
    case DELETE_PRODUCT:
      return {
        ...state,
        order: state.order.filter((product) => product.id != action.payload),
      };
    default:
      return state;
  }
};

export default OrderReducer;
