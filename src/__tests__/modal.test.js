import { render, screen, cleanup } from "@testing-library/react";
import { store } from "../redux/store/store";
import { Provider } from "react-redux";
import Modal from "../components/modal";

afterEach(cleanup);

test('Test basic props in Modal', () => {
    const item = {
        name: "Whip",
        price: "180$",
        url: "./images/whip.webp",
        article: "52169875",
        color: "black",
        modal: true
    }
    render(
        <Provider store={store} >
            <Modal id={4} item={item} modal={true}/>
        </Provider>
        );
    expect(screen.getByTestId('modalHtml-4')).toBeInTheDocument();
    // expect(screen.getByTestId('modal-4')).toBeInTheDocument();
    // expect(screen.getByTestId('modalHtml-4')).toHaveAttribute('div');
    // expect(screen.getByTestId('table-row-1')).toHaveTextContent('120$');
    // expect(screen.getByRole('img')).toBeInTheDocument();
    // expect(screen.getAllByRole('button')).toBeInTheDocument();
})
