import { Shop } from "../../components/shop";
import { useSelector, useDispatch } from "react-redux";
import Form from "../../components/form";
import style from "./Basket.module.sass";
import { changeTitle } from "../../redux/pages/app/actions";
import { useEffect } from "react";

export function Basket() {
  const countBasket = useSelector(state => state.basket.basketArray);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeTitle("Basket"));
  }, [dispatch]);
  
  return (
    <>
      <div className={`${style.basket}`}>
        <Shop 
          key={JSON.stringify(countBasket)}
          className="delete"
          productsFile={countBasket}
          textbtn="&times;"
        />
        <Form/>
      </div>
    </>
  );
}
