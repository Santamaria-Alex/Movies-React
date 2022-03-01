import React from "react";
import { useState } from "react/cjs/react.development";
import "../Modal.css";

const Modal = ({ movie }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="modal">Modal</div>
    </>
  );
};

export default Modal;
