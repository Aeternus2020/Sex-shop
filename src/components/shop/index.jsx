import React, { useState, useEffect, useContext } from 'react';
import styles from "../shop/Shop.module.sass";
import ButtonModal from "../buttonModal";
import StarSolid from '../../pages/favorite/star';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/getProducts/actions'; 
import { ShopContext } from '../../App';

export function Shop(props)  {
  const [star, setStar] = useState('#000');
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const countFavorite = useSelector(state => state.favorite.favoriteArray);
  const buttonCross = useSelector(state => state.showModal.button);
  const [style, setStyle] = useContext(ShopContext);

  function changeStyleShop(item) {
    console.log(style)
    setStyle(item)
  }
  
    useEffect(() => {
        dispatch(getProductsAsync(props.productsFile))
    }, [dispatch]);
    
      return (
        <>
        {buttonCross && 
        <div className={`${styles.style}`}>
          <button onClick={()=>changeStyleShop('list')}>List</button>
          <button onClick={()=>changeStyleShop('')}>Table</button>
        </div>}
          <ul className={`${styles[style]}`}>
          {products?.map((item) => (
            <li key={item.article}>
              <div className={`${styles.name}`}>{item.name}</div>
              <img src={item.url} alt={item.name} /> 
              <div className={`${styles.price}`}>
              <div>Price: {item.price}</div>
              <StarSolid 
                favoriteArray={countFavorite} 
                item={item} 
                star={star}/>
              </div>
              {buttonCross && 
                <ButtonModal 
                className = {props.className}
                text={props.text}
                item={item} 
                textbtn={props.textbtn}/>}
            </li>
          ))}
        </ul>
      </>
      );
    }

export default Shop;