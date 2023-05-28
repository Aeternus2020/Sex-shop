import { applyMiddleware, combineReducers, createStore } from "redux";
import products from "../getProducts/reducers";
import basket from "../pages/basket/reducers";
import favorite from "../pages/favorite/reducers";
import showModal from "../components/modal/reducers"; 
import title from "../pages/app/reducers";
import { composeEnhancers, middleware } from "./middleware";

export const rootReducer = combineReducers({
    products,
    basket,
    favorite,
    showModal,
    title
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
    )