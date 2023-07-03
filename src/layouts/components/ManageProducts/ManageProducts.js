import React from "react";

import styles from "./ManageProducts.module.scss";

function ManageProducts({ children }) {
	return (
		<>
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
																<td className={`${styles["tier"]} d-flex justify-content-center`}>
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
				tabindex="-1"
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
									Quantity in stock:
								</span>
								<span>12</span>
							</div>
							<div className="row list-image">
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
				tabindex="-1"
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
								/>
								<div className="mt-2">
									<button className="btn btn-primary mr-2">
										Check
									</button>
									<div className="d-inline-block">
										<svg
											className="text-green mr-2"
											data-src="../../../../assets/svg/check.svg"
										></svg>
										<span className="text-green">Done</span>
									</div>
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
								>
									{" "}
								</textarea>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Category</p>
								<select className="border text-primary p-1">
									<option value="Male">Phone</option>
									<option value="Female">All</option>
								</select>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Quantity in stock
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
				id="editProductModal"
				tabindex="-1"
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
								>
									Apple iPhone 12 is the bigger version of the
									regular iPhone 12 mini. The handset's
									hardware include a 6.1-inch OLED display,
									5nm Apple A14 Bionic processor, and a
									dual-camera setup with a large sensor. 5G
									and Face ID are on board, too. The Apple
									iPhone 12 starting price is $829.
								</textarea>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Category</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="Phone"
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
				id="deleteProductModal"
				tabindex="-1"
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
