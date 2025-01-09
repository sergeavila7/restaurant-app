import React, { useReducer } from "react";
import OrdersReducer from "../../../context/orders/ordersReducer";
import OrdersContext from "../../../context/orders/ordersContext";
import { CONFIRM_ORDER_DISH, SELECT_PRODUCT, SHOW_SUMMARY } from "@/types";
import { Action, Dish, Order, OrderStateType } from "@/context/types";

const initialState: OrderStateType = {
  dish: [],
  order: [],
  total: 0,
};

interface OrdersStateProps {
  children: React.ReactNode;
}

const OrdersState: React.FC<OrdersStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<OrderStateType, Action>>(
    OrdersReducer,
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

  return (
    <OrdersContext.Provider
      value={{ state, selectDish, saveOrder, showSummary }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
