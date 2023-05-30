import { cleanup } from "@testing-library/react";
import favorite, {defaultState} from "../../redux/pages/favorite/reducers";

afterEach(cleanup);

describe('reducer', () => {
    const itemFavorite = {
        name: "Gag",
        price: "65$",
        url: "./images/gag.webp",
        article: "23569784",
        color: "red"
    }

    it('should handle ADD_STAR', () => {
        expect(favorite(defaultState, {type: 'ADD_STAR', payload: itemFavorite})).toEqual({
            ...defaultState,
            favoriteArray: [...defaultState.favoriteArray, itemFavorite],
        });
    });
    it('should handle DELETE_STAR', () => {
        expect(favorite(defaultState, {type: 'DELETE_STAR', payload: itemFavorite})).toEqual({
            ...defaultState,
            favoriteArray: defaultState.favoriteArray.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(itemFavorite)
            ),
        });
    });
});
