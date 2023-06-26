export const ADD = "ADD";
export const DELETE = "DELETE";
export const ORDER_BASKET = "ORDER_BASKET";

export const addItem = (item) => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.basket.basketArray?.some((existingItem) => JSON.stringify(existingItem) === JSON.stringify(item))) {
      return;
    }
    const newBasketArray = [...state.basket.basketArray, item];
    localStorage.setItem("basketArray", JSON.stringify(newBasketArray));
    
    const productSum = newBasketArray.reduce((sum, item) => {
      return sum + parseInt(item.price);
    }, 0);
    localStorage.setItem("productSum", JSON.stringify(productSum));
    dispatch({
      type: ADD,
      payload: {item, productSum}
    });
  };
};

export const deleteItem = (item) => {
  return (dispatch, getState) => {
    const state = getState();
    const updatedBasketArray = state.basket.basketArray.filter(
      (existingItem) => JSON.stringify(existingItem) !== JSON.stringify(item)
    );
    localStorage.setItem("basketArray", JSON.stringify(updatedBasketArray));

    const updatedProductSum = updatedBasketArray.reduce((sum, item) => {
      return sum + parseInt(item.price);
    }, 0);
    localStorage.setItem("productSum", JSON.stringify(updatedProductSum));
    dispatch({
      type: DELETE,
      payload: {item, updatedProductSum}
    });
  };
};

export function changeBasket(textBtn, item) {
  return function (dispatch) {
    textBtn === "Add to cart" ? dispatch(addItem(item)) : dispatch(deleteItem(item))
  }
}

export function orderBasket() {
  return function (dispatch, getState) {
    const state = getState();
    const productList =[];
    state.basket.basketArray.map((item) => productList.push(item.name));
    const newBasketArray = [] 
    localStorage.setItem("basketArray", JSON.stringify(newBasketArray));
    localStorage.setItem("productSum", JSON.stringify(0));
    dispatch({
      type: ORDER_BASKET,
      payload: newBasketArray
    })
  }
}
