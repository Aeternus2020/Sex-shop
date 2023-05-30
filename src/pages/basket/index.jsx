import { Shop } from "../../components/shop";
import { useSelector, useDispatch } from "react-redux";
import Form from "../../components/form";
import style from '../../components/shop/Shop.module.sass'
import { changeTitle } from "../../redux/pages/app/actions";
import React, { useEffect} from "react";

export function Basket(props) {
  const countBasket = useSelector(state => state.basket.basketArray);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(changeTitle("Basket"));
  }, [dispatch]);
  
  return (
    <>
      <div className={`${style.shop}`} data-testid={`basketPage-${props.id}`}>
        <Shop 
          key={JSON.stringify(countBasket)}
          className="delete"
          productsFile={countBasket}
          textbtn="&times;"
          id={props.id}
        />
        <Form id={props.id}/>
      </div>
    </>
  );
}
