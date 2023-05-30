import { cleanup } from "@testing-library/react";
import basket, { defaultState } from "../../redux/pages/basket/reducers";

afterEach(cleanup);

describe('reducer', () => {
    const itemBasket = {
        article :  "23698521",
        color : "black",
        name : "Cuffs",
        price : "110$",
        url : "./images/cuffs.webp"
    }

    it('should handle ADD', () => {
        expect(basket(defaultState, {type: 'ADD', payload: itemBasket})).toEqual({
            ...defaultState,
            basketArray: [...defaultState.basketArray, itemBasket],
        });
    });
    it('should handle DELETE', () => {
        expect(basket(defaultState, {type: 'DELETE', payload: itemBasket})).toEqual({
            ...defaultState,
            basketArray: defaultState.basketArray.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(itemBasket))
        });
    });
    it('should handle ORDER_BASKET', () => {
        expect(basket(defaultState, {type: 'ORDER_BASKET', payload: []})).toEqual({
            basketArray: []
        });
    });
});
