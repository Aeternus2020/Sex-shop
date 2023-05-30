import { render, screen, cleanup } from "@testing-library/react";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import Modal from "../../components/modal";
import renderer from 'react-test-renderer';

afterEach(cleanup);

const item = {
    name: "Whip",
    price: "180$",
    url: "./images/whip.webp",
    article: "52169875",
    color: "black"
}

test('Test basic props in Modal', () => {
    render(
        <Provider store={store} >
            <Modal id={4} item={item}/>
        </Provider>
        );
    expect(screen.getByTestId('modalHtml-4')).toBeInTheDocument();
})

test('Test snapshot Modal', () => {
    const tree = renderer.create(
    <Provider store={store} >
        <Modal id={4} item={item}/>
    </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

