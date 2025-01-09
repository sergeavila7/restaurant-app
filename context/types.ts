export interface FirebaseStateType {
  menu: string[];
}
export interface OrderStateType {
  dish: Dish[];
  order: Order[];
  total: number;
}

export interface Action {
  type: string;
  payload?: any;
}
export interface Order {
  id: string;
  dishName: string;
  image?: string;
  description: string;
  category: string;
  price: string;
  available: boolean;
  quantity?: number;
  total?: number;
}

export interface Dish {
  id: string;
  dishName: string;
  image?: string;
  description: string;
  category: string;
  price: string;
  available: boolean;
}
