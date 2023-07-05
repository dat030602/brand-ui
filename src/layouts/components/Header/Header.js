import React from "react";

import styles from "./Header.module.scss";
// import image from  "../../../assets/image";

// import classNames from "classnames/bind";

// const cx = classNames.bind(styles);

function Header({ children, isPageNoSearch = false, isAdmin = false }) {
	var componentActive = "";
	var isLogin = true;
	return (
		<>
			<header>
				<div className={!isAdmin ? "container" : "pl-4 pr-4"}>
					<div className={`${styles["header"]} row`}>
						<div className={`${styles["logo"]} col-md-auto`}>
							<a className={`${styles["logo-link"]}`} href="/">
								<img
									src="./assets/image/logo-colored.png"
									alt="s"
								/>
							</a>
						</div>
						{!isPageNoSearch && !isAdmin && (
							<div className={`${styles["search"]} col`}>
								<div className={`${styles["search-row"]} row`}>
									<div
										className={`${styles["search-col"]} col-md-auto`}
									>
										<input
											className={`${styles["input"]}`}
											type="text"
											placeholder="Search"
										/>
									</div>
									<div
										className={`${styles["search-col"]} col-md-auto`}
									>
										<select
											className={`${styles["selection"]}`}
										>
											<option value="">
												All category
											</option>
											<option value="Phone">Phone</option>
											<option value="Laptop">
												Laptop
											</option>
										</select>
									</div>
									<a
										href="/products"
										className={`${styles["icon-search"]} col-md-auto ${styles["search-col"]}`}
									>
										<img
											src="./assets/svg/search.svg"
											alt="d"
										/>
									</a>
								</div>
							</div>
						)}
						<div className={`${styles["action"]} col-md-auto`}>
							<div className="row">
								{isLogin && isAdmin && (
									<div className="col ml-2 d-flex justify-content-end">
										<div
											href="/"
											className="btn btn-danger p-1 pr-2 pl-2"
										>
											Logout
										</div>
									</div>
								)}
								{!isLogin && (
									<div className="col ml-2">
										<a
											href="/login"
											className="btn btn-outline-primary p-1 pr-2 pl-2"
										>
											Sign in
										</a>
									</div>
								)}
								{!isLogin && (
									<div className="col ml-2">
										<a
											href="/register"
											className="btn btn-primary p-1 pr-2 pl-2"
										>
											Register
										</a>
									</div>
								)}
								{isLogin && !isAdmin && (
									<div className="col ml-2">
										<a
											href="/personal/edit"
											className={`${styles["action-icon"]}`}
										>
											<img
												src="./assets/svg/profile.svg"
												alt="/"
											/>
											<span>Profile</span>
										</a>
									</div>
								)}
								{isLogin && !isAdmin && (
									<div className="col ml-2">
										<a
											href="/favorite"
											className={`${styles["action-icon"]}`}
										>
											<img
												src="./assets/svg/favourite.svg"
												alt="/"
											/>
											<span>Favorite</span>
										</a>
									</div>
								)}
								{isLogin && !isAdmin && (
									<div className="col ml-2">
										<a
											href="/my-cart"
											className={`${styles["action-icon"]}`}
										>
											<img
												src="./assets/svg/cart.svg"
												alt="/"
											/>
											<span>Cart</span>
											<div
												className={`${styles["amount"]}`}
											>
												1
											</div>
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="line"></div>
				{!isPageNoSearch && !isAdmin && (
					<div className="container">
						<div className={`${styles["menu"]}`}>
							<div className={`${styles["menu-item"]}`}>
								<div>
									<img src="./assets/svg/menu.svg" alt="" />
								</div>
								<div>All category</div>
							</div>
							<div className={`${styles["menu-item"]}`}>
								<a href="/hot-offers">Hot offers</a>
							</div>
						</div>
					</div>
				)}
				{!isPageNoSearch && <div className="line"></div>}
			</header>
		</>
	);
}
export default Header;
