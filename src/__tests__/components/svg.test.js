import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import StarSolid from "../../pages/favorite/star";
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Test  Favorite star', () => {
    const item = {
        name: "Whip", price: "180$", url: "./images/whip.webp", article: "52169875", color: "black"
    }
    const favoriteArray = [
        {name: "Whip", price: "180$", url: "./images/whip.webp", article: "52169875", color: "black"},
        {name: "Pasties", price: "100$", url: "./images/pasties.webp", article: "75213699", color: "gold"},
        {name: "Bondage", price: "70$", url: "./images/bondage.webp", article: "25987456", color: "black"}
    ]
    render(
        <Provider store={store} >
            <StarSolid id={8} star='#000' item={item} favoriteArray={favoriteArray}/>
        </Provider>
        );
    expect(screen.getByTestId('favoriteStar-8')).toBeInTheDocument();
    expect(screen.getByTestId('favoriteStar-8')).toHaveAttribute('width', '25');
    expect(screen.getByTestId('favoriteStar-8')).toHaveAttribute('height', '25');
    expect(screen.getByTestId('favoriteStar-8')).toHaveClass('svg');
    fireEvent.click(screen.getByTestId('favoriteStar-8'));
})

test('Test snapshot Svg', () => {
    const tree = renderer.create(
    <Provider store={store} >
        <StarSolid id={8}/>
    </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})