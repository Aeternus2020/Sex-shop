import { ADD, DELETE, ORDER_BASKET } from "./actions";

export const defaultState = {
  basketArray: JSON.parse(localStorage.getItem("basketArray")) || [],
  sum: JSON.parse(localStorage.getItem("productSum")) || 0,
};

export default function basket(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        basketArray: [...state.basketArray, action.payload.item],
        sum: action.payload.productSum
      };
    case DELETE:
      return {
        ...state,
        basketArray: state.basketArray.filter(
          (item) => JSON.stringify(item) !== JSON.stringify(action.payload.item)),
        sum: action.payload.updatedProductSum
      };
      case ORDER_BASKET:
        return {
          ...state,
          basketArray: action.payload,
          sum: 0,
        }
    default:
      return state;
  }
}
