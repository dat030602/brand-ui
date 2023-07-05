import React, { useEffect, useState } from "react";

import styles from "./DefaultLayout.module.scss";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer/Footer";
// import Header from '~/layouts/components/Header';
// import Footer from '~/layouts/components/Footer';

// const cx = classNames.bind(styles);

function DefaultLayout({ children, white = false, register = false }) {
	const [isAdmin] = useState(true);
	const [isPageNoSearch] = useState(false);
	// useEffect(() => {
	// 	var str = window.location.href;
	// 	componentsNoSearch.forEach((element) => {
	// 		if (str.indexOf(element) !== -1) {
	// 			this.isPageNoSearch = true;
	// 			return;
	// 		}
	// 	});
	// }, []);
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
			<app-footer>
				<Footer isAdmin={isAdmin}/>
			</app-footer>
		</>
	);
}
export default DefaultLayout;
