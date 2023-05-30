import { cleanup } from "@testing-library/react";
import products, {defaultState} from "../../redux/getProducts/reducers";
import { printProducts } from "../../redux/getProducts/actions";

afterEach(cleanup);

describe('reducer', () => {
    const newState = [
        {
            "name": "Bracelets",
            "price": "120$",
            "url": "./images/bracelets.webp",
            "article": "75213698",
            "color": "black"
            },
            {
            "name": "Cuffs",
            "price": "110$",
            "url": "./images/cuffs.webp",
            "article": "23698521",
            "color": "black"
            },
            {
            "name": "Whip",
            "price": "180$",
            "url": "./images/whip.webp",
            "article": "52169875",
            "color": "black"
            }
    ]

    it('should handle PRINT_PROD', () => {
    expect(products(defaultState, printProducts(newState))).toEqual(newState);
    });
});