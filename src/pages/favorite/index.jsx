import { Shop } from "../../components/shop";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../redux/pages/app/actions";
import { useEffect } from "react";
import style from "../../components/shop/Shop.module.sass"

export function Favorite() {
  const countFavorite = useSelector(state => state.favorite.favoriteArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Favorite"));
  }, [dispatch]);
  
  return (
    <> <div className={`${style.shop}`}>
    <Shop 
    key={JSON.stringify(countFavorite)}
    className="add"
    productsFile={countFavorite} 
    textbtn="Add to cart"/>
      </div>
    </>
  );
}
