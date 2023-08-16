import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ModalLayout.module.scss";

function ModalLayout({ children, onLogin }) {
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
    // <>
    //   <app-header>
    //     <Header isAdmin={isAdmin} isPageNoSearch={isPageNoSearch} />
    //   </app-header>
    //   <main
    //     style={{
    //       marginTop: isPageNoSearch || isAdmin ? "-48px" : "0",
    //       paddingLeft: isAdmin ? "280px" : "0",
    //       minHeight: isAdmin ? "calc(100vh + 48px)" : "100vh",
    //     }}
    //   >
    //     {children}
    //   </main>
    //   <Modal />
    //   <app-footer>
    //     <Footer isAdmin={isAdmin} />
    //   </app-footer>
    // </>
  );
}
export default DefaultLayout;
