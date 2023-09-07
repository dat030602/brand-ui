import React from "react";
import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { Image } from "~/components/Image";
import * as HeaderServices from '~/services/HeaderServices';
import FuzzySearch from 'fuzzy-search';
import LoadingPage from '../LoadingPage/LoadingPage';
import { createSearchParams } from 'react-router-dom';
function Products({ children }) {
	const queryParameters = new URLSearchParams(window.location.search)
	const fil = queryParameters.get("f");
	const [data, setdata] = useState();
	const [cat, setcat] = useState();
	const [brand, setbrand] = useState();

	useEffect(() => {
		const fetchApi = async () => {
			let result = await HeaderServices.GetAllTypeProduct();
			setcat(result);

			let result2 = await HeaderServices.GetAllBrand();
			setbrand(result2);
		};
		fetchApi();
		setcat(fetchApi());
		if (fil !== "1") {
			const input = queryParameters.get("q");
			const type = queryParameters.get("t");
			if (type === '') {
				const getallproduct = async () => {
					let result = await HeaderServices.GetAllProduct();
					const searcher = await new FuzzySearch(result, ['TEN_SP'], {
						caseSensitive: false,
						sort: true,
					});
					setdata(searcher.search(input));
				};
				getallproduct();
				setdata(getallproduct());
			}
			else {
				const getallproductbytype = async () => {
					let result = await HeaderServices.GetProductsByType(type);
					const searcher = await new FuzzySearch(result, ['TEN_SP'], {
						caseSensitive: false,
						sort: true,
					});
					setdata(searcher.search(input));
				};
				getallproductbytype();
				setdata(getallproductbytype());
			}
		}
		else {
			const filter_cat = queryParameters.get("c");
			const filter_brand = queryParameters.get("b");
			const filter_price = queryParameters.get("p");
			const filter_rating = queryParameters.get("r");
			const filter_products = async () => {
				let result = await HeaderServices.FilterProducts(filter_cat, filter_brand, filter_price, filter_rating);
				setdata(result);
			};
			filter_products();
			setdata(filter_products());
		}
	}, []);
	const lick = () => {
		var get_category = "all";
		var get_brand = "all";
		var get_price = "all";
		var get_rating = "all";
		var categories = document.getElementsByName('selection');
		var brands = document.getElementsByName('selection1');
		var price = document.getElementsByName('selection2');
		var rating = document.getElementsByName('selection3');
		var i;
		for (i = 0; i < categories.length; i++) {
			if (categories[i].checked)
				get_category = categories[i].value;
		}
		for (i = 0; i < brands.length; i++) {
			if (brands[i].checked)
				get_brand = brands[i].value;
		}
		for (i = 0; i < price.length; i++) {
			if (price[i].checked)
				get_price = price[i].value;
		}
		for (i = 0; i < rating.length; i++) {
			if (rating[i].checked)
				get_rating = rating[i].value;
		}
		var b = "1";
		window.location.href = '/products' + `?${createSearchParams({ f: b, c: get_category, b: get_brand, p: get_price, r: get_rating })}`
	};
	return (
		<>
			{data !== undefined && (
				<div className="container">
					<div className={`${styles["main"]} pt-4 pb-4`}>
						<div className={`d-flex`}>
							<div className={`${styles["direction-item"]} mr-2`}>
								<a href="/" className="">
									Home
								</a>
							</div>
							<div className="arrow mr-2">
								<Image
									src="../../../../assets/svg/arrow.svg"
									alt=""
								/>
							</div>
							<div className={`${styles["direction-item"]} mr-2`}>
								<a href="/" className="">
									Clothings
								</a>
							</div>
							<div className="arrow mr-2">
								<Image
									src="../../../../assets/svg/arrow.svg"
									alt=""
								/>
							</div>
							<div className={`${styles["direction-item"]} mr-2`}>
								<a href="/" className="">
									Men’s wear
								</a>
							</div>
							<div className="arrow mr-2">
								<Image
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
											<Image
												className="down"
												src="../../../../assets/svg/arrow.svg"
												alt=""
											/>
										</div>
										<div className={`${"filter-item-content"}`}>
											{cat !== undefined &&
												Object.keys(cat).map((index) => (
													<div
														className={`${styles["filter-item-content-item"]}`}
													>
														<input
															className={`${"input-brand"}`}
															type="radio"
															name="selection"
															id="Samsung"
															value={cat[index].MA_LOAI_SP}
														/>
														<label htmlFor="Samsung">{cat[index].TEN_LOAI_SP}</label>
													</div>
												))}
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
											<Image
												className="down"
												src="../../../../assets/svg/arrow.svg"
												alt=""
											/>
										</div>
										<div className={`${"filter-item-content"}`}>
											{brand !== undefined &&
												Object.keys(brand).map((index) => (
													<div
														className={`${styles["filter-item-content-item"]}`}
													>
														<input
															className={`${"input-brand"}`}
															type="radio"
															name="selection1"
															id="Samsung1"
															value={brand[index].BRAND}
														/>
														<label htmlFor="Samsung1">{brand[index].BRAND}</label>
													</div>
												))}
										</div>
									</div>
									{/* <div
										className={`${styles["filter-item"]} pb-3`}
									>
										<div className="line"></div>
										<div
											className={`${styles["filter-item-title"]} pt-3`}
										>
											<span>Features</span>
											<Image
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
													onClick={lick}
												>
													Apply
												</button>
											</div>
										</div>
									</div> */}
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
													type="radio"
													name="selection2"
													id="Metallic"
													value="0"
												/>
												<label htmlFor="Metallic">Under 130$</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="radio"
													name="selection2"
													id="Metallic"
													value="1"
												/>
												<label htmlFor="Metallic1">130$ - 300$</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="radio"
													name="selection2"
													id="Metallic"
													value="2"
												/>
												<label htmlFor="Metallic2">300$ - 500$</label>
											</div>
											<div
												className={`${styles["filter-item-content-item"]}`}
											>
												<input
													className={`${styles["input-feature"]}`}
													type="radio"
													name="selection2"
													id="Metallic"
													value="3"
												/>
												<label htmlFor="Metallic3">Above 500$</label>
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
														type="radio"
														name="selection3"
														value="5"
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
														type="radio"
														name="selection3"
														value="4"
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
														type="radio"
														name="selection3"
														value="3"
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
														type="radio"
														name="selection3"
														value="2"
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
														type="radio"
														name="selection3"
														value="1"
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
												<div className="row">
													<button
														type="button"
														className="btn btn-outline-primary"
														onClick={lick}
													>
														Apply
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col pl-3">
								<div className={`${styles["header-products"]} bg-w d-flex pt-2 pb-2 pl-3 pr-3 mb-3 rounded border`}>
									{data.length > 0 ? <div className={`${styles["about"]}`}>
										{data.length} items found
									</div> : <div className={`${styles["about"]}`}>
										Không tìm thấy sản phẩm
									</div>}
									<div className={`${styles["grid-products"]} d-flex border rounded`}>
										<div className={`${styles["grid-products-item"]} ${styles["active"]}`}>
											<Image
												src="../../../../assets/svg/mul-grid.svg"
												alt=""
											/>
										</div>
										<div className={`${styles["grid-products-item"]}`}>
											<Image
												src="../../../../assets/svg/line1.svg"
												alt=""
											/>
										</div>
									</div>
								</div>
								<div className={`${styles["products"]} grid-3`}>
									{data &&
										Object.keys(data).map((index) => (
											<div className={`${styles["products-item"]}`} key={index}>
												<div className={`${styles["product"]} row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3`}>
													<a
														href={`/product/${data[index].MA_SP[0]}`}
														className={`${styles["product-image"]}`}
													>
														<div
															className="background-img pt-100p"
															style={{
																backgroundImage:
																	`url('${data[index] && data[index].HINHANH}')`,
															}}
														></div>
													</a>
													<div className={`${styles["product-content"]} p-3 d-flex`}>
														<a
															href={`/product/${data[index].MA_SP[0]}`}
															className={`${styles["product-content-cover"]} pb-2`}
														>
															<div className={`${styles["product-name"]} par-line-2`}>
																{data[index] && data[index].TEN_SP}
															</div>
															<div className={`${styles["product-about"]}`}>
																<div className={`${styles["price"]}`}>
																	<span>${data[index] && data[index].GIA_BAN}</span>
																	<span>${data[index] && data[index].GIA_NHAP}</span>
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
																			{data[index] && data[index].RATING}
																		</div>
																	</div>
																	<div className={`${styles["product-sale"]}`}>
																		<span>•</span>
																		<span>
																			{data[index] && data[index].SL_DA_BAN} orders
																		</span>
																	</div>
																</div>
															</div>
															<div className={`${styles["product-description"]} mt-2 mb-2 overflow-hidden`}>
																<span className="par-line-2">
																	{data[index] && data[index].MO_TA}
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
										))
									}
								</div>
							</div>

						</div>
					</div>
				</div>
			)}
			{data === undefined && <LoadingPage />}

		</>
	);
}
export default Products;
