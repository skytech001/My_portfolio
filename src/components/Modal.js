import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./Modal.css";
import { useModalContext } from "../context/modal-context";

const Modal = ({ className, children }) => {
  const { showModal, hideModalHandler } = useModalContext();
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={hideModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
