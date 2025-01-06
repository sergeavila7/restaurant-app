export interface FirebaseStateType {
  menu: string[];
}
export interface OrderStateType {
  dish: string[];
  order: string[];
}

export interface Action {
  type: string;
  payload?: any;
}
