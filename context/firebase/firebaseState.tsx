import React, {useReducer} from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import {FirebaseStateType, Action} from '../types';
import firebase from '../../firebase';

const initialState: FirebaseStateType = {
  menu: [],
};

interface FirebaseStateProps {
  children: React.ReactNode;
}

const FirebaseState: React.FC<FirebaseStateProps> = ({children}) => {
  const [state, dispatch] = useReducer<
    React.Reducer<FirebaseStateType, Action>
  >(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{state, firebase}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
