import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Form from "../components/form";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

afterEach(cleanup);

test("Test Form", () => {

    render(
    <Provider store={store}>
        <Form id={3} />
    </Provider>
    );

    expect(screen.getByTestId("form-3")).toBeInTheDocument();
    expect(screen.getByTestId("form-3")).toHaveTextContent('Ordering');
    expect(screen.getByRole('button')).toHaveTextContent('Checkout');
    expect(screen.getAllByRole("textbox")).toHaveLength(4);
    fireEvent.click(screen.getByRole("button"));
});