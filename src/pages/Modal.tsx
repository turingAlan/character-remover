import React from "react";
import "../styles/modal.css";

function Modal({ children, setModal }: any) {
  return (
    <div className="modal-container">
      <div className="modal">
        {children}
        <button onClick={() => setModal(false)} className="button">
          close
        </button>
      </div>
    </div>
  );
}

export default Modal;
