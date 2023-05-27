import { Shop } from "../../components/shop";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../redux/pages/app/actions";
import { useEffect } from "react";
import style from "../../components/shop/Shop.module.sass"

export function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeTitle("Home"));
    }, [dispatch]);
    
        return (<>
        <div className={`${style.shop}`}>   
            <Shop 
            className="add"
            productsFile="products" 
            textbtn="Add to cart"/>
        </div>
        </>)
    }
