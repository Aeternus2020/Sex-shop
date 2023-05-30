import { Shop } from "../../components/shop";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../redux/pages/app/actions";
import { useEffect } from "react";
import style from "../../components/shop/Shop.module.sass"

export function Home(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeTitle("Home"));
    }, [dispatch]);
    
        return (<>
        <div className={`${style.shop}`} data-testid={`homePage-${props.id}`}>   
            <Shop 
            className="add"
            productsFile="products" 
            textbtn="Add to cart"
            id={props.id}/>
        </div>
        </>)
    }
