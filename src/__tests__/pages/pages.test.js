import { render, screen, cleanup } from "@testing-library/react";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import { Basket } from "../../pages/basket";
import { Home } from "../../pages/home";
import { Favorite } from "../../pages/favorite";

afterEach(cleanup);

test('Test  Basket page', () => {
    render(
        <Provider store={store} >
            <Basket id={5}/>
        </Provider>
        );
    expect(screen.getByTestId('basketPage-5')).toBeInTheDocument();
    expect(screen.getByTestId('card-list-5')).toBeInTheDocument();
    expect(screen.getByTestId('form-5')).toBeInTheDocument();
})

test('Test  Home page', () => {
    render(
        <Provider store={store} >
            <Home id={6}/>
        </Provider>
        );
    expect(screen.getByTestId('homePage-6')).toBeInTheDocument();
    expect(screen.getByTestId('card-list-6')).toBeInTheDocument();
})

test('Test  Favorite page', () => {
    render(
        <Provider store={store} >
            <Favorite id={7}/>
        </Provider>
        );
    expect(screen.getByTestId('favoritePage-7')).toBeInTheDocument();
    expect(screen.getByTestId('card-list-7')).toBeInTheDocument();
})