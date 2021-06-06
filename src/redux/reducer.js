import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Something": {
      return null;
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
