import React, {useReducer} from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import {FirebaseStateType, Action} from '../types';

const initialState: FirebaseStateType = {
  menu: [],
};

interface FirebaseStateProps {
  children: React.ReactNode;
}

const FirebaseState: React.FC<FirebaseStateProps> = ({children}) => {
  // Usar useReducer con el estado y reducer correctos
  const [state, dispatch] = useReducer<
    React.Reducer<FirebaseStateType, Action>
  >(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{state, dispatch}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
