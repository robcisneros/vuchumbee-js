import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75"
      onClick={props.onHideCart}
    ></div>
  );
};

const ModalOverLay = (props) => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-8 w-11/12 bg-white p-4 rounded-2xl z-30 h-full overflow-y-auto align-middle max-w-2xl ease-in duration-700">
        {/* <div className="fixed top-8 w-11/12 bg-white p-4 rounded-2xl z-30 h-full overflow-y-auto align-middle"></div> */}
        <div> {props.children} </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay> {props.children} </ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
