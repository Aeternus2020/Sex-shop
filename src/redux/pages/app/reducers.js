import { TITLE_PAGE } from "./actions";

export const defaultState = {
  text: "",
};

export default function title(state = defaultState, action) {
  switch (action.type) {
    case TITLE_PAGE:
      return {
        text: action.payload,
      };
    default:
      return state;
  }
}
