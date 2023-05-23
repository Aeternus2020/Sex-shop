import { OPEN_MODAL_ADD, OPEN_MODAL_DELETE, CLOSE_MODAL } from "./actions";

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
    default:
        return state;
    }
}
