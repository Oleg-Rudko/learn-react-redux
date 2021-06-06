import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Something": {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
