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
    dispatch({
      type: ADD,
      payload: item,
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
    dispatch({
      type: DELETE,
      payload: item,
    });
  };
};

export function changeBasket(textBtn, item) {
  return function (dispatch) {
    textBtn === "Add to cart" ? dispatch(addItem(item)) : dispatch(deleteItem(item))
  }
}

export function orderBasket(value) {
  return function (dispatch, getState) {
    const state = getState();
    const productList =[];
    state.basket.basketArray.map((item) => productList.push(item.name));
    const newBasketArray = [] 
    localStorage.setItem("basketArray", JSON.stringify(newBasketArray));
    let text = `Dear, ${value.firstName} ${value.lastName} (${value.age}). 
    Thank you for your purchase.
    Your shopping list: ${productList}.
    Your order will be sent to ${value.address}.
    The parcel number will be sent to the phone number ${value.phone} as soon as the order is shipped.`
    console.log(text);
    dispatch({
      type: ORDER_BASKET,
      payload: newBasketArray
    })
  }
}
