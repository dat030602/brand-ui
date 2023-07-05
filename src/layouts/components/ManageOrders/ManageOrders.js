import React from "react";

import styles from "./ManageOrders.module.scss";

function ManageOrders({ children }) {
	return (
		<>
			<nav className={`${styles["side-menu"]} bg-w border`}>
				<div
					className={`${styles["box-user"]} d-flex align-items-center pl-4 pt-4`}
				>
					<div className={`${styles["box-image"]} pr-3`}>
						<img
							src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
							alt=""
						/>
					</div>

					<div
						className={`${styles["user-name"]} d-flex flex-column`}
					>
						<span className="text-bold-normal">Gavano</span>
						<span className="text-gray">Admin</span>
					</div>
				</div>
				<div className={`${styles["list-box"]} mt-4 mb-2`}>
					<a
						href="/dashboard"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/Dashboard.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Dashboard
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="/manage-products"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/product.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Products
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="/manage-customers"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/Customer.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Customers
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="#"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center ${styles["active"]}`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/order.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Orders
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="/manage-vouchers"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/voucher.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Vouchers
						</div>
						<div className="box-rectangle"></div>
					</a>
				</div>
				<div className="line"></div>
				<div className={`${"list-box"} mt-2`}>
					<a
						href="/"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/setting.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Settings
						</div>
						<div className="box-rectangle"></div>
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="main pt-4 pb-4">
					<div className="pl-3 pr-3">
						<div className="bg-w border rounded">
							<div className="p-3">
								<div className="header d-flex align-items-center justify-content-between">
									<div className="title">
										<h5>Orders (3)</h5>
									</div>
								</div>
								<section className="ftco-section">
									<div className="container">
										<div className="row">
											<div className="col-md-12">
												<div className="table-wrap">
													<table className="table">
														<thead className="thead-primary">
															<tr>
																<th className="text-center">
																	Id order
																</th>
																<th className="text-center">
																	Date
																</th>
																<th className="text-center">
																	Shipping
																	address
																</th>
																<th className="text-center">
																	Status
																</th>
																<th className="text-center">
																	Actions
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td className="">
																	<p className="par-line-1 text-center">
																		ID0010101
																	</p>
																</td>
																<td className="text-center">
																	<div className="overflow-hidden">
																		<p className="text-center">
																			16/12/2018
																		</p>
																	</div>
																</td>
																<td className="text-center">
																	<div className="overflow-hidden">
																		<p className="text-center">
																			3601
																			Old
																			Capitol
																			Trail,
																			Unit
																			A-7,
																			Suite
																			170777,
																			Wilmington,
																			DE
																			19808
																		</p>
																	</div>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		Wait for
																		confirmation
																	</p>
																</td>
																<td className="tier d-flex justify-content-center">
																	<button
																		className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-detail"
																		data-toggle="modal"
																		data-target="#orderDetailModal"
																	>
																		Detail
																	</button>
																	<button
																		className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
																		data-toggle="modal"
																		data-target="#deleteOrderModal"
																	>
																		Cancel
																	</button>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="orderDetailModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="orderDetailModalTitle"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-scrollable"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="orderDetailModalTitle"
							>
								Iphone 12
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="box-item mb-4">
								<div className="border rounded p-3 pt-3">
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<div>
												<span>Order ID:</span>
												<span className="ml-1">
													8924
												</span>
												<span className="ml-1 mr-1">
													•
												</span>
												<span className="text-green text-bold-normal">
													Confirm
												</span>
											</div>
											<div className="d-flex">
												<span className="text-gray">
													Date:
												</span>
												<span className="ml-1 text-bold-normal">
													16 December 2018
												</span>
											</div>
										</div>
									</div>
									<div className="line mt-3 mb-3"></div>
									<div>
										<div className="d-flex">
											<span className="text-gray">
												Shipping address:
											</span>
											<span className="text-bold-normal ml-1">
												3601 Old Capitol Trail, Unit
												A-7, Suite 170777, Wilmington,
												DE 19808
											</span>
										</div>
										<div className="d-flex">
											<span className="text-gray">
												Payment:
											</span>
											<span className="text-green pl-1 text-bold-normal">
												Visa **** 4216
											</span>
										</div>
										<div className="d-flex">
											<span className="text-gray">
												Shipping fee:
											</span>
											<span className="text-green pl-1 text-bold-normal">
												$56
											</span>
										</div>
										<div className="d-flex">
											<span className="text-gray">
												Total paid:
											</span>
											<span className="text-green pl-1 text-bold-normal">
												$456
											</span>
										</div>
									</div>
									<div className="line mt-3 mb-3"></div>
									<div className="list-products">
										<a
											href="/"
											className="product-item mb-2"
										>
											<div className="row">
												<div className="col-3 border rounded p-2 d-flex align-items-center">
													<img
														src="../../../../assets/image/clock.png"
														alt=""
														className="img-fluid max-width"
													/>
												</div>
												<div className="col-7 pl-3 pr-3">
													<div className="box-title">
														<h5>
															T-shirts with
															multiple colors, for
															men and lady
														</h5>
													</div>
													<div className="box-description">
														<span className="text-gray">
															Size: medium, Color:
															blue, Material:
															Plastic
														</span>
													</div>
													<div className="box-description">
														<span className="text-gray">
															x2
														</span>
													</div>
												</div>
												<div className="col-2">
													<div className="d-flex flex-column align-items-end">
														<span>$98.00</span>
													</div>
												</div>
											</div>{" "}
										</a>
										<a
											href="/"
											className="product-item mb-2"
										>
											<div className="row">
												<div className="col-3 border rounded p-2 d-flex align-items-center">
													<img
														src="../../../../assets/image/clock.png"
														alt=""
														className="img-fluid max-width"
													/>
												</div>
												<div className="col-7 pl-3 pr-3">
													<div className="box-title">
														<h5>
															T-shirts with
															multiple colors, for
															men and lady
														</h5>
													</div>
													<div className="box-description">
														<span className="text-gray">
															Size: medium, Color:
															blue, Material:
															Plastic
														</span>
													</div>
													<div className="box-description">
														<span className="text-gray">
															x2
														</span>
													</div>
												</div>
												<div className="col-2">
													<div className="d-flex flex-column align-items-end">
														<span>$98.00</span>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Accept
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="deleteOrderModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="deleteOrderModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="deleteOrderModalLabel"
							>
								Cancel order: ID010101
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							Are you sure about that?
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ManageOrders;
