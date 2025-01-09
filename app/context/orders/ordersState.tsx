import React, { Reducer, useReducer } from "react";
import OrdersReducer from "../../../context/orders/ordersReducer";
import OrdersContext from "../../../context/orders/ordersContext";
import { CONFIRM_ORDER_DISH, SELECT_PRODUCT } from "@/types";
import { Action, OrderStateType } from "@/context/types";

const initialState: OrderStateType = {
  order: [],
  dish: [],
};

interface OrdersStateProps {
  children: React.ReactNode;
}

const OrdersState: React.FC<OrdersStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<OrderStateType, Action>>(
    OrdersReducer,
    initialState
  );

  const selectDish = (dish: any) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: dish,
    });
  };

  const saveOrder = (order: any) => {
    dispatch({
      type: CONFIRM_ORDER_DISH,
      payload: order,
    });
  };

  return (
    <OrdersContext.Provider value={{ state, dispatch, selectDish, saveOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
