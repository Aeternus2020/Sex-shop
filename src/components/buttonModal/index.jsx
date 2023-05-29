import React from "react";
import styles from "./Button.module.sass"
import { useDispatch } from "react-redux";
import { changeModal } from "../../redux/components/modal/actions";

function ButtonModal(props) {
  const dispatch = useDispatch();

  const changeStore = () => {
    dispatch(changeModal(props.item, props.textbtn));
  };

  return (
    <button className={`${styles[props.className]}`}text={props.text} onClick={changeStore} data-testid={`buttons-modal-${props.id}`}>
      {props.textbtn}
    </button>
  );
}

export default ButtonModal;
