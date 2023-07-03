import React from "react";

import styles from "./Footer.module.scss";

function Footer({ children, isAdmin = false }) {
	return (
		<>
			{!isAdmin && (
				<footer>
					<div className={`${styles["footer"]}`}>
						<div className="container">
							<div className="row">
								<div className="col">
									<div className={`${styles["footer-col"]}`}>
										<div>
											<a href="/">
												<img
													src="./assets/image/logo-colored.png"
													alt=""
												/>
											</a>
										</div>

										<div>
											<span>
												Best information about the
												company gies here but now lorem
												ipsum is
											</span>
										</div>
										<div
											className={`${styles["item"]} ${styles["list-icon"]}`}
										>
											<a href="/">
												<img
													src="./assets/svg/facebook.svg"
													alt=""
												/>
											</a>
											<a href="/">
												<img
													src="./assets/svg/twitter.svg"
													alt=""
												/>
											</a>
											<a href="/">
												<img
													src="./assets/svg/linkedin.svg"
													alt=""
												/>
											</a>
											<a href="/">
												<img
													src="./assets/svg/instagram.svg"
													alt=""
												/>
											</a>
											<a href="/">
												<img
													src="./assets/svg/youtube.svg"
													alt=""
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="col">
									<div className={`${styles["title"]}`}>
										<span>About</span>
									</div>
									<div className={`${styles["item"]}`}>
										<a href="/">About Us</a>
										<a href="/">Find store</a>
										<a href="/">Categories</a>
										<a href="/">Blogs</a>
									</div>
								</div>
								<div className="col">
									<div className={`${styles["title"]}`}>
										<span>Information</span>
									</div>
									<div className={`${styles["item"]}`}>
										<a href="/">Help Center</a>
										<a href="/">Money Refund</a>
										<a href="/">Shipping</a>
										<a href="/">Contact us</a>
									</div>
								</div>
								<div className="col">
									<div className={`${styles["title"]}`}>
										<span>For users</span>
									</div>
									<div className={`${styles["item"]}`}>
										<a href="/">Login</a>
										<a href="/">Register</a>
										<a href="/">Settings</a>
										<a href="/">My Orders</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`${styles["footer"]} ${styles["copy-right"]}`}
					>
						<div className="container">
							<span>© 2023 Ecommerce. </span>
						</div>
					</div>
				</footer>
			)}
		</>
	);
}
export default Footer;
