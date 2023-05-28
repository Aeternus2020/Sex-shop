import React, {useEffect, useContext } from 'react';
import styles from "../shop/Shop.module.sass";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/getProducts/actions'; 
import { ShopContext } from '../../App';
import { ProductCard } from './productCard';

export function Shop(props)  {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const buttonStyle = useSelector(state => state.showModal.button);
  const [style, setStyle] = useContext(ShopContext);

  function changeStyleShop(item) {
    setStyle(item)
  }
  
    useEffect(() => {
        dispatch(getProductsAsync(props.productsFile))
    }, [dispatch]);
    
      return (
        <>
        {buttonStyle && 
        <div className={`${styles.style}`}>
          <button onClick={()=>changeStyleShop('list')}>List</button>
          <button onClick={()=>changeStyleShop('')}>Table</button>
        </div>}
          <ul className={`${styles[style]}`}>
          {products?.map((item) => (
            <ProductCard 
            key={item.article}
            item={item}
            className = {props.className}
            text={props.text}
            textbtn={props.textbtn}/>
          ))}
        </ul>
      </>
      );
    }

export default Shop;