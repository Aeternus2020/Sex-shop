import { cleanup } from "@testing-library/react";
import showModal,{ defaultState } from "../../redux/components/modal/reducers";
import { openModalAdd, openModalDelete, closeModal } from "../../redux/components/modal/actions";


afterEach(cleanup);

describe('reducer', () => {
    const newState = {
            article : "75213698",
            color : "black",
            name : "Bracelets",
            price : "120$",
            url : "./images/bracelets.webp"
    }

    it('should handle OPEN_MODAL_ADD', () => {
    expect(showModal(defaultState, openModalAdd(newState, 'Add to cart'))).toEqual({ 
        article: "75213698",
        modal: true,
        name: 'Bracelets',
        header: 'You add',
        text: 'in basket',
        item: newState,
        textBtn: 'Add to cart'
        });
    });
    it('should handle OPEN_MODAL_DELETE', () => {
        expect(showModal(defaultState, openModalDelete(newState, '×'))).toEqual({ 
            article: "75213698",
            modal: true,
            name: 'Bracelets',
            header: 'Are you sure you want to delete',
            text: 'from the cart?',
            item: newState,
            textBtn: '×',
            button: false,
            buttonCansel: true,
            });
        });
        it('should handle CLOSE_MODAL', () => {
            expect(showModal(defaultState, closeModal())).toEqual({ 
                modal: false,
                button: true
                });
            });
    });