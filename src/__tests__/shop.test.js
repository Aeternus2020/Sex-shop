import { ProductCard } from "../components/shop/productCard";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { store } from "../redux/store/store";
import { Provider } from "react-redux";

afterEach(cleanup);

test('Should component exist', () => {
    render(
    <Provider store={store}>
        <ProductCard id={1} />
    </Provider>
    );
    expect(screen.getByTextId('table-row-1')).toBeInTheDocument()
})

test('test basic props', () => {
    const tableRowProps = {
        "name": "Bracelets",
        "price": "120$",
        "url": "./images/bracelets.webp",
        "article": "75213698",
        "color": "black"
    }
    render(<ProductCard {...tableRowProps}/>);
    expect(screen.getByTestId('table-row-1')).toBeInTheDocument();
    expect(screen.getByTestId('table-row-1')).toHaveTextContent('Bracelets');
    expect(screen.getByTestId('table-row-1')).toHaveTextContent('120$');
    expect(screen.getByTestId('table-row-1')).toHaveTextContent('black');
})

test('should always pass', () => {
    const value = 2
    expect(value).not.toBe(4)
})
