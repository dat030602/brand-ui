import React, { useEffect, useState } from "react";

import styles from "./Product.module.scss";

function Product({ children }) {
	// const [img, setImg] = useState();
	// const [result, setResult] = useState();
	// const [lens, setLens] = useState();
	function moveOutZoomImage() {
		document.getElementById("myresult").style.display = "none";
		document.querySelector(
			".carousel-item.active > .img-zoom-lens"
		).style.display = "none";
	}
	function moveLens(event) {
		var result = document.getElementById("myresult");
		result.style.display = "block";

		var img = document.querySelector(".carousel-item.active > img");
		var lens = document.querySelector(
			".carousel-item.active > .img-zoom-lens"
		);
		lens.style.display = "block";

		var cx, cy;

		/*calculate the ratio between result DIV and lens:*/
		cx = result.offsetWidth / lens.offsetWidth;
		cy = result.offsetHeight / lens.offsetHeight;
		/*set background properties for the result DIV:*/

		// Test
		// img.width = img.height;
		// Test

		result.style.backgroundImage = "url('" + img.src + "')";
		result.style.backgroundSize =
			img.width * cx + "px " + img.height * cy + "px";

		var x, y;
		event.preventDefault();

		var a,
			x_cur = 0,
			y_cur = 0;

		/*get the x and y positions of the image:*/
		a = img.getBoundingClientRect();
		/*calculate the cursor's x and y coordinates, relative to the image:*/
		x_cur = event.pageX - a.left;
		y_cur = event.pageY - a.top;
		/*consider any page scrolling:*/
		x_cur = x_cur - window.pageXOffset;
		y_cur = y_cur - window.pageYOffset;

		x = x_cur - lens.offsetWidth / 2;
		y = y_cur - lens.offsetHeight / 2;
		if (x > img.width - lens.offsetWidth) {
			x = img.width - lens.offsetWidth;
		}
		if (x < 0) {
			x = 0;
		}
		if (y > img.height - lens.offsetHeight) {
			y = img.height - lens.offsetHeight;
		}
		if (y < 0) {
			y = 0;
		}
		/*set the position of the lens:*/
		lens.style.left = x + "px";
		lens.style.top = y + "px";
		/*display what the lens "sees":*/
		result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
	}
	useEffect(() => {
		var img = document.querySelectorAll(".carousel-item > img");
		// var result = document.getElementById("myresult");
		for (let index = 0; index < img.length; index++) {
			const element = img[index];
			// lens = document.querySelector('.img-zoom-lens');
			var newLen = document.createElement("DIV");
			newLen.setAttribute("class", "img-zoom-lens");
			/*insert lens:*/
			element.parentElement.insertBefore(newLen, element);
			newLen.addEventListener("mousemove", moveLens);
		}

		img = document.querySelector(".carousel-item.active > img");
	}, []);
	return (
		<>
			<div className="container">
				<div className="main pt-4 pb-4">
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
					<div className="pt-4 pb-4">
						<div className="bg-w border rounded">
							<div className="row">
								<div
									className="col-6 p-3 position-relative"
									style={{ height: "86vh" }}
								>
									{/* <!-- Carousel wrapper --> */}
									<div
										id="carouselExampleIndicators"
										className="carousel slide carousel-fade"
										data-mdb-ride="carousel"
									>
										{/* <!-- Slides --> */}
										<div
											className="carousel-inner mb-5"
											style={{
												width: "70%",
												margin: "0 auto",
											}}
										>
											<div
												className={`${styles["img-large"]} carousel-item active`}
											>
												<img
													src="https://cdn.tgdd.vn/Products/Images/7264/209249/nakzen-sl4043grebn-7n0-nam-01.jpg"
													className="d-block"
													alt="..."
													  onMouseMove={(e)=>moveLens(e)}
													  onMouseOut={()=>moveOutZoomImage()}
												/>
											</div>
											<div
												className={`${styles["img-large"]} carousel-item`}
											>
												<img
													src="https://cdn.tgdd.vn/Products/Images/7264/231855/elio-el031-01-nu-3-org.jpg"
													className="d-block"
													alt="..."
													onMouseMove={(e)=>moveLens(e)}
													  onMouseOut={()=>moveOutZoomImage()}
												/>
											</div>
											<div
												className={`${styles["img-large"]} carousel-item`}
											>
												<img
													src="https://cdn.vuanhwatch.com/media/4c2ede6a6e63bf3de67217.jpg"
													className="d-block"
													alt="..."
													onMouseMove={(e)=>moveLens(e)}
													  onMouseOut={()=>moveOutZoomImage()}
												/>
											</div>
										</div>
										{/* <!-- Slides -->
										<!-- Controls --> */}
										<button
											className="carousel-control-prev"
											style={{
												height: "32px",
												top: "50%",
											}}
											type="button"
											data-mdb-target="#carouselExampleIndicators"
											data-mdb-slide="prev"
										>
											<img
												className="rotate-180"
												src="../../../../assets/svg/arrow.svg"
												alt=""
											/>
										</button>
										<button
											className="carousel-control-next"
											style={{
												height: "32px",
												top: "50%",
											}}
											type="button"
											data-mdb-target="#carouselExampleIndicators"
											data-mdb-slide="next"
										>
											<img
												src="../../../../assets/svg/arrow.svg"
												alt=""
											/>
										</button>
										{/* <!-- Controls -->
  
										<!-- Thumbnails --> */}
										<div
											className="carousel-indicators"
											style={{
												top: "100%",
												bottom: "auto",
											}}
										>
											<button
												type="button"
												data-mdb-target="#carouselExampleIndicators"
												data-mdb-slide-to="0"
												className={`${styles["img-sub"]} border rounded active`}
												aria-current="true"
												aria-label="Slide 1"
											>
												<img
													className="d-block img-fluid"
													src="https://cdn.tgdd.vn/Products/Images/7264/209249/nakzen-sl4043grebn-7n0-nam-01.jpg"
													alt=""
												/>
											</button>
											<button
												type="button"
												data-mdb-target="#carouselExampleIndicators"
												data-mdb-slide-to="1"
												className={`${styles["img-sub"]} border rounded`}
												aria-label="Slide 2"
											>
												<img
													className="d-block img-fluid"
													src="https://cdn.tgdd.vn/Products/Images/7264/231855/elio-el031-01-nu-3-org.jpg"
													alt=""
												/>
											</button>
											<button
												type="button"
												data-mdb-target="#carouselExampleIndicators"
												data-mdb-slide-to="2"
												aria-label="Slide 3"
												className={`${styles["img-sub"]} border rounded`}
											>
												<img
													className="d-block img-fluid"
													src="https://cdn.vuanhwatch.com/media/4c2ede6a6e63bf3de67217.jpg"
													alt=""
												/>
											</button>
										</div>
										{/* <!-- Thumbnails --> */}
									</div>
									<div
										id="myresult"
										className="img-zoom-result position-absolute"
									></div>
								</div>
								<div className="col-6 p-3">
									<div className={`${styles["about"]}`}>
										<div className={`${styles["status"]}`}>
											<img
												src="../../../../assets/svg/check.svg"
												alt=""
											/>
											<span>In Stock</span>
										</div>
										<div
											className={`${styles["product-name"]}`}
										>
											Mens Long Sleeve T-shirt Cotton Base
											Layer Slim Muscle
										</div>
										<div className="product-about mt-3 mb-3">
											<div className="product-about d-flex">
												<div className="product-star d-flex">
													<div className="svg-star d-flex align-items-center">
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
													<div
														className={`${styles["product-point"]}`}
													>
														7.5
													</div>
												</div>
												<div
													className={`${styles["product-sale"]}`}
												>
													<span>•</span>
													<span>154 orders</span>
												</div>
											</div>
										</div>
										<div
											className={`${styles["product-list-box"]}`}
										>
											<div
												className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3`}
											>
												<span>20cm-30cm-50cm</span>
												<div
													className={`${styles["price"]} text-center`}
												>
													<span>$98.00</span>
													<span>$98.00</span>
												</div>
											</div>
											<div
												className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3`}
											>
												<span>20cm-30cm-50cm</span>
												<div
													className={`${styles["price"]} text-center`}
												>
													<span>$98.00</span>
													<span>$98.00</span>
												</div>
											</div>
											<div
												className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3`}
											>
												<span>20cm-30cm-50cm</span>
												<div
													className={`${styles["price"]} text-center`}
												>
													<span>$98.00</span>
													<span>$98.00</span>
												</div>
											</div>
											<div
												className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3`}
											>
												<span>20cm-30cm-50cm</span>
												<div
													className={`${styles["price"]} text-center`}
												>
													<span>$98.00</span>
													<span>$98.00</span>
												</div>
											</div>
										</div>
										<div
											className={`${styles["product-qty"]}`}
										>
											<label for="" className="mr-3">
												Qty:
											</label>
											<input
												type="text"
												className="rounded border pl-2 pr-2 pt-1 pb-1"
												value="1"
											/>
										</div>
										<div
											className={`${styles["product-action"]} d-flex align-items-center mt-3 justify-content-between`}
										>
											<div
												className={`${styles["product-favorite"]} ${styles["active"]} mr-3`}
											>
												<button>
													<svg
														className="star btn"
														data-src="../../../../assets/svg/heart.svg"
													></svg>
												</button>
											</div>
											<button className="btn btn-outline-primary pr-5 pl-5 mr-3">
												Add to Cart
											</button>
											<button className="btn btn-primary pr-5 pl-5">
												Buy Now
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-4 pb-4">
						<div className="bg-w border p-4 rounded">
							<div className="about">
								<div
									className={`${styles["title"]} d-flex align-items-center mb-3`}
								>
									<h3>Now Voucher</h3>
									<span className="ml-3">Click to save</span>
								</div>
								<div
									className={`${styles["product-list-box"]}`}
								>
									<div
										className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
									>
										<span>Freeship for order 30$ up</span>
										<div
											className={`${styles["price"]} text-center`}
										>
											<span>30%</span>
											<span></span>
										</div>
									</div>
									<div
										className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
									>
										<span>Freeship for order 30$ up</span>
										<div
											className={`${styles["price"]} text-center`}
										>
											<span>30%</span>
											<span></span>
										</div>
									</div>
									<div
										className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
									>
										<span>Freeship for order 30$ up</span>
										<div
											className={`${styles["price"]} text-center`}
										>
											<span>30%</span>
											<span></span>
										</div>
									</div>
									<div
										className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
									>
										<span>Freeship for order 30$ up</span>
										<div
											className={`${styles["price"]} text-center`}
										>
											<span>30%</span>
											<span></span>
										</div>
									</div>
									<div
										className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
									>
										<span>Freeship for order 30$ up</span>
										<div
											className={`${styles["price"]} text-center`}
										>
											<span>30%</span>
											<span></span>
										</div>
									</div>
									<div
										className={`${styles["link-box"]} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
									>
										<span>Freeship for order 30$ up</span>
										<div
											className={`${styles["price"]} text-center`}
										>
											<span>30%</span>
											<span></span>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-center">
									<button className="btn btn-outline-primary p-5 pt-2 pb-2">
										See all
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-4 pb-4">
						<div className="bg-w border rounded">
							{/* <!-- review-active --> */}
							<div
								className={`${styles["detail-product"]} ${styles["description-active"]} pl-3 pr-3 pt-2`}
							>
								<div
									className={`${styles["detail-product-navbar"]} d-flex`}
								>
									<div className="p-5 pt-2 pb-2">
										<span>Description</span>
									</div>
									<div className="p-5 pt-2 pb-2">
										<span>Review</span>
									</div>
								</div>
							</div>
							<div className="line"></div>
							<div
								className={`${styles["description-content"]} p-3`}
							>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam,
								</p>
								<p>
									Quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat.
									Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore eu fugiat
									nulla pariatur.
								</p>
								<div className="d-flex justify-content-center">
									<button className="btn btn-outline-primary p-5 pt-2 pb-2">
										See all
									</button>
								</div>
							</div>
							<div className={`${"review"} p-4 pt-3 pb-3`}>
								<div className={`${styles["review-list"]}`}>
									<div
										className={`${styles["review-item"]} pb-3`}
									>
										<div
											className={`${styles["review-info"]} d-flex`}
										>
											<span
												className={`${styles["review-name"]}`}
											>
												Nguyen A
											</span>
											<span
												className={`${styles["review-type"]}`}
											>
												20cm-30cm-50cm x 2
											</span>
											<div className="product-star d-flex">
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
											</div>
										</div>
										<div
											className={`${styles["review-content"]} mt-2 pb-3`}
										>
											Nai sừ
										</div>
										<div className="line"></div>
									</div>
									<div className="d-flex justify-content-center">
										<button className="btn btn-outline-primary p-5 pt-2 pb-2">
											See more
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`${styles["recomment"]} p-4 bg-w rounded border`}
					>
						<div className="title par-line-2">
							<h5>Favorite</h5>
						</div>
						<div className="row">
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="w-100"></div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className={`${styles["col"]} col`}>
								<a href="/">
									<div
										className={`${styles["recomment-item"]} p-3`}
									>
										<div
											className={`${styles["recomment-item-img"]}`}
										>
											<div
												className="background-img pt-100p"
												style={{
													backgroundImage:
														"url('../../../../assets/image/clock.png')",
												}}
											></div>
										</div>
										<div
											className={`${styles["recomment-item-content"]}`}
										>
											<div className={`${"price"}`}>
												$10.30
											</div>
											<div
												className={`${styles["name"]} overflow-hidden mt-1`}
											>
												<h5 className="par-line-2">
													T-shirts with multiple
													colors, for men
												</h5>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="d-flex justify-content-center mt-4">
							<button className="btn btn-outline-primary p-5 pt-2 pb-2">
								See more
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Product;
