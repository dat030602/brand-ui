import React from "react";

import styles from "./Products.module.scss";

function Products({ children }) {
	return (
		<>
			<div className="container">
				<div className={`${styles["main"]} pt-4 pb-4`}>
					<div className={`${styles["direction"]}`}>
						<div className={`${styles["direction-item"]}`}>
							<a href="/" className="">
								Home
							</a>
						</div>
						<div className="arrow">
							<img
								src="../../../../assets/svg/arrow.svg"
								alt=""
							/>
						</div>
						<div className={`${styles["direction-item"]}`}>
							<a href="/" className="">
								Clothings
							</a>
						</div>
						<div className="arrow">
							<img
								src="../../../../assets/svg/arrow.svg"
								alt=""
							/>
						</div>
						<div className={`${styles["direction-item"]}`}>
							<a href="/" className="">
								Men’s wear
							</a>
						</div>
						<div className="arrow">
							<img
								src="../../../../assets/svg/arrow.svg"
								alt=""
							/>
						</div>
						<div className={`${styles["direction-item"]}`}>
							<a href="/" className="">
								Summer clothing
							</a>
						</div>
					</div>
					<div className="row pt-4 pb-4">
						<div className="col col-lg-2 pr-3">
							<div className={`${styles["filter-list"]}`}>
								<div
									className={`${styles["filter-item"]} pb-3`}
								>
									<div className="line"></div>
									<div
										className={`${styles["filter-item-title"]} pt-3`}
									>
										<span>Category</span>
										<img
											className="down"
											src="../../../../assets/svg/arrow.svg"
											alt=""
										/>
									</div>
									<div className={`${"filter-item-content"}`}>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<a href="/">Mobile accessory</a>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<a href="/">Mobile accessory</a>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<a href="/">Mobile accessory</a>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<a href="/">Mobile accessory</a>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<span>See all</span>
										</div>
									</div>
								</div>
								<div
									className={`${styles["filter-item"]} pb-3`}
								>
									<div className="line"></div>
									<div
										className={`${styles["filter-item-title"]} pt-3`}
									>
										<span>Brands</span>
										<img
											className="down"
											src="../../../../assets/svg/arrow.svg"
											alt=""
										/>
									</div>
									<div className={`${"filter-item-content"}`}>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung"
											/>
											<label for="Samsung">Samsung</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung1"
												/>
											<label for="Samsung1">Samsung1</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung2"
												/>
											<label for="Samsung2">Samsung2</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung3"
												/>
											<label for="Samsung3">Samsung3</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<span>See all</span>
										</div>
									</div>
								</div>
								<div
									className={`${styles["filter-item"]} pb-3`}
								>
									<div className="line"></div>
									<div
										className={`${styles["filter-item-title"]} pt-3`}
									>
										<span>Features</span>
										<img
											className="down"
											src="../../../../assets/svg/arrow.svg"
											alt=""
										/>
									</div>
									<div className={`${"filter-item-content"}`}>
										<div className="row">
											<div className="value-price">
												<span>Min</span>
												<input
													className={`${styles["input-min"]}`}
													type="text"
													placeholder="0"
												/>
											</div>
											<div className="value-price">
												<span>Max</span>
												<input
													className={`${styles["input-max"]}`}
													type="text"
													placeholder="9999999"
												/>
											</div>
											<button
												type="button"
												className="btn btn-outline-primary"
											>
												Apply
											</button>
										</div>
									</div>
								</div>
								<div
									className={`${styles["filter-item"]} pb-3`}
								>
									<div className="line"></div>
									<div
										className={`${styles["filter-item-title"]} pt-3`}
									>
										<span>Price range</span>
									</div>
									<div className={`${"filter-item-content"}`}>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic"
											/>
											<label for="Metallic">Metallic</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic1"
											/>
											<label for="Metallic1">Metallic1</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic2"
											/>
											<label for="Metallic2">Metallic2</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic3"
											/>
											<label for="Metallic3">Metallic3</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<span>See all</span>
										</div>
									</div>
									<div
										className={`${styles["filter-item"]} pb-3`}
									>
										<div className="line"></div>
										<div
											className={`${styles["filter-item-title"]} pt-3`}
										>
											<span>Ratings</span>
										</div>
										<div
											className={`${"filter-item-content"}`}
										>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="checkbox"
													id="5-star"
												/>
												<label for="5-star">
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
												</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="checkbox"
													id="4-star"
												/>
												<label for="4-star">
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
												</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="checkbox"
													id="3-star"
												/>
												<label for="3-star">
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
												</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="checkbox"
													id="2-star"
												/>
												<label for="2-star">
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
												</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="checkbox"
													id="1-star"
												/>
												<label for="1-star">
													<svg
														className="star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
													<svg
														className="star no-star"
														data-src="../../../../assets/svg/star.svg"
													></svg>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col pl-3">
							<div className={`${styles["header-products"]} bg-w d-flex pt-2 pb-2 pl-3 pr-3 mb-3 rounded border`}>
								<div className={`${styles["about"]}`}>
									12,911 items in {" "}
									<strong>Mobile accessory</strong>
								</div>
								<div className={`${styles["grid-products"]} d-flex border rounded`}>
									<div className={`${styles["grid-products-item"]} ${styles["active"]}`}>
										<img
											src="../../../../assets/svg/mul-grid.svg"
											alt=""
										/>
									</div>
									<div className={`${styles["grid-products-item"]}`}>
										<img
											src="../../../../assets/svg/line1.svg"
											alt=""
										/>
									</div>
								</div>
							</div>
							{/* <!-- <div className="products"> --> */}
							<div className={`${styles["products"]} grid-3`}>
								<div className={`${styles["products-item"]}`}>
									<div className={`${styles["product"]} row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3`}>
										<a
											href="/product"
											className={`${styles["product-image"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</a>
										<div className={`${styles["product-content"]} p-3 d-flex`}>
											<a
												href="/product"
												className={`${styles["product-content-cover"]} pb-2`}
											>
												<div className={`${styles["product-name"]} par-line-2`}>
													Canon Cmera EOS 2000, Black
													10x zoom
												</div>
												<div className={`${styles["product-about"]}`}>
													<div className={`${styles["price"]}`}>
														<span>$998.00</span>
														<span>$1128.00</span>
													</div>
													<div className={`${styles["product-about"]} d-flex`}>
														<div className={`${styles["product-star"]} d-flex`}>
															<div className="svg-star d-flex">
																<svg
																	className="star"
																	data-src="../../../../assets/svg/star.svg"
																></svg>
																<svg
																	className="star"
																	data-src="../../../../assets/svg/star.svg"
																></svg>
																<svg
																	className="star"
																	data-src="../../../../assets/svg/star.svg"
																></svg>
																<svg
																	className="star"
																	data-src="../../../../assets/svg/star.svg"
																></svg>
																<svg
																	className="star"
																	data-src="../../../../assets/svg/star.svg"
																></svg>
															</div>
															<div className={`${styles["product-point"]}`}>
																7.5
															</div>
														</div>
														<div className={`${styles["product-sale"]}`}>
															<span>•</span>
															<span>
																154 orders
															</span>
														</div>
													</div>
												</div>
												<div className={`${styles["product-description"]} mt-2 mb-2 overflow-hidden`}>
													<span className="par-line-2">
														Lorem ipsum dolor sit
														amet, consectetur
														adipisicing elit, sed do
														eiusmod tempor
														incididunt ut labore et
														dolore magna aliqua
													</span>
												</div>
											</a>
											<div className={`${styles["product-favorite"]} ${styles["active"]}`}>
												<button>
													<svg
														className="star btn"
														data-src="../../../../assets/svg/heart.svg"
													></svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Products;
