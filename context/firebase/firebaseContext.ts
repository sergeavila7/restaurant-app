import { createContext } from 'react';
import firebase from 'firebase/compat/app'; 
import {  FirebaseStateType } from '../types';

interface FirebaseContextType {
  state: FirebaseStateType;  
  firebase: any; 
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export default FirebaseContext;
