import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./DefaultLayout.module.scss";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer/Footer";
import { getCookie } from "~/utils/cookies";
import ModalLayout from "../Modal/ModalLayout";

function DefaultLayout({ children, onLogin, modalComponent }) {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(getCookie("Name") === "Admin");
  const [isPageNoSearch, setIsPageNoSearch] = useState(false);
  const [componentsNoSearch, setComponentsNoSearch] = useState([
    "login",
    "register",
    "my-cart",
    "favorite",
    "orders-history",
    "personal/edit",
    "personal",
    "hot-offers",
  ]);
  useEffect(() => {
    var isRun = false;
    for (let index = 0; index < componentsNoSearch.length; index++) {
      const element = componentsNoSearch[index];
      if (location.pathname.indexOf(element) !== -1) {
        setIsPageNoSearch(true);
        isRun = true;
        break;
      }
    }
    if (getCookie("Name") === "Admin") setIsAdmin(true);
    else setIsAdmin(false);
    if (!isRun) setIsPageNoSearch(false);
  }, [location]);
  return (
    <>
      <app-header>
        <Header isAdmin={isAdmin} isPageNoSearch={isPageNoSearch} />
      </app-header>
      <main
        style={{
          marginTop: isPageNoSearch || isAdmin ? "-48px" : "0",
          paddingLeft: isAdmin ? "280px" : "0",
          minHeight: isAdmin ? "calc(100vh + 48px)" : "100vh",
        }}
      >
        {children}
      </main>
      <ModalLayout />
      <app-footer>
        <Footer isAdmin={isAdmin} />
      </app-footer>
    </>
  );
}
export default DefaultLayout;
