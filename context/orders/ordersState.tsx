import React, {useReducer} from 'react';
import OrdersReducer from './ordersContext';
import OrdersContext from './ordersContext'; 

const initialState = {
  order: [],
};

interface OrdersStateProps {
  children: React.ReactNode;
}

const OrdersState: React.FC<OrdersStateProps> = ({children}) => {
  const [state, dispatch] = useReducer(
    OrdersReducer, 
    initialState,
  );

  return (
    <OrdersContext.Provider value={{state, dispatch}}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
