import { createContext } from "react";
import { FirebaseStateType } from "../types";

interface FirebaseContextType {
  state: FirebaseStateType;
  firebase: any;
  getProducts: () => void;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(
  undefined
);

export default FirebaseContext;
