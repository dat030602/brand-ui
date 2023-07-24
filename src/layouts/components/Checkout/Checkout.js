import React from "react";

import styles from "./Checkout.module.scss";

function Checkout({ children }) {
	return (
		<>
			<div className="container">
				<div className="main pb-4">
					<div className="pt-4 pb-4">
						<div className={`${styles["title"]} mb-3`}>
							<h3>My Cart (3)</h3>
						</div>
						<div className="row">
							<div className="col-9 pr-3">
								<div className="bg-w border rounded">
									<div className="list-box">
										<div className={`${styles["box-item"]} p-3`}>
											<div className="row">
												<div className="col-2">
													<img
														src="../../../../assets/image/clock.png"
														alt=""
													/>
												</div>
												<div className="col-8 pl-3 pr-3">
													<div
														className={`${styles["box-title"]}`}
													>
														<h5>
															T-shirts with
															multiple colors, for
															men and lady
														</h5>
													</div>
													<div
														className={`${styles["box-description"]}`}
													>
														<span>
															Size: medium, Color:
															blue, Material:
															Plastic
														</span>
													</div>
													<button className="btn btn-outline-danger p-3 pt-2 pb-2 mt-3">
														Remove
													</button>
												</div>
												<div className="col-2">
													<div
														className={`${styles["price"]}`}
													>
														<span>$98.00</span>
														<span>$98.00</span>
													</div>
													<div
														className={`${styles["input-qty"]} d-flex align-items-center`}
													>
														<label
															htmlFor=""
															className="pr-2"
														>
															Qty:
														</label>
														<input
															type="number"
															className="border rounded p-2 pt-1 pb-1"
														/>
													</div>
												</div>
											</div>
											<div className="line"></div>
										</div><div className={`${styles["box-item"]} p-3`}>
											<div className="row">
												<div className="col-2">
													<img
														src="../../../../assets/image/clock.png"
														alt=""
													/>
												</div>
												<div className="col-8 pl-3 pr-3">
													<div
														className={`${styles["box-title"]}`}
													>
														<h5>
															T-shirts with
															multiple colors, for
															men and lady
														</h5>
													</div>
													<div
														className={`${styles["box-description"]}`}
													>
														<span>
															Size: medium, Color:
															blue, Material:
															Plastic
														</span>
													</div>
													<button className="btn btn-outline-danger p-3 pt-2 pb-2 mt-3">
														Remove
													</button>
												</div>
												<div className="col-2">
													<div
														className={`${styles["price"]}`}
													>
														<span>$98.00</span>
														<span>$98.00</span>
													</div>
													<div
														className={`${styles["input-qty"]} d-flex align-items-center`}
													>
														<label
															htmlFor=""
															className="pr-2"
														>
															Qty:
														</label>
														<input
															type="number"
															className="border rounded p-2 pt-1 pb-1"
														/>
													</div>
												</div>
											</div>
											<div className="line"></div>
										</div>
									</div>
									<div className="d-flex justify-content-between pr-3 pl-3 pb-3">
										<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
											<svg
												className="left mr-2"
												data-src="../../../../assets/svg/arrow1.svg"
											></svg>
											Back to Home
										</button>
										<button className="btn btn-outline-primary p-2 d-flex align-items-center">
											Remove all
										</button>
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="d-inline-block col-12">
									<div className="bg-w border rounded p-4 pr-3 pl-3">
										<div className="title-sm">
											Have a coupon?
										</div>
										<div className="list-box">
											<div className="box-item">
												<div
													className={`${styles["input-box-item"]} d-flex col-12 mt-2`}
												>
													<input
														type="text"
														placeholder="Add coupon"
														className="border rounded p-2 pt-1 pb-1"
													/>
													<div className="pl-3">
														<button className="btn border">
															Apply
														</button>
													</div>
												</div>
												<div
													className={`${styles["input-box-item"]} d-flex col-12 mt-2`}
												>
													<input
														type="text"
														value="Freeship for order 50$..."
														className="border rounded p-2 pt-1 pb-1"
														title="Freeship for order 50$..."
													/>
													<div className="pl-3">
														<button className="btn border">
															Apply
														</button>
													</div>
												</div>
												<div
													className={`${styles["input-box-item"]} d-flex col-12 mt-2`}
												>
													<input
														type="text"
														value="Freeship for order 50$..."
														className="border rounded p-2 pt-1 pb-1"
														title="Freeship for order 50$..."
													/>
													<div className="pl-3">
														<button className="btn border">
															Apply
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-inline-block col-12 mt-3">
									<div className="bg-w border rounded p-4 pr-3 pl-3">
										<div className="title-sm">
											Use gift point? (2000 point)
										</div>
										<div className="list-box">
											<div
												className={`${styles["input-box-item"]} d-flex col-12 mt-2`}
											>
												<input
													type="text"
													value="2000"
													className="border rounded p-2 pt-1 pb-1"
												/>
												<div className="pl-3">
													<button className="btn border">
														Apply
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-inline-block col-12 mt-3">
									<div className="bg-w border rounded p-4 pr-3 pl-3">
										<div
											className={`${styles["subtract"]} d-flex justify-content-between `}
										>
											<span>Discount:</span>
											<span>- $60.00</span>
										</div>
										<div
											className={`${styles["plus"]} d-flex justify-content-between `}
										>
											<span>Tax:</span>
											<span>+ $60.00</span>
										</div>
										<div className="d-flex justify-content-between text-end">
											<span></span>
											<span>$60.00</span>
										</div>
										<div className="d-flex justify-content-between">
											<span>Gift Point:</span>
											<span>- $60.00</span>
										</div>
										<div className="line mt-3 mb-3"></div>
										<div className="d-flex justify-content-between">
											<span>
												<strong>Total:</strong>
											</span>
											<span>
												<strong>$60.00</strong>
											</span>
										</div>
										<div className="d-flex justify-content-center mt-3">
											<button className="btn btn-success p-5 pt-2 pb-2">
												Checkout
											</button>
										</div>
										<div
											className={`${styles["logo-bank"]} d-flex justify-content-center mt-3`}
										>
											<div
												className={`${styles["active"]} border rounded p-1 `}
											>
												<img
													src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
													alt=""
												/>
											</div>
											<div className="border rounded p-1 ml-3">
												<img
													src="https://play-lh.googleusercontent.com/NfFBz1Rxk0nQ7RsOk0kXbi1AEp1ZJ3rzJHbwRlmheZEDPPHh7dscqyxyX-ehxTl7tw"
													alt=""
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`${styles["recomment"]} p-4 bg-w rounded border`}
					>
						<div className={`${styles["title"]} par-line-2`}>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
											<div className="mt-4">
												<button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
													<svg
														className=""
														data-src="../../../../assets/svg/cart.svg"
													></svg>
													Move to Cart
												</button>
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
export default Checkout;
