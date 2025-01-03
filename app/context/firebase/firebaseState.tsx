import React, { useReducer } from "react";
import _ from "lodash";
import FirebaseReducer from "../../../context/firebase/firebaseReducer";
import FirebaseContext from "../../../context/firebase/firebaseContext";
import { FirebaseStateType, Action } from "../../../context/types";
import firebase from "../../../firebase";
import { GET_PRODUCTS } from "@/types";

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

  const getProducts = () => {
    dispatch({
      type: GET_PRODUCTS,
    });
    firebase.db
      .collection("products")
      .where("available", "==", true)
      .onSnapshot(handleSnapshot);

    function handleSnapshot(snapshot: any) {
      let dishes = snapshot.docs.map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dishes = _.sortBy(dishes, "category");

      dispatch({ type: GET_PRODUCTS, payload: dishes });
    }
  };

  return (
    <FirebaseContext.Provider value={{ state, firebase, getProducts }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
