import { ADD, DELETE, ORDER_BASKET } from "./actions";

export const defaultState = {
  basketArray: JSON.parse(localStorage.getItem("basketArray")) || [],
};

export default function basket(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        basketArray: [...state.basketArray, action.payload],
      };
    case DELETE:
      return {
        ...state,
        basketArray: state.basketArray.filter(
          (item) => JSON.stringify(item) !== JSON.stringify(action.payload))
      };
      case ORDER_BASKET:
        return {
          basketArray: action.payload
        }
    default:
      return state;
  }
}
