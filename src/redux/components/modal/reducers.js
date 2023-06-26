import { OPEN_MODAL_ADD, OPEN_MODAL_DELETE, CLOSE_MODAL, OPEN_MODAL_BUY, OPEN_MODAL_REPEAT } from "./actions";

export const defaultState = {
    buttonCansel: false,
    button: true,
    modal: false,
    article: 0,
    name: "",
    header: "",
    text: "",
    item: "",
    textBtn: ""
}

export default function showModal(state = defaultState, action) {
    switch (action.type) {
    case OPEN_MODAL_ADD:
        return {
        modal: true,
        name: action.payload.name,
        article: action.payload.article,
        header: "You add",
        text: "in basket",
        item: action.payload.item,
        textBtn: action.payload.textBtn
        }
    case OPEN_MODAL_DELETE:
        return {
        modal: true,
        name: action.payload.name,
        article: action.payload.article,
        header: "Are you sure you want to delete",
        text: "from the cart?",
        button: false,
        buttonCansel: true,
        item: action.payload.item,
        textBtn: action.payload.textBtn
        };
    case CLOSE_MODAL:
        return {
        modal: false,
        button: true
        };
    case OPEN_MODAL_BUY:
        return {
        modal: true,
        name: action.payload.name,
        header: "Dear ",
        text: "thank you for your purchase. Our manager will contact you shortly.",
        textBtn: "ok"
        }
    default:
        return state;
    }
}
