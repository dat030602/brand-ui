import React from "react";

import "./HotOffers.scss";

function HotOffers({ children }) {
	return (
		<>
			<div className="container">
				<div className="main pt-4 pb-4">
					<div className="row pb-4">
						<div className="header-products bg-w d-flex pt-2 pb-2 pl-3 pr-3 mb-3 rounded border">
							<div className="about">
								12,911 items in <strong>Offers</strong>
							</div>
							<div className="grid-products d-flex border rounded"></div>
						</div>
						<div className="products">
							<div className="products-item">
								<div className="product row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3">
									<div className="product-image">
										<div
											className="background-img pt-100p"
											style={{backgroundImage: "url('../../../../assets/image/clock.png')"}}
										></div>
									</div>
									<div className="product-content p-3 d-flex">
										<div className="product-content-cover mb-2">
											<div className="product-name par-line-2">
												Free ship
											</div>
											<div className="product-name par-line-2">
												Expiration date: 12/12/2023
											</div>
											<div className="product-description mt-2 mb-2 overflow-hidden">
												<span className="par-line-2">
													Code : EYQX13A{" "}
												</span>
											</div>
											<div className="product-description mt-2 mb-2 overflow-hidden">
												<span className="par-line-2">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit, sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua
												</span>
											</div>
											<div className="product-details">
												<a href="/">View details</a>
											</div>
										</div>
										<div className="">
											<button className="btn btn-outline-warning p-4 pt-2 pb-2 ml-2">
												Save
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="products-item">
								<div className="product row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3">
									<div className="product-image">
										<div
											className="background-img pt-100p"
											style={{backgroundImage: "url('../../../../assets/image/clock.png')"}}
										></div>
									</div>
									<div className="product-content p-3 d-flex">
										<div className="product-content-cover mb-2">
											<div className="product-name par-line-2">
												Free ship
											</div>
											<div className="product-name par-line-2">
												Expiration date: 12/12/2023
											</div>
											<div className="product-description mt-2 mb-2 overflow-hidden">
												<span className="par-line-2">
													Code : EYQX13A{" "}
												</span>
											</div>
											<div className="product-description mt-2 mb-2 overflow-hidden">
												<span className="par-line-2">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit, sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua
												</span>
											</div>
											<div className="product-details">
												<a href="/">View details</a>
											</div>
										</div>
										<div className="">
											<button className="btn btn-outline-warning p-4 pt-2 pb-2 ml-2">
												Save
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="products-item">
								<div className="product row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3">
									<div className="product-image">
										<div
											className="background-img pt-100p"
											style={{backgroundImage: "url('../../../../assets/image/clock.png')"}}
										></div>
									</div>
									<div className="product-content p-3 d-flex">
										<div className="product-content-cover mb-2">
											<div className="product-name par-line-2">
												Free ship
											</div>
											<div className="product-name par-line-2">
												Expiration date: 12/12/2023
											</div>
											<div className="product-description mt-2 mb-2 overflow-hidden">
												<span className="par-line-2">
													Code : EYQX13A{" "}
												</span>
											</div>
											<div className="product-description mt-2 mb-2 overflow-hidden">
												<span className="par-line-2">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit, sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua
												</span>
											</div>
											<div className="product-details">
												<a href="/">View details</a>
											</div>
										</div>
										<div className="">
											<button className="btn btn-outline-warning p-4 pt-2 pb-2 ml-2">
												Save
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<nav>
								<ul className="pagination">
									<li className="page-item">
										<a
											className="page-link"
											href="#"
											aria-label="Previous"
										>
											<span aria-hidden="true">
												&laquo;
											</span>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a
											className="page-link"
											href="#"
											aria-label="Next"
										>
											<span aria-hidden="true">
												&raquo;
											</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default HotOffers;
