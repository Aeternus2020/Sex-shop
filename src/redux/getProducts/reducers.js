import { PRINT_PROD } from "./actions";

export const defaultState = [];

export default function products(state = defaultState, action) {
    switch (action.type) {
    case PRINT_PROD:
        return action.payload;
    default:
        return state;
    }
}