import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { changeStarArr } from '../../redux/pages/favorite/actions.js';
import style from "../../components/buttonModal/Button.module.sass"

export default function StarSolid(props) {
  const dispatch = useDispatch();
  const [fill, setFill] = useState(() => {
    return props?.favoriteArray && props.favoriteArray.some((item) => item.article === props.item.article) ? '#ff0000' : props.star;
  });
  
  const isArticleInArray = (obj) => {
    return props?.favoriteArray.some((item) => item.article === obj.article);
  };  
  
  useEffect(() => {
    const color = props?.favoriteArray && isArticleInArray(props.item) ? '#ff0000' : props.star;
    setFill(color);
  }, [props.favoriteArray, props.item, props.star]);
  

  return (
    <>
        {
      <svg className={`${style.svg}`} data-testid={`favoriteStar-${props.id}`}
        width="25"
        height="25"
        viewBox="0 0 20 20"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          const color = isArticleInArray(props.item) ? props.star : '#ff0000';
          setFill(color);
          dispatch(changeStarArr(props.item, color))
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.565 4.29c.531-1.276 2.34-1.276 2.871 0l.906 2.18a.64.64 0 0 0 .54.392l2.353.189c1.378.11 1.937 1.83.887 2.73l-1.793 1.535a.64.64 0 0 0-.206.635l.548 2.296c.32 1.345-1.143 2.408-2.323 1.687l-2.014-1.23a.64.64 0 0 0-.667 0l-2.014 1.23c-1.18.721-2.643-.342-2.323-1.687l.548-2.296a.64.64 0 0 0-.206-.635L3.879 9.781c-1.05-.9-.49-2.62.888-2.73l2.352-.189a.64.64 0 0 0 .54-.392l.906-2.18Z"
        />
      </svg>
    }
    </>
  );
}
