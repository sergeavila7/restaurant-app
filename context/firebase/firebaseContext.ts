import { createContext } from 'react';
import { Action, FirebaseStateType } from '../types';


interface FirebaseContextType {
  state: FirebaseStateType;  
  dispatch: React.Dispatch<Action>; 
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export default FirebaseContext;
