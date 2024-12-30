import React, { useReducer } from "react";
import FirebaseReducer from "../../../context/firebase/firebaseReducer";
import FirebaseContext from "../../../context/firebase/firebaseContext";
import { FirebaseStateType, Action } from "../../../context/types";
import firebase from "../../../firebase";
import firebaseApp from "@/firebase/config";

const initialState: FirebaseStateType = {
  menu: [],
};

interface FirebaseStateProps {
  children: React.ReactNode;
}

const FirebaseState: React.FC<FirebaseStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<FirebaseStateType, Action>
  >(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{ state, firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
