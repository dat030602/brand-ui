import React from "react";
import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { useLocation } from "react-router-dom";
import Item from "./Item";

function Products({ children }) {
	const location = useLocation();
	const data = location.state.message.data;
	//console.log(data1);

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
											<label htmlFor="Samsung">Samsung</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung1"
												/>
											<label htmlFor="Samsung1">Samsung1</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung2"
												/>
											<label htmlFor="Samsung2">Samsung2</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${"input-brand"}`}
												type="checkbox"
												id="Samsung3"
												/>
											<label htmlFor="Samsung3">Samsung3</label>
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
											<label htmlFor="Metallic">Metallic</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic1"
											/>
											<label htmlFor="Metallic1">Metallic1</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic2"
											/>
											<label htmlFor="Metallic2">Metallic2</label>
										</div>
										<div
											className={`${styles["filter-item-content-item"]}`}
										>
											<input
												className={`${styles["input-feature"]}`}
												type="checkbox"
												id="Metallic3"
											/>
											<label htmlFor="Metallic3">Metallic3</label>
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
												<label htmlFor="5-star">
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
												<label htmlFor="4-star">
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
												<label htmlFor="3-star">
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
												<label htmlFor="2-star">
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
												<label htmlFor="1-star">
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
								{data.length > 0 ? <div className={`${styles["about"]}`}>
									12,911 items in {" "}
									<strong>Mobile accessory</strong>
								</div> : <div className={`${styles["about"]}`}>
									Không tìm thấy sản phẩm
								</div>}
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
								{data &&
									Object.keys(data).map(function(key) {
										return <Item key={key} data={data[key]} />;
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Products;
