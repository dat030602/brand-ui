import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./DefaultLayout.module.scss";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer/Footer";
import { getCookie } from "~/utils/cookies";
import Modal from "~/layouts/components/Checkout/Modal";

function DefaultLayout({ children, onLogin }) {
  return (
    <div></div>
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
