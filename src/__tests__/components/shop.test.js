import { ProductCard } from "../../components/shop/productCard";
import Shop from "../../components/shop";
import { render, screen, cleanup } from "@testing-library/react";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Test basic props in ProductCard', () => {
    const item = {
        name: "Bracelets",
        price: "120$",
        url: "./images/bracelets.webp",
    }
    render(
        <Provider store={store}>
        <ProductCard item={item} id={1}/>
    </Provider>
        );
    expect(screen.getByTestId('table-row-1')).toBeInTheDocument();
    expect(screen.getByTestId('table-row-1')).toHaveTextContent('Bracelets');
    expect(screen.getByTestId('table-row-1')).toHaveTextContent('120$');
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
})

test('Test basic props in Shop', () => {
    render(
    <Provider store={store}>
        <Shop id={2}/>
    </Provider>
        );
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('List');
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('Table');
    expect(screen.getByTestId('buttons-style-2')).toBeInTheDocument();
    expect(screen.getByTestId('card-list-2')).toBeInTheDocument();
})

test('Test snapshot Shop', () => {
    const tree = renderer.create(
    <Provider store={store} >
        <Shop id={2}/>
    </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})