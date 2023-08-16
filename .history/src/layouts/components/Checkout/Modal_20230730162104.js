import React from "react";
import styles from "./Modal.module.scss";

function Modal({ setOpenModal }) {
  return (
    <div className={`${styles["modalBackground"]}`}>
      <div className={`${styles["modalContainer"]}`}>
        <div className={`${styles["titleCloseBtn"]}`}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={`${styles["title"]}`}>
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className={`${styles["body"]}`}>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className={`${styles["footer"]}`}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className={`${styles["cancelBtn"]}`}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
