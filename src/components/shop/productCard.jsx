import styles from "../shop/Shop.module.sass";
import { useSelector } from "react-redux";
import ButtonModal from "../buttonModal";
import StarSolid from "../../pages/favorite/star";
import { useState } from "react";

export function ProductCard(props) {
    const [star, setStar] = useState('#000');
    const countFavorite = useSelector(state => state.favorite.favoriteArray);
    const buttonCross = useSelector(state => state.showModal.button);

    return (
        <li key={props.item.article}  data-testid={`table-row-${props.id}`}>
        <div className={`${styles.name}`}>{props.item.name}</div>
        <img src={props.item.url} alt={props.item.name} /> 
        <div className={`${styles.price}`}>
            <div>Price: {props.item.price}</div>
            <StarSolid 
                favoriteArray={countFavorite} 
                item={props.item} 
                star={star}/>
        </div>
        {buttonCross && 
            <ButtonModal 
            className = {props.className}
            text={props.text}
            item={props.item} 
            textbtn={props.textbtn}/>}
        </li>
    )
}