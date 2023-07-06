import React, { Fragment, useEffect, useState } from "react";

import styles from "./ManageProducts.module.scss";

function ManageProducts({ children }) {
	const ElementAddDetailProduct = () => {
		return (
			<Fragment>
				<div className="line mt-4 mb-4"></div>
				<div className="modal-text pl-4">
					<div className="modal-text">
						<p className="text-bold-normal">Name</p>
						<input type="text" className="border p-1 pr-2 pl-2" />
					</div>
					<div className="modal-text">
						<p className="text-bold-normal">Quantity in stock</p>
						<input type="text" className="border p-1 pr-2 pl-2" />
					</div>
					<div className="modal-text">
						<p className="text-bold-normal">Image</p>
						<input type="file" className="border p-1 pr-2 pl-2" />
					</div>
				</div>
			</Fragment>
		);
	};

	const [AddDetailProduct, SetAddDetailProduct] = useState([
		<Fragment key={0}>
			<div className="line mt-4 mb-4"></div>
			<div className="modal-text pl-4">
				<div className="modal-text">
					<p className="text-bold-normal">Name</p>
					<input type="text" className="border p-1 pr-2 pl-2" />
				</div>
				<div className="modal-text">
					<p className="text-bold-normal">Quantity in stock</p>
					<input type="text" className="border p-1 pr-2 pl-2" />
				</div>
				<div className="modal-text">
					<p className="text-bold-normal">Image</p>
					<input type="file" className="border p-1 pr-2 pl-2" />
				</div>
			</div>
		</Fragment>,
	]);
	const handleOnClickAddDetailProduct = () => {
		SetAddDetailProduct(
			AddDetailProduct.concat(
				<ElementAddDetailProduct key={AddDetailProduct.length} />
			)
		);
	};
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
						href="#"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center ${styles["active"]}`}
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
								<div
									className={`${styles["header"]} d-flex align-items-center justify-content-between`}
								>
									<div className="title">
										<h5>Products (3)</h5>
									</div>
									<button
										className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal sliver-tier btn-add"
										data-toggle="modal"
										data-target="#addProductModal"
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
																	Product Name
																</th>
																<th className="text-center">
																	Description
																</th>
																<th className="text-center">
																	Category
																</th>
																<th className="text-center">
																	Quantity in
																	stock
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
																		iPhone
																		12
																	</p>
																</td>
																<td className="text-center">
																	<div className="overflow-hidden">
																		<p className="par-line-1 text-center">
																			Apple
																			iPhone
																			12
																			is
																			the
																			bigger
																			version
																			of
																			the
																			regular
																			iPhone
																			12
																			mini.
																			The
																			handset's
																			hardware
																			include
																			a
																			6.1-inch
																			OLED
																			display,
																			5nm
																			Apple
																			A14
																			Bionic
																			processor,
																			and
																			a
																			dual-camera
																			setup
																			with
																			a
																			large
																			sensor.
																			5G
																			and
																			Face
																			ID
																			are
																			on
																			board,
																			too.
																			The
																			Apple
																			iPhone
																			12
																			starting
																			price
																			is
																			$829.
																		</p>
																	</div>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		Phone
																	</p>
																</td>
																<td className="text-center">
																	<p className="par-line-1 text-center">
																		2
																	</p>
																</td>
																<td
																	className={`${styles["tier"]} d-flex justify-content-center`}
																>
																	<button
																		className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-detail"
																		data-toggle="modal"
																		data-target="#detailProductModal"
																	>
																		Detail
																	</button>
																	<button
																		className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
																		data-toggle="modal"
																		data-target="#editProductModal"
																	>
																		Edit
																	</button>
																	<button
																		className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
																		data-toggle="modal"
																		data-target="#deleteProductModal"
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
				id="detailProductModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="detailProductModalTitle"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="detailProductModalTitle"
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
							<div className="mb-3">
								<span className="mr-2 text-bold-normal">
									Product Name:
								</span>
								<span>iPhone 12</span>
							</div>
							<div className="mb-3">
								<span className="mr-2 text-bold-normal">
									Description:
								</span>
								<span>
									Apple iPhone 12 is the bigger version of the
									regular iPhone 12 mini. The handset's
									hardware include a 6.1-inch OLED display,
									5nm Apple A14 Bionic processor, and a
									dual-camera setup with a large sensor. 5G
									and Face ID are on board, too. The Apple
									iPhone 12 starting price is $829.
								</span>
							</div>
							<div className="mb-3">
								<span className="mr-2 text-bold-normal">
									Category:
								</span>
								<span>Phone</span>
							</div>
							<div className="mb-3">
								<span className="mr-2 text-bold-normal">
									Details:
								</span>
								<div className="mb-2 ml-4">
									<div className="">
										<span className="mr-2 text-bold-normal">
											Iphone 14 Pro Max
										</span>
									</div>
									<div className="ml-4">
										<span className="mr-2 text-bold-normal">
											Price:
										</span>
										<span>2.000$</span>
									</div>
									<div className="ml-4">
										<span className="mr-2 text-bold-normal">
											Quantity in stock:
										</span>
										<span>12</span>
									</div>
								</div>
								<div className="mb-2 ml-4">
									<div className="">
										<span className="mr-2 text-bold-normal">
											Iphone 14 Pro Max
										</span>
									</div>
									<div className="ml-4">
										<span className="mr-2 text-bold-normal">
											Price:
										</span>
										<span>2.000$</span>
									</div>
									<div className="ml-4">
										<span className="mr-2 text-bold-normal">
											Quantity in stock:
										</span>
										<span>12</span>
									</div>
								</div>
							</div>

							<div
								className={`${styles["manage"]} row list-image`}
							>
								<div className="col-2 border rounded overflow-hidden mr-2">
									<img
										src="../../../assets/image/clock.png"
										alt=""
									/>
								</div>
								<div className="col-2 border rounded overflow-hidden mr-2">
									<img
										src="../../../assets/image/clock.png"
										alt=""
									/>
								</div>
								<div className="col-2 border rounded overflow-hidden mr-2">
									<img
										src="../../../assets/image/clock.png"
										alt=""
									/>
								</div>
								<div className="col-2 border rounded overflow-hidden mr-2">
									<img
										src="../../../assets/image/clock.png"
										alt=""
									/>
								</div>
								<div className="col-2 border rounded overflow-hidden mr-2">
									<img
										src="../../../assets/image/clock.png"
										alt=""
									/>
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
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="addProductModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="addProductModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="addProductModalLabel"
							>
								Add product
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
									Product Id Root
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value={"312312"}
									disabled
								/>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
									<button
										type="button"
										className="btn btn-warning"
										onClick={handleOnClickAddDetailProduct}
									>
										Add
									</button>
									<button
										type="button"
										className="btn btn-success"
									>
										Finish
									</button>
								</div>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Product Name</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Description</p>
								<textarea
									name=""
									id=""
									className="border p-1 pr-2 pl-2"
									value={"INPUT"}
									onChange={() => {}}
								></textarea>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Category</p>
								<select className="border text-primary p-1">
									<option value="Male">Phone</option>
									<option value="Female">All</option>
								</select>
							</div>
							{AddDetailProduct}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-warning"
								onClick={handleOnClickAddDetailProduct}
							>
								Add
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
				id="editProductModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="editProductModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="editProductModalLabel"
							>
								Edit product: Iphone 12
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
								<p className="text-bold-normal">Product Name</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Description</p>
								<textarea
									name=""
									id=""
									className="border p-1 pr-2 pl-2"
									onChange={() => {}}
									value={`Apple iPhone 12 is the bigger version of the regular iPhone 12 mini. The handset's hardware include a 6.1-inch OLED display, 5nm Apple A14 Bionic processor, and a dual-camera setup with a large sensor. 5G and Face ID are on board, too. The Apple iPhone 12 starting price is $829.`}
								></textarea>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Category</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="Phone"
								/>
							</div>
							<div className="d-flex justify-content-end mt-2">
								<button
									type="button"
									className="btn btn-success pl-3 pr-3"
								>
									Edit
								</button>
							</div>
							<div className="line mt-3 mb-3"></div>
							<div className="modal-text">
								<div className="modal-text">
									<p className="text-bold-normal">
										Detail Product Name
									</p>
									<input
										type="text"
										className="border p-1 pr-2 pl-2"
										value="22"
									/>
								</div>
								<div className="modal-text pl-4">
									<div className="modal-text">
										<p className="text-bold-normal">
											Price
										</p>
										<input
											type="text"
											className="border p-1 pr-2 pl-2"
											value="22"
										/>
									</div>
									<div className="modal-text">
										<p className="text-bold-normal">
											Quantity in stock
										</p>
										<input
											type="text"
											className="border p-1 pr-2 pl-2"
											value="22"
										/>
									</div>
									<div className="modal-text">
										<p className="text-bold-normal">
											Image
										</p>
										<input
											type="file"
											className="border p-1 pr-2 pl-2"
										/>
									</div>
									<div className="d-flex justify-content-end mt-2">
										<button
											type="button"
											className="btn btn-success pl-3 pr-3"
										>
											Edit
										</button>
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
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="deleteProductModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="deleteProductModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="deleteProductModalLabel"
							>
								Delete product: Iphone 12
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
export default ManageProducts;
