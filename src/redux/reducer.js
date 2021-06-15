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
    default: {
      return state;
    }
  }
};

export default reducer;
