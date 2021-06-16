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

    case 'REMOVE_TODO': {
      return {
        ...state,
        arrayTodo: state.arrayTodo.filter(({id}) => id !== action.value)
      }
    }

    case 'COMPLET_TODO': {
      return {
        ...state,
        arrayTodo: state.arrayTodo.map(item => {
          if( item.id !== action.id) {
            return item;
          }
          return {...item, isActive: action.value}
        })
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
