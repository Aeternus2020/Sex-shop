import { Shop } from "../../components/shop";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../redux/pages/app/actions";
import { useEffect } from "react";

export function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeTitle("Home"));
    }, [dispatch]);
    
        return (<>
        <div>   
            <Shop 
            className="add"
            productsFile="products" 
            textbtn="Add to cart"/>
        </div>
        </>)
    }
