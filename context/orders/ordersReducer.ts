interface State {
    count: number;
  }
  
  interface Action {
    type: string;
    payload?: any;
  }
  
  // Reducer tipado
  const reducer = (state: State, action: Action): State => {
    switch(action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;
  