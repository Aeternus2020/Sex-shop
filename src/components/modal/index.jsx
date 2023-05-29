import { useState, useRef, useEffect } from "react";
import style from "./Modal.module.sass";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/components/modal/actions"; 
import { changeBasket } from "../../redux/pages/basket/actions"

export default function Modal(props) {
  const dispatch = useDispatch();
  const [buttonOk, setCloseButton] = useState(true);
  const modal = useSelector(state => state.showModal.modal)
  const nameModal = useSelector(state => state.showModal.name)
  const headerModal = useSelector(state => state.showModal.header)
  const textModal = useSelector(state => state.showModal.text);
  const buttonCansel = useSelector(state => state.showModal.buttonCansel)

  const htmlRef = useRef(null);
  const modalRef = useRef(null);

  const closeModalWindows = () => {
    htmlRef.current.style.backgroundColor = "white";
    dispatch(closeModal())
  };

  const clickOutside = (event) => {
    const modal = modalRef.current;
    const html = htmlRef.current;
    if (modal && !modal.contains(event.target) && html.contains(event.target)) {
      closeModalWindows();
    }
  };

  useEffect(() => {
    htmlRef.current.style.backgroundColor = "DarkGrey";
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <>
      <div ref={htmlRef} className={`${style.html}`} data-testid={`modalHtml-${props.id}`}>
        {modal && (<div className={`${style.modal}`} ref={modalRef} data-testid={`modal-${props.id}`}>
            <div className={`${style.main}`}>
            {headerModal} {nameModal} {textModal}
            </div>
            {buttonOk && (<button
                className={`${style.buttonCross}`}
                onClick={() => {
                closeModalWindows();
                dispatch(changeBasket(props.textbtn, props.item));
                }}>
                Ok</button>
            )}
              {buttonCansel && (<button
                className={`${style.buttonCross}`}
                onClick={() => {
                closeModalWindows();
                }}>
                Cansel</button>
            )}
        </div>
        )}
    </div>
    </>
);
}
