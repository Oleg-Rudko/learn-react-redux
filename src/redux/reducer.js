import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        arrayTodos: [...state.arrayTodos, action.value],
      };
    }

    case "REMOVE_TODO": {
      return {
        ...state,
        arrayTodos: state.arrayTodos.filter(({ id }) => id !== action.value),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
