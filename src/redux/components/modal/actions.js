export const OPEN_MODAL_ADD = "OPEN_MODAL_ADD";
export const OPEN_MODAL_DELETE = "OPEN_MODAL_DELETE";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL_BUY = "OPEN_MODAL_BUY";

export const openModalAdd = (item, textBtn) => {
    return {
        type: OPEN_MODAL_ADD,
        payload: {
            article: item.article,
            name: item.name,
            item: item,
            textBtn: textBtn
        }
    }
}

export const openModalDelete = (item, textBtn) => {
    return {
        type: OPEN_MODAL_DELETE,
        payload: {
            article: item.article,
            name: item.name,
            item: item,
            textBtn: textBtn
        }
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const  changeModal = (item, textBtn) => {
    return function (dispatch) {
        textBtn === "Add to cart" ? dispatch(openModalAdd(item, textBtn)) : dispatch(openModalDelete(item, textBtn))
    }
}

export const changeModalClose = () =>{
    return function (dispatch) {
        dispatch(closeModal())
    }
}

export const openModalBuy = (value) => {
    return {
        type: OPEN_MODAL_BUY,
        payload: {
            name: value.firstName,
        }
    }
}
