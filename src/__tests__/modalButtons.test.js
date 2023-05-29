import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ButtonModal from "../components/buttonModal";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

afterEach(cleanup);

test("Test ModalButton", () => {
    const item = {
        name: "Bondage",
        price: "70$",
        url: "./images/bondage.webp",
        article: "25987456",
        color: "black",
    };

    render(
    <Provider store={store}>
        <ButtonModal id={3} item={item} />
    </Provider>
    );

    expect(screen.getByTestId("buttons-modal-3")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
});
