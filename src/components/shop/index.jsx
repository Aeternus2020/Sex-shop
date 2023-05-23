import React, { useState, useEffect } from 'react';
import styles from "../shop/Shop.module.sass";
import ButtonModal from "../buttonModal";
import StarSolid from '../../pages/favorite/star';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/getProducts/actions'; 

export function Shop(props)  {
  const [star, setStar] = useState('#000');
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const countFavorite = useSelector(state => state.favorite.favoriteArray);
  const buttonCross = useSelector(state => state.showModal.button);

    useEffect(() => {
        dispatch(getProductsAsync(props.productsFile))
    }, [dispatch]);
    
      return (
        <>
          <ul>
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