import React from "react";

import styles from "./ManageVouchers.module.scss";

function ManageVouchers({ children }) {
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
						href="/manage-orders"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
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
						href="#"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center ${styles["active"]}`}
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
										<h5>Vouchers (3)</h5>
									</div>
									<button
										className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal sliver-tier btn-add"
										data-toggle="modal"
										data-target="#addVoucherModal"
									>
										Add
									</button>
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
																	Voucher Name
																</th>
																<th className="text-center">
																	Discount
																</th>
																<th className="text-center">
																	Min price
																	cart
																</th>
																<th className="text-center">
																	Max discount
																</th>
																<th className="text-center">
																	Start Date
																</th>
																<th className="text-center">
																	End Date
																</th>
																<th className="text-center">
																	Actions
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td className="">
																	<p className="par-line-1">
																		Free
																		ship
																	</p>
																</td>
																<td className="text-center">
																	<div className="overflow-hidden">
																		<p className="par-line-1 text-center">
																			30%
																		</p>
																	</div>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		20$
																	</p>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		2$
																	</p>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		21/2/2023
																	</p>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		21/3/2023
																	</p>
																</td>
																<td className="tier d-flex justify-content-center">
																	<button
																		className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
																		data-toggle="modal"
																		data-target="#editVoucherModal"
																	>
																		Edit
																	</button>
																	<button
																		className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
																		data-toggle="modal"
																		data-target="#deleteVoucherModal"
																	>
																		Delete
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
				id="addVoucherModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="addVoucherModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="addVoucherModalLabel"
							>
								Add voucher
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
							<div className="modal-text">
								<p className="text-bold-normal">Voucher Name</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Discount</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Min price cart
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Max discount</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Start Date</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">End Date</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
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
							<button type="button" className="btn btn-success">
								Finish
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="editVoucherModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="editVoucherModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="editVoucherModalLabel"
							>
								Edit voucher: Free ship
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
							<div className="modal-text">
								<p className="text-bold-normal">Voucher Name</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Discount</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Min price cart
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Max discount</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Start Date</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">End Date</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
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
							<button type="button" className="btn btn-success">
								Finish
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="deleteVoucherModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="deleteVoucherModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="deleteVoucherModalLabel"
							>
								Delete voucher: Free ship
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
								Delete
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
export default ManageVouchers;
