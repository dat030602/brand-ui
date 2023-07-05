import React from "react";

import styles from "./ManageCustomers.module.scss";

function ManageCustomers({ children }) {
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
						href="#"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center ${styles["active"]}`}
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
									<div className={`${styles["title"]}`}>
										<h5>Customers (3)</h5>
									</div>
									<button
										className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-add"
										data-toggle="modal"
										data-target="#addCustomerModal"
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
																	Customer
																	Name
																</th>
																<th className="text-center">
																	Email
																</th>
																<th className="text-center">
																	Phone number
																</th>
																<th className="text-center">
																	Date of
																	birth
																</th>
																<th className="text-center">
																	Sex
																</th>
																<th className="text-center">
																	Membership
																	tiers
																</th>
																<th className="text-center">
																	Actions
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td className="">
																	Justin
																	Lipshutz
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		nhom123@gmail.com
																	</p>
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		0912222222
																	</p>
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		22/12/2002
																	</p>
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		Male
																	</p>
																</td>
																<td
																	className={`${styles["tier"]}`}
																>
																	<div className="d-flex justify-content-center">
																		<div
																			className={`${styles["bronze-tier"]} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
																		>
																			Bronze
																		</div>
																		<div
																			className={`${styles["bronze-tier"]} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
																		>
																			123
																		</div>
																	</div>
																</td>
																<td className="">
																	<div
																		className={`${styles["tier"]} d-flex justify-content-center`}
																	>
																		<button
																			className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
																			data-toggle="modal"
																			data-target="#editCustomerModal"
																		>
																			Edit
																		</button>
																		<button
																			className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
																			data-toggle="modal"
																			data-target="#deleteCustomerModal"
																		>
																			Delete
																		</button>
																	</div>
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
				id="addCustomerModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="addCustomerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="addCustomerModalLabel"
							>
								Edit: Justin Lipshutz
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
								<p className="text-bold-normal">
									Customer Name
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Email</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Phone number</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Date of birth
								</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Sex</p>
								<select className="border text-primary p-1">
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Membership tiers
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Image</p>
								<input
									type="file"
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
				id="editCustomerModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="editCustomerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="editCustomerModalLabel"
							>
								Edit: Justin Lipshutz
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
								<p className="text-bold-normal">
									Customer Name
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="Justin Lipshutz"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Email</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="nhom123@gmail.com"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Phone number</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Date of birth
								</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Sex</p>
								<select className="border text-primary p-1">
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Membership tiers
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="123"
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
				id="deleteCustomerModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="deleteCustomerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="deleteCustomerModalLabel"
							>
								Delete: Justin Lipshutz
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
export default ManageCustomers;
