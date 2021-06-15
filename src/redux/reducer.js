import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        arrayTodo: [
          ...state.arrayTodo,
          action.value,
        ]
      }
      
    }
    case "HELLO": {
      return {
        ...state,
        one: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
