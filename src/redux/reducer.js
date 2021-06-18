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

    case "CLEAR_TODO": {
      return {
        arrayTodos: action.value,
      }
    }

    case "COMPLETE_TODO": {
      return {
        ...state,
        arrayTodos: state.arrayTodos.map((item) => {
          if (item.id !== action.id) {
            return item;
          }
          return { ...item, isActive: action.value };
        }),
      };
    }

    case "ALL_COMPLETE": {
      return {
        ...state,
        arrayTodos: state.arrayTodos.map((item) => {
          return { ...item, isActive: action.value };
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
