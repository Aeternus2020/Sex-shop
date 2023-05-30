import "./App.module.sass";
import { NavLink } from "react-router-dom";
import { Home } from "./pages/home";
import { Favorite } from "./pages/favorite";
import { Basket } from "./pages/basket";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/modal";
import styles from "./pages/home/Pages.module.sass";
import { useSelector } from "react-redux";
import React, { useState} from "react";

export const ShopContext = React.createContext(['table', () => {}]);

function App(props) {
  const countBasket = useSelector(state => state.basket.basketArray);
  const countFavorite = useSelector(state => state.favorite.favoriteArray);
  const isOpenModal= useSelector(state => state.showModal.modal)
  const item = useSelector(state => state.showModal.item)
  const textBtn = useSelector(state => state.showModal.textBtn);
  const title = useSelector(state => state.title.text);
  const [appearanceShop, setAppearanceShop] = useState('table');

  const stateSet = () => (
    isOpenModal ? <Modal 
    textbtn={textBtn}
    item={item}/> : null
);

  return (<>
      <ShopContext.Provider value={[appearanceShop,  setAppearanceShop]}>
        <header data-testid={`appPageHeader-${props.id}`}>
        <div>{title}</div>
          <nav>
            <NavLink to="/basket" style={{ marginRight: "10px", textDecoration: "none"} }>&#128465; {countBasket.length}</NavLink>
            <NavLink to="/favorite" style={{ marginRight: "10px" , textDecoration: "none"}}>&#9733; {countFavorite.length}</NavLink>
            <NavLink to="/" style={{ marginRight: "10px" , textDecoration: "none"}}>&#127968;</NavLink>
          </nav>
        </header>
        {stateSet()}
    <Routes>
        <Route path="/" element={<Home id={props.id}/>}/>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
    </Routes>
    </ShopContext.Provider>
  </>);
}

export default App;
