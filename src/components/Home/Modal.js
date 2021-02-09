import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../../styles/Home/Modal.css";
function Modal({ closeModal, deletePost, _id }) {
  return (
    <div className="modal">
      <p onClick={() => deletePost(_id)}>Delete</p>
      <div onClick={closeModal} className="close">
        <CloseIcon />
      </div>
    </div>
  );
}

export default Modal;
