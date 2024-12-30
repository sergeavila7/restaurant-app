import { FirebaseStateType, Action } from '../types';

const FirebaseReducer = (state: FirebaseStateType, action: Action): FirebaseStateType => {
  switch (action.type) {
    case 'SET_MENU':
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};

export default FirebaseReducer;
