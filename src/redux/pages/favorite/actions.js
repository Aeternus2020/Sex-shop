export const ADD_STAR = "ADD_STAR";
export const DELETE_STAR = "DELETE_STAR";


    export const addStar = (item) => {
        return (dispatch, getState) => {
            const state = getState();
            if (state.favorite.favoriteArray?.some((existingItem) => JSON.stringify(existingItem) === JSON.stringify(item))) {
                return;
            }
            const newFavoriteArray = [...state.favorite.favoriteArray, item];
            localStorage.setItem("favoriteArray", JSON.stringify(newFavoriteArray));
            dispatch({
                type: ADD_STAR,
                payload: item,
            });
            };
    }

    export const deleteStar = (item) => {
        return (dispatch, getState) => {
            const state = getState();
            const updatedFavoriteArray = state.favorite.favoriteArray.filter(
                (existingItem) => JSON.stringify(existingItem) !== JSON.stringify(item)
            );
            localStorage.setItem("favoriteArray", JSON.stringify(updatedFavoriteArray));
            dispatch({
                type: DELETE_STAR,
                payload: item,
            });
            };
    }

export function changeStarArr(item, color) {
    return function (dispatch) {
        color === '#ff0000' ? dispatch(addStar(item)) : dispatch(deleteStar(item))
    }
}
