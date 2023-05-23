export const PRINT_PROD = "PRINT_PROD";

export const printProducts = (data) => {
  return {
    type: PRINT_PROD,
    payload: data,
  };
};

export function getProductsAsync(productsFile) {
  return async function (dispatch) {
    if(Array.isArray(productsFile)) {
        dispatch(printProducts(productsFile))
    } else {
    try {
      const response = await fetch(`./${productsFile}.json`);
      const results = await response.json();
      dispatch(printProducts(results));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
}
}
