import React, { Reducer, useReducer } from "react";
import OrdersReducer from "../../../context/orders/ordersReducer";
import OrdersContext from "../../../context/orders/ordersContext";
import { SELECT_PRODUCT } from "@/types";
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

  return (
    <OrdersContext.Provider value={{ state, dispatch, selectDish }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
