import React from "react";

import styles from "./Dashboard.module.scss";
import { Image } from "~/components/Image";

function Dashboard({ children }) {
	return (
		<>
			<nav className={`${styles["side-menu"]} bg-w border`}>
				<div
					className={`${styles["box-user"]} d-flex align-items-center pl-4 pt-4`}
				>
					<div className={`${styles["box-image"]} pr-3`}>
						<Image
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
						href="#"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center ${styles["active"]}`}
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
						<div className="row">
							<div className={`${styles["col-3"]} col-3`}>
								<div className="bg-w rounded border p-3">
									<div
										className={`${styles["box-title"]} pb-2 d-flex align-items-center justify-content-between`}
									>
										<div>
											<h5>Total Customers</h5>
										</div>
										<div
											className={`${styles["box-img"]} d-flex align-items-center`}
										>
											<Image
												src="../../../assets/svg/stock-up.svg"
												alt=""
											/>
											<span
												className={`${styles["stock-up"]} ml-2`}
											>
												10.0%
											</span>
										</div>
									</div>
									<div
										className={`${styles["box-content"]} d-flex flex-column`}
									>
										<span
											className={`${"box-content-number"} text-bold-normal`}
										>
											856
										</span>
										<span
											className={`${styles["box-content-type"]} text-gray`}
										>
											Customer
										</span>
									</div>
								</div>
							</div>
							<div className={`${styles["col-3"]} col-3`}>
								<div className="bg-w rounded border p-3">
									<div
										className={`${styles["box-title"]} pb-2 d-flex align-items-center justify-content-between`}
									>
										<div>
											<h5>Total Products</h5>
										</div>
										<div
											className={`${styles["box-img"]}  d-flex align-items-center`}
										>
											<Image
												src="../../../assets/svg/stock-up.svg"
												alt=""
											/>
											<span
												className={`${styles["stock-up"]} ml-2`}
											>
												10.0%
											</span>
										</div>
									</div>
									<div
										className={`${"box-content"} d-flex flex-column`}
									>
										<span
											className={`${"box-content-number"} text-bold-normal`}
										>
											856
										</span>
										<span
											className={`${styles["box-content-type"]} text-gray`}
										>
											Product
										</span>
									</div>
								</div>
							</div>
							<div className={`${styles["col-3"]} col-3`}>
								<div className="bg-w rounded border p-3">
									<div
										className={`${styles["box-title"]} pb-2 d-flex align-items-center justify-content-between`}
									>
										<div>
											<h5>Total Orders</h5>
										</div>
										<div
											className={`${styles["box-img"]}  d-flex align-items-center`}
										>
											<Image
												src="../../../assets/svg/stock-up.svg"
												alt=""
											/>
											<span
												className={`${styles["stock-up"]} ml-2`}
											>
												10.0%
											</span>
										</div>
									</div>
									<div
										className={`${"box-content"} d-flex flex-column`}
									>
										<span
											className={`${"box-content-number"} text-bold-normal`}
										>
											856
										</span>
										<span
											className={`${styles["box-content-type"]} text-gray`}
										>
											Order
										</span>
									</div>
								</div>
							</div>
							<div className={`${styles["col-3"]} col-3`}>
								<div className="bg-w rounded border p-3">
									<div
										className={`${styles["box-title"]} pb-2 d-flex align-items-center justify-content-between`}
									>
										<div>
											<h5>New vouchers</h5>
										</div>
										<div
											className={`${styles["box-img"]}  d-flex align-items-center`}
										>
											<Image
												src="../../../assets/svg/stock-down.svg"
												alt=""
											/>
											<span
												className={`${styles["stock-down"]} ml-2`}
											>
												10.0%
											</span>
										</div>
									</div>
									<div
										className={`${"box-content"} d-flex flex-column`}
									>
										<span
											className={`${"box-content-number"} text-bold-normal`}
										>
											856
										</span>
										<span
											className={`${styles["box-content-type"]} text-gray`}
										>
											Voucher
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles["statistic"]} mt-4`}>
							<div className="bg-w border rounded">
								<div className="p-3">
									<div
										className={`${styles["header"]} d-flex align-items-center justify-content-between`}
									>
										<div className="title">
											<h5>Statistics</h5>
										</div>
										<div className="d-flex">
											<div className="d-flex align-items-center">
												<div
													className={`${styles["box-color"]} bg-gray mr-3`}
												></div>
												<div>Order</div>
											</div>
											<div className="d-flex align-items-center ml-3">
												<div
													className={`${styles["box-color"]} bg-primary mr-3`}
												></div>
												<div>Revenue</div>
											</div>
											<div className="ml-3">
												<select
													id="cars"
													className="border text-primary p-1"
												>
													<option value="volvo">
														Today
													</option>
													<option value="saab">
														This week
													</option>
													<option value="opel">
														This month
													</option>
													<option value="audi">
														Audi
													</option>
												</select>
											</div>
										</div>
									</div>
									<div
										className={`${styles["diagram"]} pt-4`}
									>
										<div className="d-flex flex-column justify-content-between">
											<div
												className={`${styles["line-diagram"]} d-flex align-items-center`}
											>
												<div className="text-gray">
													100
												</div>
												<div className=""></div>
											</div>
											<div
												className={`${styles["line-diagram"]} d-flex align-items-center`}
											>
												<div className="text-gray">
													80
												</div>
												<div className=""></div>
											</div>
											<div
												className={`${styles["line-diagram"]} d-flex align-items-center`}
											>
												<div className="text-gray">
													60
												</div>
												<div className=""></div>
											</div>
											<div
												className={`${styles["line-diagram"]} d-flex align-items-center`}
											>
												<div className="text-gray">
													40
												</div>
												<div className=""></div>
											</div>
											<div
												className={`${styles["line-diagram"]} d-flex align-items-center`}
											>
												<div className="text-gray">
													20
												</div>
												<div className=""></div>
											</div>
											<div
												className={`${styles["line-diagram"]} d-flex align-items-center`}
											>
												<div className="text-gray">
													0
												</div>
												<div className=""></div>
											</div>
										</div>
										<div className="row pl-4 pr-1 pt-2">
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "80%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "80%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "80%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
											<div
												className={`${styles["column-statistic"]}`}
											>
												<div
													className="bg-gray"
													style={{ height: "90%" }}
												></div>
												<div
													className="bg-primary"
													style={{ height: "60%" }}
												></div>
												<div
													className={`${styles["lable"]} text-center text-gray`}
												>
													2020
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-8 pr-3">
								<div className="bg-w border rounded">
									<div className="p-3">
										<div
											className={`${styles["header"]} d-flex align-items-center justify-content-between`}
										>
											<div className="title">
												<h5>Customers Status</h5>
											</div>
											<div className="d-flex">
												<a
													href="/"
													className="text-primary bg-gray p-4 pt-2 pb-2 rounded"
												>
													More
												</a>
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
																			Employee
																			Name
																		</th>
																		<th className="text-center">
																			Email
																		</th>
																		<th className="text-center">
																			Age
																		</th>
																		<th className="text-center">
																			Membership
																			tiers
																		</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td className="">
																			Justin
																			Lipshutz
																		</td>
																		<td className="text-center">
																			nhom123@gmail.com
																		</td>
																		<td className="text-center">
																			22
																		</td>
																		<td
																			className={`${styles["tier"]} d-flex justify-content-center`}
																		>
																			<div
																				className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${styles["bronze-tier"]}`}
																			>
																				Bronze
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td className="">
																			Justin
																			Lipshutz
																		</td>
																		<td className="text-center">
																			nhom123@gmail.com
																		</td>
																		<td className="text-center">
																			22
																		</td>
																		<td
																			className={`${styles["tier"]} d-flex justify-content-center`}
																		>
																			<div
																				className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${styles["gold-tier"]}`}
																			>
																				Gold
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td className="">
																			Justin
																			Lipshutz
																		</td>
																		<td className="text-center">
																			nhom123@gmail.com
																		</td>
																		<td className="text-center">
																			22
																		</td>
																		<td
																			className={`${styles["tier"]} d-flex justify-content-center`}
																		>
																			<div
																				className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${styles["sliver-tier"]}`}
																			>
																				Sliver
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td className="">
																			Justin
																			Lipshutz
																		</td>
																		<td className="text-center">
																			nhom123@gmail.com
																		</td>
																		<td className="text-center">
																			22
																		</td>
																		<td
																			className={`${styles["tier"]} d-flex justify-content-center`}
																		>
																			<div
																				className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${styles["sliver-tier"]}`}
																			>
																				Sliver
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td className="">
																			Justin
																			Lipshutz
																		</td>
																		<td className="text-center">
																			nhom123@gmail.com
																		</td>
																		<td className="text-center">
																			22
																		</td>
																		<td
																			className={`${styles["tier"]} d-flex justify-content-center`}
																		>
																			<div
																				className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${styles["sliver-tier"]}`}
																			>
																				Sliver
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
							<div className="col-4">
								<div className="bg-w border rounded">
									<div className="p-3">
										<div className="header d-flex align-items-center justify-content-between">
											<div className="title">
												<h5>Customer Composition</h5>
											</div>
										</div>
										<div className="content-customer mt-3">
											<div
												className={`${styles["circle-customer"]} d-flex justify-content-center`}
											>
												<div
													style={{
														background:
															"conic-gradient(#5932ea 0, #5932ea 72.7%, #16c098 0, #16c098 100%)",
													}}
												></div>
												<div>
													<div
														className={`${"percent-circle"}`}
													>
														<div className="bg-w rounded p-2 border d-flex align-items-center">
															<svg
																className="mr-2"
																data-src="../../../../assets/svg/person.svg"
																style={{
																	color: "#5832E6",
																}}
															></svg>
															<span>72.7%</span>
														</div>
														<div
															className="bg-w rounded p-2 border d-flex align-items-center"
															style={{
																top: "calc(27.3% - 20px)",
															}}
														>
															<svg
																className="mr-2"
																data-src="../../../../assets/svg/person-male.svg"
																style={{
																	color: "#16C098",
																}}
															></svg>
															<span>27.3%</span>
														</div>
													</div>
												</div>
											</div>
											<div
												className={`${"box-title"} text-gray mt-3`}
											>
												<div className="text-center">
													<h5>856 customer total</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Dashboard;
