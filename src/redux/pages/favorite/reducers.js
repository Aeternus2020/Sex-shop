import { ADD_STAR, DELETE_STAR } from "./actions";

export const defaultState = {
    favoriteArray: JSON.parse(localStorage.getItem("favoriteArray")) || [],
};

export default function favorite(state = defaultState, action) {
    switch (action.type) {
        case ADD_STAR:
        return {
            ...state,
            favoriteArray: [...state.favoriteArray, action.payload],
        };
        case DELETE_STAR:
        return {
            ...state,
            favoriteArray: state.favoriteArray.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
            ),
        };
        default:
        return state;
    }
}
