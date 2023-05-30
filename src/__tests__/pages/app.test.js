import { render, screen, cleanup } from "@testing-library/react";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

afterEach(cleanup);

test('Test App page', () => {
    render(
    <Provider store={store}>
        <MemoryRouter>
            <App id={9} />
        </MemoryRouter>
    </Provider>
    );
    expect(screen.getByTestId('appPageHeader-9')).toBeInTheDocument();
    expect(screen.getByTestId('card-list-9')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('🗑');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('★');
    expect(screen.getAllByRole('link')[2]).toHaveTextContent('🏠');
    expect(screen.getAllByRole('link')[0]).toHaveStyle("marginRight: 10px");
    expect(screen.getAllByRole('button')).toHaveLength(2);
});
