import React, { useReducer } from "react";
import OrderReducer from "../../../context/order/orderReducer";
import OrderContext from "../../../context/order/orderContext";
import {
  CONFIRM_ORDER_DISH,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  SHOW_SUMMARY,
} from "@/types";
import { Action, Dish, Order, OrderStateType } from "@/context/types";

const initialState: OrderStateType = {
  dish: [],
  order: [],
  total: 0,
};

interface OrderStateProps {
  children: React.ReactNode;
}

const OrderState: React.FC<OrderStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<OrderStateType, Action>>(
    OrderReducer,
    initialState
  );

  const selectDish = (dish: Dish) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: dish,
    });
  };

  const saveOrder = (order: Order) => {
    dispatch({
      type: CONFIRM_ORDER_DISH,
      payload: order,
    });
  };

  const showSummary = (total: number) => {
    dispatch({
      type: SHOW_SUMMARY,
      payload: total,
    });
  };

  const deleteProduct = (id: string) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  return (
    <OrderContext.Provider
      value={{ state, selectDish, saveOrder, showSummary, deleteProduct }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderState;
